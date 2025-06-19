
import { Card, CardContent } from "@/components/ui/card";
import ApplyHeader from "@/components/apply/ApplyHeader";
import ProfessionalBenefits from "@/components/apply/ProfessionalBenefits";
import ApplyForm from "@/components/apply/ApplyForm";

const Apply = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <div className="container py-12 flex justify-center">
        <Card className="w-full max-w-2xl animate-fade-in shadow-xl border-0 bg-white/90 backdrop-blur-sm">
          <ApplyHeader />
          
          <CardContent className="p-8">
            <ProfessionalBenefits />
            <ApplyForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Apply;
