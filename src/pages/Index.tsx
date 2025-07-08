
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/home/HeroSection";
import GlobalImpactSection from "@/components/home/GlobalImpactSection";
import ProfessionalsSection from "@/components/home/ProfessionalsSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import CareServicesSection from "@/components/home/CareServicesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import BottomCTASection from "@/components/home/BottomCTASection";

const Index = () => {
  return (
    <div className="flex flex-col">
      <main className="flex-grow">
        <HeroSection />
        <GlobalImpactSection />
        <FeaturesSection />
        <ProfessionalsSection />
        <CareServicesSection />
        <HowItWorksSection />
        <BottomCTASection />
      </main>
      
      <WhatsAppButton />
    </div>
  );
};

export default Index;
