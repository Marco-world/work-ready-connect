
import { Candidate } from "@/data/candidates";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface ContactActionsProps {
  candidate: Candidate;
}

const ContactActions = ({ candidate }: ContactActionsProps) => {
  const handleWhatsAppContact = () => {
    const whatsappNumber = "+1234567890"; // Replace with your actual WhatsApp number
    const message = encodeURIComponent(`Hi! I'm interested in connecting with ${candidate.name} for care services. Can you help me get in touch?`);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="mt-8 p-6 bg-emerald-50 rounded-lg border border-emerald-100 text-center">
      <h3 className="text-xl font-bold text-emerald-900 mb-4">Ready to connect with {candidate.name}?</h3>
      <p className="text-emerald-700 mb-6">Get in touch via WhatsApp to discuss your family's needs and schedule an interview.</p>
      <Button 
        onClick={handleWhatsAppContact}
        className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg"
      >
        <MessageCircle className="mr-2 h-5 w-5" />
        Contact via WhatsApp
      </Button>
    </div>
  );
};

export default ContactActions;
