
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Languages = () => {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-bold text-emerald-800">Languages</h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">English:</span>
            <span className="text-gray-800">Fluent</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Arabic:</span>
            <span className="text-gray-800">Basic</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Languages;
