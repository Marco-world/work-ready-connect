
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CaregiverWithCareTypes } from "@/hooks/useCaregivers";

interface EducationProps {
  candidate: CaregiverWithCareTypes;
}

const Education = ({ candidate }: EducationProps) => {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-bold text-emerald-800">Education</h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm">
          <div>
            <span className="text-gray-600 font-medium">Education Level:</span>
            <span className="block text-gray-800">{candidate.education_level || 'Not specified'}</span>
          </div>
          {candidate.education_details && (
            <div>
              <span className="text-gray-600 font-medium">Details:</span>
              <span className="block text-gray-800">{candidate.education_details}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Education;
