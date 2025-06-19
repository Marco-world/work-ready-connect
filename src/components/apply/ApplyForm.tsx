
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Briefcase, Phone } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { formSchema, ApplyFormData } from "@/types/apply";
import SkillsSelector from "./SkillsSelector";

const ApplyForm = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const form = useForm<ApplyFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      headline: "",
      selectedSkills: [],
      bio: "",
    },
  });

  const handleSkillChange = (skill: string, checked: boolean) => {
    let updatedSkills;
    if (checked) {
      updatedSkills = [...selectedSkills, skill];
    } else {
      updatedSkills = selectedSkills.filter(s => s !== skill);
    }
    setSelectedSkills(updatedSkills);
    form.setValue('selectedSkills', updatedSkills);
  };

  async function onSubmit(values: ApplyFormData) {
    try {
      const { error } = await supabase
        .from('applicant_submissions')
        .insert({
          full_name: values.fullName || '',
          email: values.email || '',
          phone_number: values.phoneNumber,
          headline: values.headline || '',
          skills: selectedSkills.join(', '),
          selected_skills: selectedSkills,
          bio: values.bio || '',
        });

      if (error) throw error;

      console.log("Professional Application Submitted:", values);
      toast.success("Application Submitted Successfully!", {
        description: "Welcome to the CareLink professional community. Our team will review your application and contact you within 24-48 hours.",
      });
      form.reset();
      setSelectedSkills([]);
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("Application submission failed", {
        description: "Please try again or contact our support team.",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
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
            control={form.control}
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
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-semibold flex items-center gap-1">
                  <Phone className="h-4 w-4" />
                  Phone Number *
                </FormLabel>
                <FormControl>
                  <Input placeholder="+1 (555) 123-4567" className="border-primary/20 focus:border-primary" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="headline"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary font-semibold">Professional Title & Credentials</FormLabel>
              <FormControl>
                <Input placeholder="e.g. Certified Registered Nurse, Licensed Childcare Provider" className="border-primary/20 focus:border-primary" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <SkillsSelector
          control={form.control}
          selectedSkills={selectedSkills}
          onSkillChange={handleSkillChange}
        />
        
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary font-semibold">Professional Philosophy & Experience</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Share your professional approach to caregiving, years of experience, and what motivates you to excel in healthcare..."
                  className="resize-none border-primary/20 focus:border-primary h-32"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" className="w-full hover-scale bg-primary hover:bg-primary/90 text-white" size="lg">
          <Briefcase className="mr-2 h-5 w-5" />
          Submit Professional Application
        </Button>
        
        <p className="text-xs text-center text-muted-foreground">
          By submitting this application, you agree to our professional standards and background verification process.
        </p>
      </form>
    </Form>
  );
};

export default ApplyForm;
