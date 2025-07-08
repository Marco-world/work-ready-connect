import { useState, useEffect } from "react";
import { fetchCandidates, Candidate } from "@/data/candidates";
import CandidateCard from "@/components/CandidateCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProfessionalsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    fetchCandidates().then(setCandidates);
  }, []);

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
    if (candidates.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % candidates.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [candidates.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % candidates.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? candidates.length - 1 : prevIndex - 1);
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
      <div className="overflow-hidden">
        <div className="flex transition-all duration-500 ease-in-out gap-6">
          {visibleCandidates.map((candidate, index) => (
            <div 
              key={`${candidate?.id}-${currentIndex}-${index}`}
              className="flex-shrink-0"
              style={{ width: `${100 / cardsPerView}%` }}
            >
              {candidate && <CandidateCard candidate={candidate} />}
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
        onClick={prevSlide}
        disabled={candidates.length === 0}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
        onClick={nextSlide}
        disabled={candidates.length === 0}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
      
      {/* Indicators */}
      <div className="flex justify-center mt-6 gap-2">
        {candidates.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-primary w-8' : 'bg-primary/30'
            }`}
            onClick={() => setCurrentIndex(index)}
            disabled={candidates.length === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfessionalsCarousel;
