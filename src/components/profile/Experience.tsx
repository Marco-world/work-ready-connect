
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CaregiverWithCareTypes } from "@/hooks/useCaregivers";

interface ExperienceProps {
  candidate: CaregiverWithCareTypes;
}

const Experience = ({ candidate }: ExperienceProps) => {
  const formatDateRange = (startDate: string | null, endDate: string | null) => {
    const start = startDate ? new Date(startDate).getFullYear() : 'Unknown';
    const end = endDate ? new Date(endDate).getFullYear() : 'Present';
    
    if (start === 'Unknown' && end === 'Present') return 'Duration not specified';
    
    const years = startDate && endDate 
      ? new Date(endDate).getFullYear() - new Date(startDate).getFullYear()
      : 'Unknown duration';
    
    return `${start} - ${end}${typeof years === 'number' ? ` (${years} years)` : ''}`;
  };

  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-bold text-emerald-800">Experience</h2>
      </CardHeader>
      <CardContent>
        {candidate.experiences && candidate.experiences.length > 0 ? (
          <div className="space-y-4">
            {candidate.experiences.map((exp) => (
              <div key={exp.id} className="border-l-2 border-emerald-200 pl-4">
                <div className="text-sm">
                  <span className="text-gray-600 font-medium">Country:</span>
                  <span className="block text-gray-800">{exp.country}</span>
                </div>
                <div className="text-sm mt-2">
                  <span className="text-gray-600 font-medium">Period:</span>
                  <span className="block text-gray-800">{formatDateRange(exp.start_date, exp.end_date)}</span>
                </div>
                {exp.job_details && (
                  <div className="text-sm mt-2">
                    <span className="text-gray-600 font-medium">Job Details:</span>
                    <span className="block text-gray-800">{exp.job_details}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-gray-500">No experience information available</div>
        )}
      </CardContent>
    </Card>
  );
};

export default Experience;
