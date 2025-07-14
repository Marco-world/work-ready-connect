
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProfessionalsCarousel from "@/components/ProfessionalsCarousel";

const ProfessionalsSection = () => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-3xl font-bold">Meet Our Caring Household Workers</h2>
          <p className="mt-2 text-muted-foreground">Dedicated household workers ready to support your family with love and expertise.</p>
        </div>
        <ProfessionalsCarousel />
        <div className="text-center mt-8">
          <Button asChild className="hover-scale">
            <Link to="/talent">View All Household Workers <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalsSection;
