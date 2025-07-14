
import { Shield, Heart, Users } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="bg-slate-50 py-12">
      <div className="container">
        {/* --- Statistics & Narrative --- */}
        <div className="mb-12">
          <div className="text-center mb-6 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900 mb-2">
              Trusted by Families Worldwide
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A global network of care — connecting households with reliable, compassionate household workers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2 transition-all duration-700">
                15+
              </div>
              <p className="text-base md:text-lg text-muted-foreground font-medium">
                Countries Served
              </p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2 transition-all duration-700">
                25+
              </div>
              <p className="text-base md:text-lg text-muted-foreground font-medium">
                Languages Supported
              </p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2 transition-all duration-700">
                1000+
              </div>
              <p className="text-base md:text-lg text-muted-foreground font-medium">
                Trusted Household Workers
              </p>
            </div>
          </div>
        </div>

        {/* --- Features --- */}
        <div className="text-center mb-8 animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold text-emerald-900">
            Why Families Choose CareLink
          </h3>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            Discover the CareLink difference: safety, compassion, and the perfect match for your home.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-4 hover-scale">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground mx-auto mb-4">
              <Shield className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-semibold text-emerald-900">Verified & Trusted</h4>
            <p className="mt-2 text-muted-foreground text-sm">
              Every household worker is background-checked and reference-verified for your peace of mind.
            </p>
          </div>
          <div className="p-4 hover-scale">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground mx-auto mb-4">
              <Heart className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-semibold text-emerald-900">Compassionate Care</h4>
            <p className="mt-2 text-muted-foreground text-sm">
              We select household workers for their skills and their genuine empathy and kindness.
            </p>
          </div>
          <div className="p-4 hover-scale">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground mx-auto mb-4">
              <Users className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-semibold text-emerald-900">Perfect Matches</h4>
            <p className="mt-2 text-muted-foreground text-sm">
              We match you with household workers based on your unique needs and preferences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
