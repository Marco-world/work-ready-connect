
import { Candidate } from "@/data/candidates";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users } from "lucide-react";

interface ProfileHeaderProps {
  candidate: Candidate;
}

const ProfileHeader = ({ candidate }: ProfileHeaderProps) => {
  return (
    <Card className="overflow-hidden mb-8 bg-gradient-to-br from-emerald-50 to-emerald-100/30">
      <CardHeader className="bg-emerald-600 text-white p-8">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <Avatar className="h-32 w-32 ring-4 ring-white/20">
            <AvatarImage src={candidate.avatarUrl} alt={candidate.name} />
            <AvatarFallback className="bg-white text-emerald-600 font-bold text-2xl">
              {candidate.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-white mb-2">{candidate.name}</h1>
            <p className="text-emerald-100 font-medium text-lg mb-4">{candidate.headline}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-emerald-700 text-emerald-100 px-3 py-1">
                <MapPin className="mr-1 h-3 w-3" />
                {candidate.location}
              </Badge>
              {candidate.experience && (
                <Badge className="bg-emerald-700 text-emerald-100 px-3 py-1">
                  <Clock className="mr-1 h-3 w-3" />
                  {candidate.experience} Experience
                </Badge>
              )}
              {candidate.availability && (
                <Badge className="bg-emerald-700 text-emerald-100 px-3 py-1">
                  <Users className="mr-1 h-3 w-3" />
                  {candidate.availability}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ProfileHeader;
