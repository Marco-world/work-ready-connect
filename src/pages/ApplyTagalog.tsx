import { Card, CardContent } from "@/components/ui/card";
import ApplyHeaderTagalog from "@/components/apply/ApplyHeaderTagalog";
import ProfessionalBenefitsTagalog from "@/components/apply/ProfessionalBenefitsTagalog";
import ApplyFormTagalog from "@/components/apply/ApplyFormTagalog";

const ApplyTagalog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <div className="container py-12 flex justify-center">
        <Card className="w-full max-w-2xl animate-fade-in shadow-xl border-0 bg-white/90 backdrop-blur-sm">
          <ApplyHeaderTagalog />
          
          <CardContent className="p-8">
            <ProfessionalBenefitsTagalog />
            <ApplyFormTagalog />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ApplyTagalog;