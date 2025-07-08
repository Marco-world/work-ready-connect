import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCandidates, Candidate } from "@/data/candidates";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ApplicantDetails from "@/components/profile/ApplicantDetails";
import SkillsDisplay from "@/components/profile/SkillsDisplay";
import Education from "@/components/profile/Education";
import Languages from "@/components/profile/Languages";
import VisaStatus from "@/components/profile/VisaStatus";
import Experience from "@/components/profile/Experience";
import ContactActions from "@/components/profile/ContactActions";

const CandidateProfile = () => {
  const { id } = useParams();
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCandidates().then(data => {
      setCandidates(data);
      setLoading(false);
    });
  }, []);

  const candidate = candidates.find(c => c.id === parseInt(id || '0'));

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50/50 via-background to-emerald-100/30">
        <div className="text-center text-emerald-700 text-lg font-semibold">Loading profile...</div>
      </div>
    );
  }

  if (!candidate) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50/50 via-background to-emerald-100/30 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-emerald-900 mb-4">Profile Not Found</h1>
          <Link to="/talent">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Browse Household workers
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50/50 via-background to-emerald-100/30">
      <div className="container py-8 max-w-4xl">
        <div className="mb-6">
          <Link to="/talent">
            <Button variant="outline" className="mb-4 border-emerald-600 text-emerald-600 hover:bg-emerald-50">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Browse Household workers
            </Button>
          </Link>
        </div>

        <ProfileHeader candidate={candidate} />

        <div className="grid md:grid-cols-2 gap-8">
          <ApplicantDetails />
          <SkillsDisplay candidate={candidate} />
          <Education />
          <Languages />
          <VisaStatus />
          <Experience />
        </div>

        <ContactActions candidate={candidate} />
      </div>
    </div>
  );
};

export default CandidateProfile;
