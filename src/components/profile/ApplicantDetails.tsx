
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const ApplicantDetails = () => {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-bold text-emerald-800">Applicant Details</h2>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600 font-medium">Age:</span>
            <span className="block text-gray-800">28 years</span>
          </div>
          <div>
            <span className="text-gray-600 font-medium">Nationality:</span>
            <span className="block text-gray-800">Filipino</span>
          </div>
          <div>
            <span className="text-gray-600 font-medium">Religion:</span>
            <span className="block text-gray-800">Christian</span>
          </div>
          <div>
            <span className="text-gray-600 font-medium">Day off:</span>
            <span className="block text-gray-800">Friday</span>
          </div>
          <div>
            <span className="text-gray-600 font-medium">Can Join:</span>
            <span className="block text-gray-800">Immediately</span>
          </div>
          <div>
            <span className="text-gray-600 font-medium">Marital Status:</span>
            <span className="block text-gray-800">Single</span>
          </div>
          <div className="col-span-2">
            <span className="text-gray-600 font-medium">Employment Type:</span>
            <span className="block text-gray-800">Full-time</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApplicantDetails;
