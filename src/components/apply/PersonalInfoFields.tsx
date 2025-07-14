
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Phone } from "lucide-react";
import { Control } from "react-hook-form";
import { ApplyFormData } from "@/types/apply";

interface PersonalInfoFieldsProps {
  control: Control<ApplyFormData>;
}

const PersonalInfoFields = ({ control }: PersonalInfoFieldsProps) => {
  return (
    <>
      <FormField
        control={control}
        name="fullName"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-primary font-semibold">Professional Name</FormLabel>
            <FormControl>
              <Input placeholder="e.g. Maria Rodriguez, RN" className="border-primary/20 focus:border-primary" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <div className="grid md:grid-cols-2 gap-4">
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary font-semibold">Email Address</FormLabel>
              <FormControl>
                <Input placeholder="your.email@example.com" className="border-primary/20 focus:border-primary" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary font-semibold flex items-center gap-1">
                <Phone className="h-4 w-4" />
                Phone Number
              </FormLabel>
              <FormControl>
                <Input placeholder="+1 (555) 123-4567" className="border-primary/20 focus:border-primary" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
};

export default PersonalInfoFields;
