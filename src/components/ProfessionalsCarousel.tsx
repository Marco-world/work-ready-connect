
import { useState, useEffect, useRef } from "react";
import { candidates } from "@/data/candidates";
import CandidateCard from "@/components/CandidateCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProfessionalsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isDragging) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % candidates.length);
      }
    }, 5000); // Increased to 5 seconds for better UX

    return () => clearInterval(timer);
  }, [isDragging]);

  const smoothTransition = (newIndex: number) => {
    setIsTransitioning(true);
    setCurrentIndex(newIndex);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const nextSlide = () => {
    if (!isTransitioning) {
      smoothTransition((currentIndex + 1) % candidates.length);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      smoothTransition(currentIndex === 0 ? candidates.length - 1 : currentIndex - 1);
    }
  };

  const goToSlide = (index: number) => {
    if (!isTransitioning && index !== currentIndex) {
      smoothTransition(index);
    }
  };

  // Touch/Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    const diff = startX - currentX;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    
    setIsDragging(false);
    setStartX(0);
    setCurrentX(0);
  };

  // Mouse handlers for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setCurrentX(e.clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    const diff = startX - currentX;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    
    setIsDragging(false);
    setStartX(0);
    setCurrentX(0);
  };

  const getVisibleCandidates = () => {
    const visible = [];
    for (let i = 0; i < cardsPerView; i++) {
      const index = (currentIndex + i) % candidates.length;
      visible.push(candidates[index]);
    }
    return visible;
  };

  const visibleCandidates = getVisibleCandidates();

  return (
    <div className="relative w-full">
      <div 
        ref={carouselRef}
        className="overflow-hidden rounded-2xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div 
          className={`flex transition-all duration-500 ease-out gap-6 ${
            isTransitioning ? 'opacity-90 blur-[1px]' : 'opacity-100 blur-0'
          }`}
          style={{
            transform: isDragging ? `translateX(${(currentX - startX) * 0.1}px)` : 'translateX(0)',
          }}
        >
          {visibleCandidates.map((candidate, index) => (
            <div 
              key={`${candidate.id}-${currentIndex}-${index}`}
              className="flex-shrink-0 transition-transform duration-300"
              style={{ width: `${100 / cardsPerView}%` }}
            >
              <CandidateCard candidate={candidate} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Enhanced Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg border-0 h-12 w-12 rounded-full transition-all duration-300 hover:scale-110"
        onClick={prevSlide}
        disabled={isTransitioning}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg border-0 h-12 w-12 rounded-full transition-all duration-300 hover:scale-110"
        onClick={nextSlide}
        disabled={isTransitioning}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
      
      {/* Enhanced Indicators */}
      <div className="flex justify-center mt-8 gap-3">
        {candidates.map((_, index) => (
          <button
            key={index}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-primary w-8 shadow-lg shadow-primary/25' 
                : 'bg-primary/30 w-3 hover:bg-primary/50'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfessionalsCarousel;
