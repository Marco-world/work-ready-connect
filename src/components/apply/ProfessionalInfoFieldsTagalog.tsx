import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Control } from "react-hook-form";
import { ApplyFormData } from "@/types/apply";

interface ProfessionalInfoFieldsTagalogProps {
  control: Control<ApplyFormData>;
}

const ProfessionalInfoFieldsTagalog = ({ control }: ProfessionalInfoFieldsTagalogProps) => {
  return (
    <>
      <FormField
        control={control}
        name="headline"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-primary font-semibold">Titulo at Mga Kredensyal ng Household Worker (Opsyonal)</FormLabel>
            <FormControl>
              <Input placeholder="hal. Certified na Caregiver, Licensed na Childcare Provider" className="border-primary/20 focus:border-primary" {...field} />
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
            <FormLabel className="text-primary font-semibold">Pananaw at Karanasan sa Household Work (Opsyonal)</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Ikwento ang inyong approach sa pag-aalaga, mga taon ng karanasan, at kung ano ang nagbibigay inspirasyon sa inyo sa trabahong ito..."
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

export default ProfessionalInfoFieldsTagalog;