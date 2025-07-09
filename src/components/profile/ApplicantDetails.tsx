
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CaregiverWithCareTypes } from "@/hooks/useCaregivers";

interface ApplicantDetailsProps {
  candidate: CaregiverWithCareTypes;
}

const ApplicantDetails = ({ candidate }: ApplicantDetailsProps) => {
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Not specified';
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    });
  };

  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-bold text-emerald-800">Applicant Details</h2>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600 font-medium">Age:</span>
            <span className="block text-gray-800">{candidate.age || 'Not specified'} years</span>
          </div>
          <div>
            <span className="text-gray-600 font-medium">Nationality:</span>
            <span className="block text-gray-800">{candidate.nationality || 'Not specified'}</span>
          </div>
          <div>
            <span className="text-gray-600 font-medium">Religion:</span>
            <span className="block text-gray-800">{candidate.religion || 'Not specified'}</span>
          </div>
          <div>
            <span className="text-gray-600 font-medium">Day off:</span>
            <span className="block text-gray-800">{candidate.day_off || 'Not specified'}</span>
          </div>
          <div>
            <span className="text-gray-600 font-medium">Can Join:</span>
            <span className="block text-gray-800">{candidate.availability || 'Not specified'}</span>
          </div>
          <div>
            <span className="text-gray-600 font-medium">Marital Status:</span>
            <span className="block text-gray-800">{candidate.marital_status || 'Not specified'}</span>
          </div>
          <div className="col-span-2">
            <span className="text-gray-600 font-medium">Employment Type:</span>
            <span className="block text-gray-800">{candidate.employment_type || 'Not specified'}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApplicantDetails;
