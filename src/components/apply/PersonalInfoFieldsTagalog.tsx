import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Phone } from "lucide-react";
import { Control } from "react-hook-form";
import { ApplyFormData } from "@/types/apply";

interface PersonalInfoFieldsTagalogProps {
  control: Control<ApplyFormData>;
}

const PersonalInfoFieldsTagalog = ({ control }: PersonalInfoFieldsTagalogProps) => {
  return (
    <>
      <FormField
        control={control}
        name="fullName"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-primary font-semibold">Buong Pangalan *</FormLabel>
            <FormControl>
              <Input placeholder="Ilagay ang inyong buong pangalan" className="border-primary/20 focus:border-primary" {...field} />
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
              <FormLabel className="text-primary font-semibold">Email Address (Opsyonal)</FormLabel>
              <FormControl>
                <Input placeholder="inyong.email@halimbawa.com" className="border-primary/20 focus:border-primary" {...field} />
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
                Numero ng Telepono *
              </FormLabel>
              <FormControl>
                <Input placeholder="+63 912 345 6789" className="border-primary/20 focus:border-primary" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
};

export default PersonalInfoFieldsTagalog;