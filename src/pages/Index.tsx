
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/home/HeroSection";
import ProfessionalsSection from "@/components/home/ProfessionalsSection";
import BottomCTASection from "@/components/home/BottomCTASection";

const Index = () => {
  return (
    <div className="flex flex-col">
      <main className="flex-grow">
        <HeroSection />
        <ProfessionalsSection />
        <BottomCTASection />
      </main>
      
      <WhatsAppButton />
    </div>
  );
};

export default Index;
