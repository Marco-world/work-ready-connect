
import { z } from "zod";

export const formSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  headline: z.string().min(1, "Professional title is required"),
  selectedSkills: z.array(z.string()).min(1, "Please select at least one skill"),
  bio: z.string().min(10, "Please provide a brief professional description (at least 10 characters)"),
});

export type ApplyFormData = z.infer<typeof formSchema>;
