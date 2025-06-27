import { useState, useEffect, useRef } from "react";
import { candidates } from "@/data/candidates";
import CandidateCard from "@/components/CandidateCard";

const TRANSITION_DURATION = 300; // ms
const EASING = "cubic-bezier(0.25,0.1,0.25,1)";
const SWIPE_THRESHOLD = 50; // px

const ProfessionalsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragDelta, setDragDelta] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  // Auto-rotation
  useEffect(() => {
    if (isDragging) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
    // eslint-disable-next-line
  }, [currentIndex, isDragging, cardsPerView]);

  // Touch/Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (transitioning) return;
    setIsDragging(true);
    setDragStartX(e.touches[0].clientX);
    setDragDelta(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || transitioning || dragStartX === null) return;
    const delta = e.touches[0].clientX - dragStartX;
    setDragDelta(delta);
  };

  const handleTouchEnd = () => {
    if (!isDragging || transitioning) return;
    setIsDragging(false);

    if (dragDelta > SWIPE_THRESHOLD) {
      handlePrev();
    } else if (dragDelta < -SWIPE_THRESHOLD) {
      handleNext();
    } else {
      // Snap back if not enough swipe
      setTransitioning(true);
      setTimeout(() => {
        setTransitioning(false);
        setDragDelta(0);
      }, TRANSITION_DURATION);
    }
    setDragDelta(0);
  };

  // Keyboard accessibility: left/right arrow
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "ArrowRight") handleNext();
  };

  const handleNext = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % candidates.length);
      setTransitioning(false);
    }, TRANSITION_DURATION);
  };

  const handlePrev = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? candidates.length - 1 : prevIndex - 1
      );
      setTransitioning(false);
    }, TRANSITION_DURATION);
  };

  // Calculate visible candidates
  const getVisibleCandidates = () => {
    const visible = [];
    for (let i = 0; i < cardsPerView; i++) {
      const index = (currentIndex + i) % candidates.length;
      visible.push(candidates[index]);
    }
    return visible;
  };

  const visibleCandidates = getVisibleCandidates();

  // Calculate translateX for sliding
  const slideWidth = 100 / cardsPerView;
  const translateX =
    isDragging && dragDelta !== 0
      ? -dragDelta / (containerRef.current?.offsetWidth || 1) * 100
      : 0;

  return (
    <div
      className="relative w-full outline-none"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label="Professionals carousel"
    >
      <div
        className="overflow-hidden"
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        role="region"
        aria-roledescription="carousel"
      >
        <div
          className="flex gap-6"
          style={{
            transition: transitioning && !isDragging
              ? `transform ${TRANSITION_DURATION}ms ${EASING}`
              : "none",
            transform: `translateX(calc(-${currentIndex * slideWidth}% + ${translateX}%)`
          }}
        >
          {candidates.map((candidate, index) => (
            <div
              key={`${candidate.id}-${index}`}
              className="flex-shrink-0"
              style={{ width: `${slideWidth}%` }}
              tabIndex={-1}
            >
              <CandidateCard candidate={candidate} />
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-6 gap-2">
        {candidates.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-primary ${
              index === currentIndex ? 'bg-primary w-8' : 'bg-primary/30'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfessionalsCarousel;
