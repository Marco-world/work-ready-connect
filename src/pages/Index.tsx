
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ProfessionalsSection from "@/components/home/ProfessionalsSection";
import CareServicesSection from "@/components/home/CareServicesSection";
import ContactFormSection from "@/components/home/ContactFormSection";
import BottomCTASection from "@/components/home/BottomCTASection";

const Index = () => {
  return (
    <div className="flex flex-col">
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <ProfessionalsSection />
        <CareServicesSection />
        <ContactFormSection />
        <BottomCTASection />
      </main>
      
      <WhatsAppButton />
    </div>
  );
};

export default Index;
