
import { z } from "zod";

export const formSchema = z.object({
  fullName: z.string().optional(),
  email: z.string().optional(),
  phoneNumber: z.string().min(1, "Phone number is required"),
  headline: z.string().optional(),
  selectedSkills: z.array(z.string()).optional(),
  bio: z.string().optional(),
});

export type ApplyFormData = z.infer<typeof formSchema>;
