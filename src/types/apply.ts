
import { z } from "zod";

export const formSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Please enter a valid email address").optional().or(z.literal("")),
  phoneNumber: z.string().min(1, "Phone number is required"),
  headline: z.string().optional().or(z.literal("")),
  selectedSkills: z.array(z.string()).min(1, "Please select at least one skill"),
  bio: z.string().optional().or(z.literal("")),
  language: z.string().optional().or(z.literal("")),
});

export type ApplyFormData = z.infer<typeof formSchema>;
