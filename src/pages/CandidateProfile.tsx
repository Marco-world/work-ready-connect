
import { useParams, Link } from "react-router-dom";
import { candidates } from "@/data/candidates";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Clock, Users, MessageCircle } from "lucide-react";

// Standardized skills list
const STANDARDIZED_SKILLS = [
  'Cleaning', 'Washing', 'Ironing', 'Baby Sitting', 'New Born Care',
  'Decorating', 'Housekeeping', 'Caregiver', 'Old Person Care', 
  'Cooking', 'Driving'
];

const CandidateProfile = () => {
  const { id } = useParams();
  const candidate = candidates.find(c => c.id === parseInt(id || '0'));

  if (!candidate) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50/50 via-background to-emerald-100/30 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-emerald-900 mb-4">Profile Not Found</h1>
          <Link to="/talent">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Browse Caregivers
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // WhatsApp contact function
  const handleWhatsAppContact = () => {
    const whatsappNumber = "+1234567890"; // Replace with your actual WhatsApp number
    const message = encodeURIComponent(`Hi! I'm interested in connecting with ${candidate.name} for care services. Can you help me get in touch?`);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50/50 via-background to-emerald-100/30">
      <div className="container py-8 max-w-4xl">
        {/* Header with back button */}
        <div className="mb-6">
          <Link to="/talent">
            <Button variant="outline" className="mb-4 border-emerald-600 text-emerald-600 hover:bg-emerald-50">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Browse Caregivers
            </Button>
          </Link>
        </div>

        {/* Profile Header Card */}
        <Card className="overflow-hidden mb-8 bg-gradient-to-br from-emerald-50 to-emerald-100/30">
          <CardHeader className="bg-emerald-600 text-white p-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <Avatar className="h-32 w-32 ring-4 ring-white/20">
                <AvatarImage src={candidate.avatarUrl} alt={candidate.name} />
                <AvatarFallback className="bg-white text-emerald-600 font-bold text-2xl">
                  {candidate.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-white mb-2">{candidate.name}</h1>
                <p className="text-emerald-100 font-medium text-lg mb-4">{candidate.headline}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-emerald-700 text-emerald-100 px-3 py-1">
                    <MapPin className="mr-1 h-3 w-3" />
                    {candidate.location}
                  </Badge>
                  {candidate.experience && (
                    <Badge className="bg-emerald-700 text-emerald-100 px-3 py-1">
                      <Clock className="mr-1 h-3 w-3" />
                      {candidate.experience} Experience
                    </Badge>
                  )}
                  {candidate.availability && (
                    <Badge className="bg-emerald-700 text-emerald-100 px-3 py-1">
                      <Users className="mr-1 h-3 w-3" />
                      {candidate.availability}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Applicant Details */}
          <Card>
            <CardHeader>
              <h2 className="text-xl font-bold text-emerald-800">Applicant Details</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600 font-medium">Age:</span>
                  <span className="block text-gray-800">28 years</span>
                </div>
                <div>
                  <span className="text-gray-600 font-medium">Nationality:</span>
                  <span className="block text-gray-800">Filipino</span>
                </div>
                <div>
                  <span className="text-gray-600 font-medium">Religion:</span>
                  <span className="block text-gray-800">Christian</span>
                </div>
                <div>
                  <span className="text-gray-600 font-medium">Day off:</span>
                  <span className="block text-gray-800">Friday</span>
                </div>
                <div>
                  <span className="text-gray-600 font-medium">Can Join:</span>
                  <span className="block text-gray-800">Immediately</span>
                </div>
                <div>
                  <span className="text-gray-600 font-medium">Marital Status:</span>
                  <span className="block text-gray-800">Single</span>
                </div>
                <div>
                  <span className="text-gray-600 font-medium">Employment Type:</span>
                  <span className="block text-gray-800">Full-time</span>
                </div>
                <div>
                  <span className="text-gray-600 font-medium">Salary:</span>
                  <span className="block text-gray-800">$2,500/month</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Standardized Skills */}
          <Card>
            <CardHeader>
              <h2 className="text-xl font-bold text-emerald-800">Skills</h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {STANDARDIZED_SKILLS.map((skill) => {
                  const hasSkill = candidate.skills.some(candidateSkill => 
                    candidateSkill.toLowerCase().includes(skill.toLowerCase()) ||
                    skill.toLowerCase().includes(candidateSkill.toLowerCase())
                  );
                  
                  return (
                    <div key={skill} className="flex justify-between items-center text-sm">
                      <span className="text-gray-700">{skill}</span>
                      <Badge 
                        variant={hasSkill ? "default" : "secondary"}
                        className={hasSkill 
                          ? "bg-emerald-100 text-emerald-700" 
                          : "bg-gray-100 text-gray-500"
                        }
                      >
                        {hasSkill ? "✓" : "−"}
                      </Badge>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card>
            <CardHeader>
              <h2 className="text-xl font-bold text-emerald-800">Education</h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-gray-600 font-medium">Education Level:</span>
                  <span className="block text-gray-800">Bachelor's Degree in Nursing</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Languages */}
          <Card>
            <CardHeader>
              <h2 className="text-xl font-bold text-emerald-800">Languages</h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">English:</span>
                  <span className="text-gray-800">Fluent</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Arabic:</span>
                  <span className="text-gray-800">Basic</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Visa Status */}
          <Card>
            <CardHeader>
              <h2 className="text-xl font-bold text-emerald-800">Visa Status</h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-gray-600 font-medium">Visa Status:</span>
                  <span className="block text-gray-800">Valid Work Permit</span>
                </div>
                <div>
                  <span className="text-gray-600 font-medium">Visa Expiry:</span>
                  <span className="block text-gray-800">December 2025</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card>
            <CardHeader>
              <h2 className="text-xl font-bold text-emerald-800">Experience</h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-2 border-emerald-200 pl-4">
                  <div className="text-sm">
                    <span className="text-gray-600 font-medium">Country:</span>
                    <span className="block text-gray-800">UAE</span>
                  </div>
                  <div className="text-sm mt-2">
                    <span className="text-gray-600 font-medium">Period:</span>
                    <span className="block text-gray-800">2020 - 2024 (4 years)</span>
                  </div>
                  <div className="text-sm mt-2">
                    <span className="text-gray-600 font-medium">Job Details:</span>
                    <span className="block text-gray-800">Senior caregiver for elderly patients with specialized medical needs. Provided 24/7 care including medication management and physical therapy support.</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Actions */}
        <div className="mt-8 p-6 bg-emerald-50 rounded-lg border border-emerald-100 text-center">
          <h3 className="text-xl font-bold text-emerald-900 mb-4">Ready to connect with {candidate.name}?</h3>
          <p className="text-emerald-700 mb-6">Get in touch via WhatsApp to discuss your family's needs and schedule an interview.</p>
          <Button 
            onClick={handleWhatsAppContact}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Contact via WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;
