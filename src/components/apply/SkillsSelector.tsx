
import { FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Control } from "react-hook-form";
import { ApplyFormData } from "@/types/apply";
import { AVAILABLE_SKILLS } from "@/constants/skills";

interface SkillsSelectorProps {
  control: Control<ApplyFormData>;
  selectedSkills: string[];
  onSkillChange: (skill: string, checked: boolean) => void;
}

const SkillsSelector = ({ control, selectedSkills, onSkillChange }: SkillsSelectorProps) => {
  return (
    <FormField
      control={control}
      name="selectedSkills"
      render={() => (
        <FormItem>
          <FormLabel className="text-primary font-semibold">Professional Skills</FormLabel>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
            {AVAILABLE_SKILLS.map(skill => (
              <div key={skill} className="flex items-center space-x-2">
                <Checkbox
                  id={`skill-${skill}`}
                  checked={selectedSkills.includes(skill)}
                  onCheckedChange={(checked) => onSkillChange(skill, checked as boolean)}
                  className="border-primary/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <Label 
                  htmlFor={`skill-${skill}`}
                  className="text-sm text-gray-700 cursor-pointer"
                >
                  {skill}
                </Label>
              </div>
            ))}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SkillsSelector;
