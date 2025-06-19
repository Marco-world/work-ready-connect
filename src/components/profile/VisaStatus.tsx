
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const VisaStatus = () => {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-bold text-emerald-800">Visa Status</h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm">
          <div>
            <span className="text-gray-600 font-medium">Visa Status:</span>
            <span className="block text-gray-800">Valid Work Permit</span>
          </div>
          <div>
            <span className="text-gray-600 font-medium">Visa Expiry:</span>
            <span className="block text-gray-800">December 2025</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VisaStatus;
