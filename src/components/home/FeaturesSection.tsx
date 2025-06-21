
import { Shield, Heart, Users } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="bg-slate-50 py-12">
      <div className="container">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-3xl font-bold">Why Choose CareLink?</h2>
          <p className="mt-2 text-muted-foreground">Connecting families with trusted care professionals.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-4 hover-scale">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground mx-auto mb-4">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">Verified & Trusted</h3>
            <p className="mt-2 text-muted-foreground">All our caregivers undergo thorough background checks and reference verification for your peace of mind.</p>
          </div>
          <div className="p-4 hover-scale">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground mx-auto mb-4">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">Compassionate Care</h3>
            <p className="mt-2 text-muted-foreground">Our professionals are selected not just for their skills, but for their genuine caring nature and empathy.</p>
          </div>
          <div className="p-4 hover-scale">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground mx-auto mb-4">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">Perfect Matches</h3>
            <p className="mt-2 text-muted-foreground">We carefully match caregivers with families based on specific needs, preferences, and compatibility.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
