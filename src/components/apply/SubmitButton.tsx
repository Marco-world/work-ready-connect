
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";

interface SubmitButtonProps {
  isSubmitting: boolean;
}

const SubmitButton = ({ isSubmitting }: SubmitButtonProps) => {
  return (
    <>
      <Button 
        type="submit" 
        className="w-full hover-scale bg-primary hover:bg-primary/90 text-white" 
        size="lg"
        disabled={isSubmitting}
      >
        <Briefcase className="mr-2 h-5 w-5" />
        {isSubmitting ? "Submitting..." : "Submit Professional Application"}
      </Button>
      
      <p className="text-xs text-center text-muted-foreground">
        By submitting this application, you agree to our professional standards and background verification process.
      </p>
    </>
  );
};

export default SubmitButton;
