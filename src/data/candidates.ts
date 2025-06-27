
export interface Candidate {
  id: number;
  name: string;
  avatarUrl: string;
  headline: string;
  skills: string[];
  location: string;
  experience?: string;
  availability?: string;
  languages?: string[];
}

export const candidates: Candidate[] = [
  {
    id: 1,
    name: "Maria Rodriguez",
    avatarUrl: `https://i.pravatar.cc/500?u=maria`,
    headline: "Certified Registered Nurse",
    skills: ["Patient Care", "Medication Management", "CPR Certified", "Compassionate Care"],
    location: "Los Angeles, CA",
    experience: "8 years",
    availability: "Full-time",
    languages: ["English", "Spanish"]
  },
  {
    id: 2,
    name: "Jennifer Kim",
    avatarUrl: `https://i.pravatar.cc/500?u=jennifer`,
    headline: "Professional Housekeeper",
    skills: ["Deep Cleaning", "Organization", "Eco-Friendly Products", "Attention to Detail"],
    location: "Seattle, WA",
    experience: "5 years",
    availability: "Part-time",
    languages: ["English"]
  },
  {
    id: 3,
    name: "Sarah Johnson",
    avatarUrl: `https://i.pravatar.cc/500?u=sarah`,
    headline: "Experienced Nanny & Childcare Provider",
    skills: ["Child Development", "Educational Activities", "First Aid", "Multilingual"],
    location: "New York, NY",
    experience: "6 years",
    availability: "Live-in",
    languages: ["English", "French"]
  },
  {
    id: 4,
    name: "Elena Popovic",
    avatarUrl: `https://i.pravatar.cc/500?u=elena`,
    headline: "Senior Home Care Assistant",
    skills: ["Elder Care", "Mobility Assistance", "Meal Preparation", "Companionship"],
    location: "Miami, FL",
    experience: "10 years",
    availability: "Full-time",
    languages: ["English", "Arabic"]
  },
  {
    id: 5,
    name: "Grace Williams",
    avatarUrl: `https://i.pravatar.cc/500?u=grace`,
    headline: "Certified Home Health Aide",
    skills: ["Personal Care", "Medical Equipment", "Physical Therapy Support", "Patient Advocacy"],
    location: "Chicago, IL",
    experience: "7 years",
    availability: "Part-time",
    languages: ["English"]
  },
  {
    id: 6,
    name: "Lisa Chen",
    avatarUrl: `https://i.pravatar.cc/500?u=lisa`,
    headline: "Professional House Manager",
    skills: ["Household Management", "Staff Coordination", "Budget Management", "Event Planning"],
    location: "San Francisco, CA",
    experience: "12 years",
    availability: "Full-time",
    languages: ["English", "Tagalog"]
  },
];
