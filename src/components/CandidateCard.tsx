import { Candidate } from "@/data/candidates";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Star, Languages } from "lucide-react";
import { Link } from "react-router-dom";

interface CandidateCardProps {
  candidate: Candidate;
}

// Standardized skills list
const STANDARDIZED_SKILLS = [
  "Cleaning", "Washing", "Ironing", "Baby Sitting", "New Born Care",
  "Decorating", "Housekeeping", "Household worker", "Old Person Care", "Cooking", "Driving"
];

const CandidateCard = ({ candidate }: CandidateCardProps) => {
  // Filter candidate skills to only show standardized ones
  const displaySkills = candidate.skills.filter(skill => 
    STANDARDIZED_SKILLS.some(standardSkill => 
      skill.toLowerCase().includes(standardSkill.toLowerCase()) ||
      standardSkill.toLowerCase().includes(skill.toLowerCase())
    )
  );

  return (
    <Card className="overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br from-emerald-50 to-emerald-100/30 max-w-md mx-auto">
      {/* Profile Image Section - Avatar is much larger and visually dominant */}
      <CardHeader className="bg-emerald-600 text-white flex flex-col items-center pt-10 pb-6 px-6 relative">
        <div className="relative flex flex-col items-center w-full">
          <Avatar className="h-44 w-44 sm:h-52 sm:w-52 md:h-56 md:w-56 lg:h-64 lg:w-64 mx-auto ring-8 ring-white/30 shadow-lg z-10" /* 176px-256px */>
            <AvatarImage src={candidate.avatarUrl} alt={candidate.name} className="object-cover" />
            <AvatarFallback className="bg-white text-emerald-600 font-bold text-4xl">
              {candidate.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="mt-6 text-center w-full">
            <h3 className="text-2xl font-bold text-white">{candidate.name}</h3>
            <p className="text-emerald-100 font-medium text-base">{candidate.headline}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 pt-4 space-y-5">
        {/* Experience Highlight */}
        {candidate.experience && (
          <div className="text-center p-3 bg-emerald-100 rounded-lg">
            <div className="flex items-center justify-center gap-2 text-emerald-800">
              <Clock className="h-5 w-5" />
              <span className="font-semibold text-lg">{candidate.experience}</span>
            </div>
            <p className="text-sm text-emerald-600">Experience</p>
          </div>
        )}

        {/* Languages */}
        {candidate.languages && candidate.languages.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Languages className="h-4 w-4 text-emerald-600" />
              <h4 className="font-semibold text-emerald-800 text-sm">Languages</h4>
            </div>
            <div className="flex flex-wrap gap-1">
              {candidate.languages.map((language) => (
                <Badge 
                  key={language} 
                  variant="outline" 
                  className="border-emerald-300 text-emerald-700 text-xs"
                >
                  {language}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Quick Details */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-emerald-600" />
            <span className="text-gray-700">{candidate.location}</span>
          </div>

          {candidate.availability && (
            <div className="flex items-center gap-2 text-sm">
              <Star className="h-4 w-4 text-emerald-600" />
              <span className="text-gray-700">Available {candidate.availability}</span>
            </div>
          )}
        </div>

        {/* Standardized Skills Preview */}
        <div className="space-y-2">
          <h4 className="font-semibold text-emerald-800 text-sm">Skills</h4>
          <div className="flex flex-wrap gap-1">
            {displaySkills.slice(0, 3).map((skill) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="bg-emerald-100 text-emerald-700 text-xs"
              >
                {skill}
              </Badge>
            ))}
            {displaySkills.length > 3 && (
              <Badge variant="outline" className="text-xs text-gray-500">
                +{displaySkills.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* Status */}
        <div className="flex justify-between items-center text-sm py-2 border-t border-emerald-100">
          <span className="text-gray-600">Status:</span>
          <span className="text-green-600 font-medium">Available</span>
        </div>

        {/* View Full Profile Button */}
        <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700 text-white mt-2">
          <Link to={`/candidate/${candidate.id}`}>
            View Full Profile
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default CandidateCard;
