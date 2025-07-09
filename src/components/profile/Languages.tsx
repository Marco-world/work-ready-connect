
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CaregiverWithCareTypes } from "@/hooks/useCaregivers";

interface LanguagesProps {
  candidate: CaregiverWithCareTypes;
}

const Languages = ({ candidate }: LanguagesProps) => {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-bold text-emerald-800">Languages</h2>
      </CardHeader>
      <CardContent>
        {candidate.languages && candidate.languages.length > 0 ? (
          <div className="space-y-2 text-sm">
            {candidate.languages.map((lang) => (
              <div key={lang.id} className="flex justify-between">
                <span className="text-gray-600">{lang.language}:</span>
                <span className="text-gray-800">{lang.proficiency_level}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-gray-500">No language information available</div>
        )}
      </CardContent>
    </Card>
  );
};

export default Languages;
