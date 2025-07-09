
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CaregiverWithCareTypes } from "@/hooks/useCaregivers";

interface VisaStatusProps {
  candidate: CaregiverWithCareTypes;
}

const VisaStatus = ({ candidate }: VisaStatusProps) => {
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
        <h2 className="text-xl font-bold text-emerald-800">Visa Status</h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm">
          <div>
            <span className="text-gray-600 font-medium">Visa Status:</span>
            <span className="block text-gray-800">{candidate.visa_status || 'Not specified'}</span>
          </div>
          <div>
            <span className="text-gray-600 font-medium">Visa Expiry:</span>
            <span className="block text-gray-800">{formatDate(candidate.visa_expiry)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VisaStatus;
