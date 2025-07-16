import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Control } from "react-hook-form";
import { ApplyFormData } from "@/types/apply";

interface LanguageSelectorProps {
  control: Control<ApplyFormData>;
}

const LanguageSelector = ({ control }: LanguageSelectorProps) => {
  return (
    <FormField
      control={control}
      name="language"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-primary font-semibold">
            Preferred Language (Optional)
          </FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="border-primary/20 focus:border-primary">
                <SelectValue placeholder="Select your preferred language" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="tagalog">
                Tagalog{" "}
                <a 
                  href="https://en.wikipedia.org/wiki/Filipino_language" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline ml-1"
                >
                  (Learn more)
                </a>
              </SelectItem>
              <SelectItem value="spanish">Spanish</SelectItem>
              <SelectItem value="mandarin">Mandarin</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default LanguageSelector;