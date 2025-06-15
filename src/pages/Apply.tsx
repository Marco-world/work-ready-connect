
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
import { toast } from "sonner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  headline: z.string().min(5, { message: "Headline must be at least 5 characters." }),
  skills: z.string().min(2, { message: "Please list at least one skill." }),
  portfolioUrl: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal('')),
  bio: z.string().min(20, { message: "Bio must be at least 20 characters." }),
});

const Apply = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      headline: "",
      skills: "",
      portfolioUrl: "",
      bio: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Application Submitted:", values);
    toast.success("Application Submitted!", {
      description: "Thank you for wanting to join our caring community. We will be in touch shortly.",
    });
    form.reset();
  }

  return (
    <div className="container py-12 flex justify-center">
      <Card className="w-full max-w-2xl animate-fade-in">
        <CardHeader className="text-center bg-gradient-to-r from-primary/5 to-transparent">
          <CardTitle className="text-2xl flex items-center justify-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            Join Our Caring Community
          </CardTitle>
          <CardDescription>
            Are you passionate about caring for others? Join our team of dedicated professionals and make a meaningful difference in families' lives.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Maria Rodriguez" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. maria@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="headline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Professional Role</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Certified Registered Nurse, Professional Nanny" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="skills"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Skills & Certifications</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Patient Care, CPR Certified, Child Development" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="portfolioUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Professional Profile / References</FormLabel>
                    <FormControl>
                      <Input placeholder="https://linkedin.com/in/yourprofile" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Why do you love caring for others?</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your passion for caregiving and what drives you to help families..."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full hover-scale" size="lg">
                <Heart className="mr-2 h-5 w-5" />
                Join Our Team
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Apply;
