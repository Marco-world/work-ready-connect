
import { useState, useEffect } from "react";
import { candidates } from "@/data/candidates";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Award } from "lucide-react";

const ProfessionalsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % candidates.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-primary/5 to-secondary/10 rounded-2xl p-8">
      <div 
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {candidates.map((candidate) => (
          <div key={candidate.id} className="w-full flex-shrink-0 px-4">
            <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
              <div className="relative">
                <Avatar className="h-32 w-32 md:h-40 md:w-40 ring-4 ring-primary/20 shadow-2xl">
                  <AvatarImage src={candidate.avatarUrl} alt={candidate.name} className="object-cover" />
                  <AvatarFallback className="bg-primary/10 text-primary font-bold text-2xl">
                    {candidate.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-2">
                  <Award className="h-4 w-4" />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left space-y-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">{candidate.name}</h3>
                  <p className="text-lg text-muted-foreground font-medium">{candidate.headline}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {candidate.skills.slice(0, 4).map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 text-sm px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start text-sm">
                  {candidate.experience && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="font-medium">{candidate.experience} experience</span>
                    </div>
                  )}
                  {candidate.availability && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="font-medium">{candidate.availability}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="font-medium">{candidate.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Indicators */}
      <div className="flex justify-center mt-8 gap-2">
        {candidates.map((_, index) => (
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
