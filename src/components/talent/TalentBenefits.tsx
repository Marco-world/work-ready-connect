
import { Heart, Shield, Clock, Users } from "lucide-react";

const TalentBenefits = () => {
  return (
    <div className="mb-8 grid md:grid-cols-4 gap-4 text-center">
      <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
        <Shield className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
        <h4 className="font-semibold text-sm text-emerald-900">Verified & Trusted</h4>
        <p className="text-xs text-emerald-700">Background checked</p>
      </div>
      <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
        <Heart className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
        <h4 className="font-semibold text-sm text-emerald-900">Compassionate Care</h4>
        <p className="text-xs text-emerald-700">Genuine caring nature</p>
      </div>
      <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
        <Clock className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
        <h4 className="font-semibold text-sm text-emerald-900">Flexible Scheduling</h4>
        <p className="text-xs text-emerald-700">Works with your needs</p>
      </div>
      <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
        <Users className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
        <h4 className="font-semibold text-sm text-emerald-900">Family Matched</h4>
        <p className="text-xs text-emerald-700">Perfect compatibility</p>
      </div>
    </div>
  );
};

export default TalentBenefits;
