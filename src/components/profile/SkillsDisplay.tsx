
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AVAILABLE_SKILLS } from "@/constants/skills";
import { CaregiverWithCareTypes } from "@/hooks/useCaregivers";

interface SkillsDisplayProps {
  candidate: CaregiverWithCareTypes;
}

const SkillsDisplay = ({ candidate }: SkillsDisplayProps) => {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-bold text-emerald-800">Care Types & Skills</h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Specializes in:</h3>
            <div className="flex flex-wrap gap-2">
              {candidate.care_types.map((careType) => (
                <Badge
                  key={careType}
                  className="bg-emerald-100 text-emerald-700"
                >
                  {careType}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-gray-700">Additional Skills:</h3>
            {AVAILABLE_SKILLS.map((skill) => {
              const hasSkill = candidate.care_types.some(careType => 
                careType.toLowerCase().includes(skill.toLowerCase()) ||
                skill.toLowerCase().includes(careType.toLowerCase())
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
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsDisplay;
