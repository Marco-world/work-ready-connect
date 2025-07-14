
import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const ApplyHeader = () => {
  return (
    <CardHeader className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-t-lg">
      <CardTitle className="text-3xl flex items-center justify-center gap-3 text-primary">
        <Briefcase className="h-8 w-8" />
        Household Worker Application
      </CardTitle>
      <CardDescription className="text-lg text-muted-foreground mt-4">
        Join our elite network of household workers and make a meaningful impact in families' lives. 
        Build your career with CareLink's trusted community.
      </CardDescription>
    </CardHeader>
  );
};

export default ApplyHeader;
