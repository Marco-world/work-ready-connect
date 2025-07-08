import { fetchCandidates, Candidate } from "@/data/candidates";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Languages } from "lucide-react";
import { Link } from "react-router-dom";

interface CandidateCardProps {
  candidate: Candidate;
}

const STANDARDIZED_SKILLS = [
  "Cleaning", "Washing", "Ironing", "Baby Sitting", "New Born Care",
  "Decorating", "Housekeeping", "Household worker", "Old Person Care", "Cooking", "Driving"
];

const CandidateCard = ({ candidate }: CandidateCardProps) => {
  const displaySkills = candidate.skills.filter(skill =>
    STANDARDIZED_SKILLS.some(standardSkill =>
      skill.toLowerCase().includes(standardSkill.toLowerCase()) ||
      standardSkill.toLowerCase().includes(skill.toLowerCase())
    )
  );

  return (
    <Card className="bg-white border border-blue-200 hover:border-blue-300 focus:border-blue-400 border-emerald-100 rounded-xl overflow-hidden max-w-md mx-auto p-0 transition-colors">
      {/* Avatar: 3:1, bleeds to edges */}
      <div className="w-full" style={{ aspectRatio: "1 / 1.3" }}>
        <Avatar className="w-full h-full rounded-none">
          <AvatarImage
            src={candidate.avatarUrl}
            alt={candidate.name}
            className="object-cover w-full h-full rounded-none bg-gray-100"
          />
          <AvatarFallback className="bg-white text-emerald-600 font-bold text-5xl flex items-center justify-center w-full h-full rounded-none">
            {candidate.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
      </div>

      <CardContent className="p-6 pt-4 space-y-3">
        {/* Name & Headline */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-emerald-900">{candidate.name}</h3>
          <p className="text-emerald-700 text-sm">{candidate.headline}</p>
        </div>

        {/* Experience as compact badge */}
        {candidate.experience && (
          <div className="flex justify-center">
            <Badge className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 text-xs font-medium flex items-center gap-1">
              <Star className="h-3 w-3 text-emerald-500" />
              {candidate.experience}
            </Badge>
          </div>
        )}

        {/* Location & Availability in one row */}
        <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3 text-emerald-500" />
            {candidate.location}
          </span>
          {candidate.availability && (
            <>
              <span className="text-emerald-200">|</span>
              <span className="flex items-center gap-1">
                <Star className="h-3 w-3 text-emerald-500" />
                <span>Available {candidate.availability}</span>
              </span>
            </>
          )}
        </div>

        {/* Languages */}
        {candidate.languages && candidate.languages.length > 0 && (
          <div className="flex flex-wrap justify-center gap-1">
            <Languages className="h-3 w-3 text-emerald-500 mr-1" />
            {candidate.languages.map((language) => (
              <Badge
                key={language}
                variant="outline"
                className="border-emerald-200 text-emerald-700 text-xs px-2 py-0.5"
              >
                {language}
              </Badge>
            ))}
          </div>
        )}

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-1">
          {displaySkills.slice(0, 3).map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="bg-emerald-50 text-emerald-700 text-xs px-2 py-0.5"
            >
              {skill}
            </Badge>
          ))}
          {displaySkills.length > 3 && (
            <Badge variant="outline" className="text-xs text-gray-500 px-2 py-0.5 border-emerald-200">
              +{displaySkills.length - 3} more
            </Badge>
          )}
        </div>

        {/* Status & Profile Button */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center text-xs py-2 border-t border-emerald-100">
            <span className="text-gray-500">Status:</span>
            <span className="text-green-600 font-medium">Available</span>
          </div>
          <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-md">
            <Link to={`/candidate/${candidate.id}`}>
              View Full Profile
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CandidateCard;
