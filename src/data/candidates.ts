
export interface Candidate {
  id: number;
  name: string;
  avatarUrl: string;
  headline: string;
  skills: string[];
  location: string;
}

export const candidates: Candidate[] = [
  {
    id: 1,
    name: "Alice Johnson",
    avatarUrl: `https://i.pravatar.cc/150?u=alice`,
    headline: "Senior Frontend Developer",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    location: "San Francisco, CA",
  },
  {
    id: 2,
    name: "Bob Williams",
    avatarUrl: `https://i.pravatar.cc/150?u=bob`,
    headline: "Full-Stack Engineer",
    skills: ["Node.js", "Python", "AWS", "PostgreSQL"],
    location: "New York, NY",
  },
  {
    id: 3,
    name: "Charlie Brown",
    avatarUrl: `https://i.pravatar.cc/150?u=charlie`,
    headline: "UI/UX Designer",
    skills: ["Figma", "Sketch", "User Research", "Prototyping"],
    location: "London, UK",
  },
  {
    id: 4,
    name: "Diana Miller",
    avatarUrl: `https://i.pravatar.cc/150?u=diana`,
    headline: "Product Manager",
    skills: ["Agile", "Roadmapping", "JIRA", "Data Analysis"],
    location: "Berlin, Germany",
  },
  {
    id: 5,
    name: "Ethan Davis",
    avatarUrl: `https://i.pravatar.cc/150?u=ethan`,
    headline: "DevOps Specialist",
    skills: ["Docker", "Kubernetes", "CI/CD", "Terraform"],
    location: "Austin, TX",
  },
  {
    id: 6,
    name: "Fiona Garcia",
    avatarUrl: `https://i.pravatar.cc/150?u=fiona`,
    headline: "Data Scientist",
    skills: ["Python", "TensorFlow", "scikit-learn", "SQL"],
    location: "Toronto, Canada",
  },
];
