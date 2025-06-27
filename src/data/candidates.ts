
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
    avatarUrl: `https://i.pravatar.cc/450?img=31`,
    headline: "Certified Registered Nurse",
    skills: ["Patient Care", "Medication Management", "CPR Certified", "Compassionate Care"],
    location: "Dubai, UAE",
    experience: "8 years",
    availability: "Full-time",
    languages: ["English", "Spanish"]
  },
  {
    id: 2,
    name: "Jennifer Kim",
    avatarUrl: `https://i.pravatar.cc/450?img=44`,
    headline: "Professional Housekeeper",
    skills: ["Deep Cleaning", "Organization", "Eco-Friendly Products", "Attention to Detail"],
    location: "AbuDhabi, UAE",
    experience: "5 years",
    availability: "Part-time",
    languages: ["English"]
  },
  {
    id: 3,
    name: "Sarah Johnson",
    avatarUrl: `https://i.pravatar.cc/450?img=32`,
    headline: "Experienced Nanny & Childcare Provider",
    skills: ["Child Development", "Educational Activities", "First Aid", "Multilingual"],
    location: "Doha, Qatar",
    experience: "6 years",
    availability: "Live-in",
    languages: ["English", "French"]
  },
  {
    id: 4,
    name: "Elena Popovic",
    avatarUrl: `https://i.pravatar.cc/450?u=elena`,
    headline: "Senior Home Care Assistant",
    skills: ["Elder Care", "Mobility Assistance", "Meal Preparation", "Companionship"],
    location: "Beirut, Lebanon",
    experience: "10 years",
    availability: "Full-time",
    languages: ["English", "Arabic"]
  },
  {
    id: 5,
    name: "Grace Williams",
    avatarUrl: `https://i.pravatar.cc/450?u=grace`,
    headline: "Certified Home Health Aide",
    skills: ["Personal Care", "Medical Equipment", "Physical Therapy Support", "Patient Advocacy"],
    location: "Dubai, UAE",
    experience: "7 years",
    availability: "Part-time",
    languages: ["English"]
  },
  {
    id: 6,
    name: "Lisa Chen",
    avatarUrl: `https://i.pravatar.cc/450?img=34`,
    headline: "Professional House Manager",
    skills: ["Household Management", "Staff Coordination", "Budget Management", "Event Planning"],
    location: "AbuDhabi, UAE",
    experience: "12 years",
    availability: "Full-time",
    languages: ["English", "Tagalog"]
  },
];
