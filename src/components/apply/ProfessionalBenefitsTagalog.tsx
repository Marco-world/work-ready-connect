import { Check, Star, Globe, Clock } from "lucide-react";

const ProfessionalBenefitsTagalog = () => {
  const benefits = [
    {
      icon: Star,
      title: "Mataas na Sahod",
      description: "Makakuha ng competitive na bayad para sa inyong mga skills"
    },
    {
      icon: Globe,
      title: "Flexible na Schedule",
      description: "Magkaroon ng work-life balance na nababagay sa inyong pangangailangan"
    },
    {
      icon: Clock,
      title: "Professional na Growth",
      description: "Pag-unlad sa career at continuous na pag-aaral"
    }
  ];

  return (
    <div className="mb-8 p-6 bg-gradient-to-r from-emerald-50 to-primary/5 rounded-lg border border-primary/10">
      <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
        <Check className="h-5 w-5 text-emerald-600" />
        Mga Benepisyo sa CareLink
      </h3>
      
      <div className="grid gap-4">
        {benefits.map((benefit, index) => {
          const IconComponent = benefit.icon;
          return (
            <div key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-primary to-emerald-600 rounded-full flex items-center justify-center mt-0.5">
                <IconComponent className="h-4 w-4 text-white" />
              </div>
              <div>
                <h4 className="font-medium text-primary">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfessionalBenefitsTagalog;