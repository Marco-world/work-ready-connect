import { Button } from "@/components/ui/button";
import { Loader2, Send } from "lucide-react";

interface SubmitButtonTagalogProps {
  isSubmitting: boolean;
}

const SubmitButtonTagalog = ({ isSubmitting }: SubmitButtonTagalogProps) => {
  return (
    <Button 
      type="submit" 
      disabled={isSubmitting}
      className="w-full bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-600/90 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
    >
      {isSubmitting ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Nagsusumite ng Aplikasyon...
        </>
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" />
          Isumite ang Aplikasyon
        </>
      )}
    </Button>
  );
};

export default SubmitButtonTagalog;