
import { Star, Award, Briefcase } from "lucide-react";

const ProfessionalBenefits = () => {
  return (
    <div className="mb-8 grid md:grid-cols-3 gap-4 text-center">
      <div className="p-4 bg-primary/5 rounded-lg">
        <Star className="h-6 w-6 text-primary mx-auto mb-2" />
        <h4 className="font-semibold text-sm">Premium Clients</h4>
        <p className="text-xs text-muted-foreground">Work with verified families</p>
      </div>
      <div className="p-4 bg-primary/5 rounded-lg">
        <Award className="h-6 w-6 text-primary mx-auto mb-2" />
        <h4 className="font-semibold text-sm">Career Growth</h4>
        <p className="text-xs text-muted-foreground">Professional development</p>
      </div>
      <div className="p-4 bg-primary/5 rounded-lg">
        <Briefcase className="h-6 w-6 text-primary mx-auto mb-2" />
        <h4 className="font-semibold text-sm">Flexible Work</h4>
        <p className="text-xs text-muted-foreground">Choose your schedule</p>
      </div>
    </div>
  );
};

export default ProfessionalBenefits;
