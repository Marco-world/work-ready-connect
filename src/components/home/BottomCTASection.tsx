
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail } from "lucide-react";

const BottomCTASection = () => {
  const whatsappNumber = "+1234567890"; // Replace with your actual WhatsApp number
  const message = encodeURIComponent("Hi! I'm interested in your care services. Can you help me?");
  const whatsappUrl = `https://wa.me/+639533979972?text=Hello Carelink`;

  return (
    <section className="bg-gradient-to-r from-primary to-emerald-600 py-16">
      <div className="container text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Have questions or need personalized assistance? Our team is here to help you find the perfect 
            care solution for your family or guide you through your professional journey.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <Button 
              size="lg" 
              variant="secondary" 
              asChild 
              className="hover-scale bg-white hover:bg-white/90 text-primary border-0 flex-1"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="hover-scale border-white/30 text-white hover:bg-white/10 bg-white/5 flex-1"
            >
              <a
                href="tel:+1234567890"
                className="flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Call Us
              </a>
            </Button>
          </div>
          
          <div className="mt-6">
            <p className="text-white/70 text-sm">
              Available 24/7 to assist you with your care needs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomCTASection;
