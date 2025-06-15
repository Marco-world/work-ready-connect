
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

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phonePrefix: z.string().min(1, { message: "Please select a phone prefix." }),
  mobile: z.string().min(7, { message: "Please enter a valid mobile number." }),
  serviceNeeded: z.string().min(1, { message: "Please select a service." }),
  location: z.string().min(1, { message: "Please select your location." }),
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

const locations = [
  { value: "downtown", label: "Downtown" },
  { value: "north-side", label: "North Side" },
  { value: "south-side", label: "South Side" },
  { value: "east-side", label: "East Side" },
  { value: "west-side", label: "West Side" },
  { value: "suburbs", label: "Suburbs" },
  { value: "uptown", label: "Uptown" },
  { value: "midtown", label: "Midtown" },
];

const ClientContactForm = () => {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phonePrefix: "",
      mobile: "",
      serviceNeeded: "",
      location: "",
      additionalDetails: "",
    },
  });

  function onSubmit(values: z.infer<typeof contactSchema>) {
    console.log("Client Contact Request:", values);
    toast.success("Contact Request Received!", {
      description: "Thank you for your interest. We'll connect you with the right caregiver soon.",
    });
    form.reset();
  }

  return (
    <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-xl flex items-center justify-center gap-2">
          <User className="h-5 w-5 text-primary" />
          Need Care Services?
        </CardTitle>
        <CardDescription>
          Let us connect you with the perfect caregiver
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. John Smith" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-5 gap-2">
              <div className="col-span-2">
                <FormField
                  control={form.control}
                  name="phonePrefix"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Prefix</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
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
                      <FormLabel>Mobile Number</FormLabel>
                      <FormControl>
                        <Input placeholder="1234567890" {...field} />
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
                  <FormLabel>Service Needed</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
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
                  <FormLabel>Location</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your area" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {locations.map((location) => (
                        <SelectItem key={location.value} value={location.value}>
                          {location.label}
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
                  <FormLabel>Additional Details (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Any specific requirements or details..."
                      className="resize-none h-20"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full hover-scale">
              <Phone className="mr-2 h-4 w-4" />
              Request Care Services
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ClientContactForm;
