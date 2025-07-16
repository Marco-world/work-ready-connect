
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const whatsappNumber = "+1234567890"; // Replace with your actual WhatsApp number
  const message = encodeURIComponent("Hi! I'm interested in your care services. Can you help me?");
  const whatsappUrl = `https://wa.me/+639533979972?text=Hello Carelink`;

  return (
    <Button
      asChild
      className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg hover:shadow-xl bg-green-500 hover:bg-green-600 z-50 hover-scale"
      size="icon"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </Button>
  );
};

export default WhatsAppButton;
