
import { Candidate } from "@/data/candidates";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CandidateCardProps {
  candidate: Candidate;
}

const CandidateCard = ({ candidate }: CandidateCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br from-emerald-50 to-emerald-100/30">
      {/* Header with photo and basic info */}
      <CardHeader className="bg-emerald-600 text-white p-6">
        <div className="flex items-start gap-4">
          <Avatar className="h-20 w-20 ring-4 ring-white/20">
            <AvatarImage src={candidate.avatarUrl} alt={candidate.name} />
            <AvatarFallback className="bg-white text-emerald-600 font-bold text-xl">
              {candidate.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white">{candidate.name}</h3>
            <p className="text-emerald-100 font-medium mb-2">{candidate.headline}</p>
            {candidate.experience && (
              <div className="inline-block bg-emerald-700 text-emerald-100 px-3 py-1 rounded text-sm font-medium">
                {candidate.experience} Experience
              </div>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        {/* Personal Details Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-emerald-800 text-lg border-b border-emerald-200 pb-2">
              Personal Details
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 font-medium">Location:</span>
                <span className="text-gray-800">{candidate.location}</span>
              </div>
              {candidate.availability && (
                <div className="flex justify-between">
                  <span className="text-gray-600 font-medium">Availability:</span>
                  <span className="text-gray-800">{candidate.availability}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-gray-600 font-medium">Can Join:</span>
                <span className="text-gray-800">Immediately</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 font-medium">Status:</span>
                <span className="text-green-600 font-medium">Available</span>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-4">
            <h4 className="font-semibold text-emerald-800 text-lg border-b border-emerald-200 pb-2">
              Skills
            </h4>
            <div className="space-y-2">
              {candidate.skills.slice(0, 6).map((skill) => (
                <div key={skill} className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">{skill}</span>
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 text-xs">
                    ✓
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Languages Section */}
        <div className="space-y-4">
          <h4 className="font-semibold text-emerald-800 text-lg border-b border-emerald-200 pb-2">
            Languages
          </h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">English</span>
              <span className="text-gray-800">Fluent</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Spanish</span>
              <span className="text-gray-800">Native</span>
            </div>
          </div>
        </div>

        {/* Experience Summary */}
        {candidate.experience && (
          <div className="space-y-4">
            <h4 className="font-semibold text-emerald-800 text-lg border-b border-emerald-200 pb-2">
              Experience Summary
            </h4>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                Professional caregiver with {candidate.experience.toLowerCase()} of dedicated service. 
                Specializing in {candidate.skills.slice(0, 3).join(', ').toLowerCase()} with a focus on 
                compassionate, personalized care for families.
              </p>
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="pt-4 border-t border-emerald-200">
          <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
            View Full Profile & Contact
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CandidateCard;
