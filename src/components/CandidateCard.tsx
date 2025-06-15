
import { Candidate } from "@/data/candidates";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Award } from "lucide-react";

interface CandidateCardProps {
  candidate: Candidate;
}

const CandidateCard = ({ candidate }: CandidateCardProps) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 border-l-4 border-l-primary/20">
      <CardHeader className="flex flex-row items-center gap-4 bg-gradient-to-r from-primary/5 to-transparent">
        <Avatar className="h-16 w-16 ring-2 ring-primary/20">
          <AvatarImage src={candidate.avatarUrl} alt={candidate.name} />
          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
            {candidate.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <CardTitle className="text-xl text-foreground">{candidate.name}</CardTitle>
          <p className="text-sm text-muted-foreground font-medium">{candidate.headline}</p>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4 space-y-4">
        <div className="flex flex-wrap gap-2">
          {candidate.skills.slice(0, 4).map((skill) => (
            <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
              {skill}
            </Badge>
          ))}
        </div>
        
        <div className="space-y-2 text-sm">
          {candidate.experience && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Award className="h-4 w-4 text-primary" />
              <span>{candidate.experience} experience</span>
            </div>
          )}
          {candidate.availability && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4 text-primary" />
              <span>{candidate.availability}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center bg-secondary/30 p-4">
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" />
          <span>{candidate.location}</span>
        </div>
        <Button size="sm" className="bg-primary hover:bg-primary/90">
          View Profile
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CandidateCard;
