import { useState, useEffect, useRef } from "react";
import { candidates } from "@/data/candidates";
import CandidateCard from "@/components/CandidateCard";

const TRANSITION_DURATION = 300; // ms
const EASING = "cubic-bezier(0.25,0.1,0.25,1)";
const SWIPE_THRESHOLD = 50; // px
const VELOCITY_THRESHOLD = 0.3; // px/ms

const ProfessionalsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragStartTime, setDragStartTime] = useState<number | null>(null);
  const [dragDelta, setDragDelta] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [bounce, setBounce] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive cards per view
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

  // Padding based on viewport
  const getPadding = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 32;
      if (window.innerWidth >= 768) return 24;
    }
    return 16;
  };

  // Calculate centering offset for grid
  const getCenteringOffset = () => {
    const padding = getPadding();
    if (!containerRef.current) return `0px`;
    const containerWidth = containerRef.current.offsetWidth - 2 * padding;
    const gap = 24; // 1.5rem
    const cardWidth = (containerWidth - gap * (cardsPerView - 1)) / cardsPerView;
    // Center the active card(s) in the viewport
    // Offset = (containerWidth - (cardsPerView * cardWidth + (cardsPerView-1)*gap)) / 2
    // But since cardWidth is calculated as above, offset is just padding
    return `${padding}px`;
  };

  // Touch/Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (transitioning) return;
    setIsDragging(true);
    setDragStartX(e.touches[0].clientX);
    setDragStartTime(Date.now());
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

    const now = Date.now();
    const velocity =
      dragStartTime && now !== dragStartTime
        ? dragDelta / (now - dragStartTime)
        : 0;

    if (
      dragDelta > SWIPE_THRESHOLD ||
      velocity > VELOCITY_THRESHOLD
    ) {
      triggerSwipe("prev");
    } else if (
      dragDelta < -SWIPE_THRESHOLD ||
      velocity < -VELOCITY_THRESHOLD
    ) {
      triggerSwipe("next");
    } else {
      // Snap back if not enough swipe
      setBounce(true);
      setTimeout(() => {
        setBounce(false);
        setDragDelta(0);
      }, TRANSITION_DURATION);
    }
    setDragDelta(0);
    setDragStartTime(null);
  };

  // Mouse drag support for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    if (transitioning) return;
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragStartTime(Date.now());
    setDragDelta(0);
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || transitioning || dragStartX === null) return;
    const delta = e.clientX - dragStartX;
    setDragDelta(delta);
  };
  const handleMouseUp = () => {
    if (!isDragging || transitioning) return;
    setIsDragging(false);

    const now = Date.now();
    const velocity =
      dragStartTime && now !== dragStartTime
        ? dragDelta / (now - dragStartTime)
        : 0;

    if (
      dragDelta > SWIPE_THRESHOLD ||
      velocity > VELOCITY_THRESHOLD
    ) {
      triggerSwipe("prev");
    } else if (
      dragDelta < -SWIPE_THRESHOLD ||
      velocity < -VELOCITY_THRESHOLD
    ) {
      triggerSwipe("next");
    } else {
      setBounce(true);
      setTimeout(() => {
        setBounce(false);
        setDragDelta(0);
      }, TRANSITION_DURATION);
    }
    setDragDelta(0);
    setDragStartTime(null);
  };
  const handleMouseLeave = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setDragDelta(0);
    setDragStartTime(null);
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

  // Swipe trigger with edge bounce
  const triggerSwipe = (direction: "next" | "prev") => {
    if (direction === "next") {
      handleNext();
    } else if (direction === "prev") {
      handlePrev();
    }
  };

  // Card width calculation
  const gapCount = cardsPerView - 1;
  const gap = 24; // px
  const cardWidthPercent = `calc((100% - ${gapCount} * ${gap}px) / ${cardsPerView})`;

  // Centering offset calculation for transform
  const getTransform = () => {
    // Center the active card(s) in the viewport
    const offset = getCenteringOffset();
    const slideWidth = 100 / cardsPerView;
    // Drag delta in percent of container width
    const dragPercent =
      isDragging && containerRef.current
        ? (dragDelta / containerRef.current.offsetWidth) * 100
        : 0;
    // Bounce effect
    const bouncePx = bounce ? (dragDelta > 0 ? 16 : -16) : 0;
    return `translateX(calc(-${currentIndex * slideWidth}% + ${offset} + ${dragPercent}% + ${bouncePx}px))`;
  };

  return (
    <div
      className="relative w-full overflow-hidden outline-none px-4 md:px-6 lg:px-8"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label="Professionals carousel"
    >
      <div
        className="w-full grid place-items-center"
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        role="region"
        aria-roledescription="carousel"
        style={{ cursor: isDragging ? "grabbing" : "grab", userSelect: "none" }}
      >
        <div
          className="grid grid-flow-col auto-cols-[calc((100%-_var(--gap)*_var(--n-gap))/var(--n-cards))] gap-6 transition-transform"
          style={{
            '--n-cards': cardsPerView,
            '--n-gap': gapCount,
            '--gap': `${gap}px`,
            transform: getTransform(),
            transition: transitioning && !isDragging
              ? `transform ${TRANSITION_DURATION}ms ${EASING}`
              : "none",
          } as React.CSSProperties}
        >
          {candidates.map((candidate, index) => (
            <div
              key={`${candidate.id}-${index}`}
              className="relative"
              style={{
                width: cardWidthPercent,
                maxWidth: "100vw",
                pointerEvents: index === currentIndex ? "auto" : "none",
                zIndex: index === currentIndex ? 2 : 1,
                transition: `transform ${TRANSITION_DURATION}ms ${EASING}, opacity ${TRANSITION_DURATION}ms ${EASING}`,
                transform: index === currentIndex ? "scale(1)" : "scale(0.9)",
                opacity: index === currentIndex ? 1 : 0.7,
              }}
              tabIndex={index === currentIndex ? 0 : -1}
              aria-current={index === currentIndex}
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
