
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Experience = () => {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-bold text-emerald-800">Experience</h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="border-l-2 border-emerald-200 pl-4">
            <div className="text-sm">
              <span className="text-gray-600 font-medium">Country:</span>
              <span className="block text-gray-800">UAE</span>
            </div>
            <div className="text-sm mt-2">
              <span className="text-gray-600 font-medium">Period:</span>
              <span className="block text-gray-800">2020 - 2024 (4 years)</span>
            </div>
            <div className="text-sm mt-2">
              <span className="text-gray-600 font-medium">Job Details:</span>
              <span className="block text-gray-800">Senior Household worker for elderly patients with specialized medical needs. Provided 24/7 care including medication management and physical therapy support.</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Experience;
