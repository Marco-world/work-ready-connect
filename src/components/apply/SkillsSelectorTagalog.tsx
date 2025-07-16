import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { Control } from "react-hook-form";
import { ApplyFormData } from "@/types/apply";
import { AVAILABLE_SKILLS } from "@/constants/skills";

interface SkillsSelectorTagalogProps {
  control: Control<ApplyFormData>;
  selectedSkills: string[];
  onSkillChange: (skill: string, checked: boolean) => void;
}

const SkillsSelectorTagalog = ({ control, selectedSkills, onSkillChange }: SkillsSelectorTagalogProps) => {
  return (
    <FormField
      control={control}
      name="selectedSkills"
      render={() => (
        <FormItem>
          <FormLabel className="text-primary font-semibold flex items-center gap-1">
            <Star className="h-4 w-4 text-emerald-600" />
            Mga Kasanayan at Serbisyo *
          </FormLabel>
          <FormControl>
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium text-sm text-primary/80 uppercase tracking-wide">
                  Mga Kasanayan sa Household Work
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {AVAILABLE_SKILLS.map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <Checkbox
                        id={skill}
                        checked={selectedSkills.includes(skill)}
                        onCheckedChange={(checked) => onSkillChange(skill, checked as boolean)}
                        className="border-primary/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                      />
                      <label
                        htmlFor={skill}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        {skill === "Cleaning" ? "Paglilinis" :
                         skill === "Washing" ? "Paglalaba" :
                         skill === "Ironing" ? "Pag-paplantsa" :
                         skill === "Baby Sitting" ? "Pag-aalaga sa Sanggol" :
                         skill === "New Born Care" ? "Pag-aalaga sa Bagong Panganak" :
                         skill === "Decorating" ? "Pag-dedekorasyon" :
                         skill === "Housekeeping" ? "Pag-aayos ng Bahay" :
                         skill === "Household worker" ? "Household Worker" :
                         skill === "Old Person Care" ? "Pag-aalaga sa Matatanda" :
                         skill === "Cooking" ? "Pagluluto" :
                         skill === "Driving" ? "Pagmamaneho" : skill}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FormControl>
          
          {selectedSkills.length > 0 && (
            <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
              <p className="text-sm font-medium text-primary mb-2">Mga Napiling Kasanayan:</p>
              <div className="flex flex-wrap gap-2">
                {selectedSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SkillsSelectorTagalog;