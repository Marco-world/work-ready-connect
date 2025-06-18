
import { Candidate } from "@/data/candidates";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface CandidateCardProps {
  candidate: Candidate;
}

const CandidateCard = ({ candidate }: CandidateCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br from-emerald-50 to-emerald-100/30">
      {/* Profile Image Section */}
      <CardHeader className="bg-emerald-600 text-white p-6 text-center">
        <Avatar className="h-24 w-24 mx-auto ring-4 ring-white/20 mb-4">
          <AvatarImage src={candidate.avatarUrl} alt={candidate.name} />
          <AvatarFallback className="bg-white text-emerald-600 font-bold text-xl">
            {candidate.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <h3 className="text-xl font-bold text-white">{candidate.name}</h3>
        <p className="text-emerald-100 font-medium">{candidate.headline}</p>
      </CardHeader>

      <CardContent className="p-6 space-y-4">
        {/* Quick Details */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-emerald-600" />
            <span className="text-gray-700">{candidate.location}</span>
          </div>
          
          {candidate.experience && (
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4 text-emerald-600" />
              <span className="text-gray-700">{candidate.experience} Experience</span>
            </div>
          )}

          {candidate.availability && (
            <div className="flex items-center gap-2 text-sm">
              <Star className="h-4 w-4 text-emerald-600" />
              <span className="text-gray-700">Available {candidate.availability}</span>
            </div>
          )}
        </div>

        {/* Top Skills Preview */}
        <div className="space-y-2">
          <h4 className="font-semibold text-emerald-800 text-sm">Top Skills</h4>
          <div className="flex flex-wrap gap-1">
            {candidate.skills.slice(0, 3).map((skill) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="bg-emerald-100 text-emerald-700 text-xs"
              >
                {skill}
              </Badge>
            ))}
            {candidate.skills.length > 3 && (
              <Badge variant="outline" className="text-xs text-gray-500">
                +{candidate.skills.length - 3} more
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
        <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
          <Link to={`/candidate/${candidate.id}`}>
            View Full Profile
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default CandidateCard;
