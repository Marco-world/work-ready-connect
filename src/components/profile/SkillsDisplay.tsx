
import { Candidate } from "@/data/candidates";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AVAILABLE_SKILLS } from "@/constants/skills";

interface SkillsDisplayProps {
  candidate: Candidate;
}

const SkillsDisplay = ({ candidate }: SkillsDisplayProps) => {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-bold text-emerald-800">Skills</h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {AVAILABLE_SKILLS.map((skill) => {
            const hasSkill = candidate.skills.some(candidateSkill => 
              candidateSkill.toLowerCase().includes(skill.toLowerCase()) ||
              skill.toLowerCase().includes(candidateSkill.toLowerCase())
            );
            
            return (
              <div key={skill} className="flex justify-between items-center text-sm">
                <span className="text-gray-700">{skill}</span>
                <Badge 
                  variant={hasSkill ? "default" : "secondary"}
                  className={hasSkill 
                    ? "bg-emerald-100 text-emerald-700" 
                    : "bg-gray-100 text-gray-500"
                  }
                >
                  {hasSkill ? "✓" : "−"}
                </Badge>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsDisplay;
