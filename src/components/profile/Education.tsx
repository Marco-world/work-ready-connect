
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Education = () => {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-bold text-emerald-800">Education</h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm">
          <div>
            <span className="text-gray-600 font-medium">Education Level:</span>
            <span className="block text-gray-800">Bachelor's Degree in Nursing</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Education;
