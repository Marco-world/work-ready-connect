
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const contactSchema = z.object({
  name: z.string().optional(),
  phonePrefix: z.string().min(1, { message: "Please select a phone prefix." }),
  mobile: z.string().min(7, { message: "Please enter a valid mobile number." }),
  serviceNeeded: z.string().optional(),
  location: z.string().optional(),
  additionalDetails: z.string().optional(),
});

const phonePrefix = [
  { value: "+1", label: "+1 (US/Canada)" },
  { value: "+44", label: "+44 (UK)" },
  { value: "+33", label: "+33 (France)" },
  { value: "+49", label: "+49 (Germany)" },
  { value: "+91", label: "+91 (India)" },
  { value: "+86", label: "+86 (China)" },
  { value: "+81", label: "+81 (Japan)" },
  { value: "+61", label: "+61 (Australia)" },
  { value: "+39", label: "+39 (Italy)" },
  { value: "+34", label: "+34 (Spain)" },
  { value: "+31", label: "+31 (Netherlands)" },
  { value: "+46", label: "+46 (Sweden)" },
  { value: "+47", label: "+47 (Norway)" },
  { value: "+45", label: "+45 (Denmark)" },
  { value: "+41", label: "+41 (Switzerland)" },
  { value: "+43", label: "+43 (Austria)" },
  { value: "+32", label: "+32 (Belgium)" },
  { value: "+351", label: "+351 (Portugal)" },
  { value: "+55", label: "+55 (Brazil)" },
  { value: "+52", label: "+52 (Mexico)" },
  { value: "+27", label: "+27 (South Africa)" },
  { value: "+971", label: "+971 (UAE)" },
  { value: "+966", label: "+966 (Saudi Arabia)" },
];

const services = [
  { value: "nursing", label: "Nursing Care" },
  { value: "childcare", label: "Childcare" },
  { value: "eldercare", label: "Elder Care" },
  { value: "housekeeping", label: "Housekeeping" },
  { value: "companion", label: "Companion Care" },
  { value: "physical-therapy", label: "Physical Therapy" },
  { value: "overnight", label: "Overnight Care" },
  { value: "respite", label: "Respite Care" },
];

const countries = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "uk", label: "United Kingdom" },
  { value: "fr", label: "France" },
  { value: "de", label: "Germany" },
  { value: "it", label: "Italy" },
  { value: "es", label: "Spain" },
  { value: "nl", label: "Netherlands" },
  { value: "se", label: "Sweden" },
  { value: "no", label: "Norway" },
  { value: "dk", label: "Denmark" },
  { value: "ch", label: "Switzerland" },
  { value: "at", label: "Austria" },
  { value: "be", label: "Belgium" },
  { value: "pt", label: "Portugal" },
  { value: "br", label: "Brazil" },
  { value: "mx", label: "Mexico" },
  { value: "au", label: "Australia" },
  { value: "jp", label: "Japan" },
  { value: "cn", label: "China" },
  { value: "in", label: "India" },
  { value: "za", label: "South Africa" },
  { value: "ae", label: "United Arab Emirates" },
  { value: "sa", label: "Saudi Arabia" },
];

const ClientContactForm = () => {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phonePrefix: "+1",
      mobile: "",
      serviceNeeded: "",
      location: "",
      additionalDetails: "",
    },
  });

  async function onSubmit(values: z.infer<typeof contactSchema>) {
    try {
      const { error } = await supabase
        .from('client_requests')
        .insert({
          name: values.name || '',
          phone_prefix: values.phonePrefix,
          mobile: values.mobile,
          service_needed: values.serviceNeeded || '',
          location: values.location || '',
          additional_details: values.additionalDetails || '',
        });

      if (error) throw error;

      console.log("Client Contact Request:", values);
      toast.success("Contact Request Received!", {
        description: "Thank you for your interest. We'll connect you with the right caregiver soon.",
      });
      form.reset();
    } catch (error) {
      console.error("Error submitting contact request:", error);
      toast.error("Failed to submit request", {
        description: "Please try again later.",
      });
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white/95 backdrop-blur-sm shadow-2xl">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl flex items-center justify-center gap-2">
          <User className="h-6 w-6 text-primary" />
          Need Care Services?
        </CardTitle>
        <CardDescription className="text-lg">
          Let us connect you with the perfect caregiver
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-semibold">Your Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. John Smith" className="h-12 text-base" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-5 gap-3">
              <div className="col-span-2">
                <FormField
                  control={form.control}
                  name="phonePrefix"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-semibold">Prefix *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {phonePrefix.map((prefix) => (
                            <SelectItem key={prefix.value} value={prefix.value}>
                              {prefix.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-3">
                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-semibold">Mobile Number *</FormLabel>
                      <FormControl>
                        <Input placeholder="1234567890" className="h-12 text-base" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <FormField
              control={form.control}
              name="serviceNeeded"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-semibold">Service Needed</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-semibold">Country</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country.value} value={country.value}>
                          {country.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="additionalDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-semibold">Additional Details (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Any specific requirements or details..."
                      className="resize-none h-24 text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" size="lg" className="w-full h-14 text-lg hover-scale">
              <Phone className="mr-2 h-5 w-5" />
              Request Care Services
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ClientContactForm;
