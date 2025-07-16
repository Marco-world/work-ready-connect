import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, Heart, Shield } from "lucide-react";

const ApplyHeaderTagalog = () => {
  return (
    <CardHeader className="text-center pb-6 bg-gradient-to-r from-primary/10 to-emerald-50">
      <div className="flex justify-center mb-4">
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-r from-primary to-emerald-600 rounded-full flex items-center justify-center">
            <Users className="h-8 w-8 text-white" />
          </div>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
            <Heart className="h-3 w-3 text-white" />
          </div>
        </div>
      </div>
      
      <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent mb-2">
        Aplikasyon para sa Household Worker
      </CardTitle>
      
      <CardDescription className="text-muted-foreground leading-relaxed max-w-md mx-auto">
        Sumali sa aming community ng mga propesyonal na household workers at magtrabaho kasama ang mga pamilyang naghahanap ng maaasahang serbisyo sa tahanan.
      </CardDescription>
      
      <div className="flex items-center justify-center gap-2 mt-4 text-sm text-primary font-medium">
        <Shield className="h-4 w-4" />
        Secure at Confidential na Proseso
      </div>
    </CardHeader>
  );
};

export default ApplyHeaderTagalog;