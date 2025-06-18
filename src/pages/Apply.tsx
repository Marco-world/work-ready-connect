
import { z } from "zod";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Star, Award, Phone } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";

const formSchema = z.object({
  fullName: z.string().optional(),
  email: z.string().optional(),
  phoneNumber: z.string().min(1, "Phone number is required"),
  headline: z.string().optional(),
  selectedSkills: z.array(z.string()).optional(),
  bio: z.string().optional(),
});

const AVAILABLE_SKILLS = [
  "Cleaning",
  "Washing", 
  "Ironing",
  "Baby Sitting",
  "New Born Care",
  "Decorating",
  "Housekeeping",
  "Caregiver",
  "Old Person Care",
  "Cooking",
  "Driving"
];

const Apply = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
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

  async function onSubmit(values: z.infer<typeof formSchema>) {
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
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <div className="container py-12 flex justify-center">
        <Card className="w-full max-w-2xl animate-fade-in shadow-xl border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-t-lg">
            <CardTitle className="text-3xl flex items-center justify-center gap-3 text-primary">
              <Briefcase className="h-8 w-8" />
              Professional Caregiver Application
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground mt-4">
              Join our elite network of healthcare professionals and make a meaningful impact in families' lives. 
              Build your career with CareLink's trusted community.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-8">
            {/* Professional Benefits Section */}
            <div className="mb-8 grid md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-primary/5 rounded-lg">
                <Star className="h-6 w-6 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-sm">Premium Clients</h4>
                <p className="text-xs text-muted-foreground">Work with verified families</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg">
                <Award className="h-6 w-6 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-sm">Career Growth</h4>
                <p className="text-xs text-muted-foreground">Professional development</p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg">
                <Briefcase className="h-6 w-6 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-sm">Flexible Work</h4>
                <p className="text-xs text-muted-foreground">Choose your schedule</p>
              </div>
            </div>

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
                
                {/* Skills Selection */}
                <FormField
                  control={form.control}
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
                              onCheckedChange={(checked) => handleSkillChange(skill, checked as boolean)}
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Apply;
