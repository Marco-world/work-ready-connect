
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Control } from "react-hook-form";
import { ApplyFormData } from "@/types/apply";

interface ProfessionalInfoFieldsProps {
  control: Control<ApplyFormData>;
}

const ProfessionalInfoFields = ({ control }: ProfessionalInfoFieldsProps) => {
  return (
    <>
      <FormField
        control={control}
        name="headline"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-primary font-semibold">Household Worker Title & Credentials</FormLabel>
            <FormControl>
              <Input placeholder="e.g. Certified Registered Nurse, Licensed Childcare Provider" className="border-primary/20 focus:border-primary" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={control}
        name="bio"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-primary font-semibold">Household Worker Philosophy & Experience</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Share your household worker approach to caregiving, years of experience, and what motivates you to excel in healthcare..."
                className="resize-none border-primary/20 focus:border-primary h-32"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default ProfessionalInfoFields;
