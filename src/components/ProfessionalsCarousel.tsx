
import { useState, useEffect } from "react";
import CandidateCard from "@/components/CandidateCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCaregivers } from "@/hooks/useCaregivers";

const ProfessionalsCarousel = () => {
  const { data: caregivers = [], isLoading } = useCaregivers();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

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
    if (caregivers.length === 0) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % caregivers.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [caregivers.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % caregivers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? caregivers.length - 1 : prevIndex - 1);
  };

  const getVisibleCaregivers = () => {
    const visible = [];
    for (let i = 0; i < cardsPerView; i++) {
      const index = (currentIndex + i) % caregivers.length;
      visible.push(caregivers[index]);
    }
    return visible;
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg text-emerald-600">Loading household workers...</div>
      </div>
    );
  }

  if (caregivers.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg text-gray-500">No household workers available</div>
      </div>
    );
  }

  const visibleCaregivers = getVisibleCaregivers();

  return (
    <div className="relative w-full">
      <div className="overflow-hidden">
        <div className="flex transition-all duration-500 ease-in-out gap-6">
          {visibleCaregivers.map((caregiver, index) => (
            <div 
              key={`${caregiver.id}-${currentIndex}-${index}`}
              className="flex-shrink-0"
              style={{ width: `${100 / cardsPerView}%` }}
            >
              <CandidateCard candidate={caregiver} />
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
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
      
      {/* Indicators */}
      <div className="flex justify-center mt-6 gap-2">
        {caregivers.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-primary w-8' : 'bg-primary/30'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfessionalsCarousel;
