
import { Heart } from "lucide-react";
import CandidateCard from "@/components/CandidateCard";
import { Candidate } from "@/data/candidates";

interface TalentResultsProps {
  filteredCandidates: Candidate[];
  onResetFilters: () => void;
}

const TalentResults = ({ filteredCandidates, onResetFilters }: TalentResultsProps) => {
  if (filteredCandidates.length === 0) {
    return (
      <>
        <div className="text-center py-12">
          <p className="text-emerald-700 text-lg">No caregivers match your current filters.</p>
          <button
            onClick={onResetFilters}
            className="mt-4 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Reset Filters
          </button>
        </div>
        
        {/* Family-focused CTA */}
        <div className="mt-16 text-center p-8 bg-emerald-50 rounded-lg border border-emerald-100">
          <h3 className="text-2xl font-bold text-emerald-900 mb-4">Need help choosing the right caregiver?</h3>
          <p className="text-emerald-700 mb-6 max-w-2xl mx-auto">
            Our family care specialists are here to help you find the perfect match for your unique needs. 
            Every family is different, and we're committed to finding exactly what yours requires.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
              <Heart className="inline mr-2 h-5 w-5" />
              Get Personalized Help
            </button>
            <button className="px-6 py-3 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors">
              Schedule a Call
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCandidates.map((candidate, index) => (
          <div key={candidate.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <CandidateCard candidate={candidate} />
          </div>
        ))}
      </div>
      
      {/* Family-focused CTA */}
      <div className="mt-16 text-center p-8 bg-emerald-50 rounded-lg border border-emerald-100">
        <h3 className="text-2xl font-bold text-emerald-900 mb-4">Need help choosing the right caregiver?</h3>
        <p className="text-emerald-700 mb-6 max-w-2xl mx-auto">
          Our family care specialists are here to help you find the perfect match for your unique needs. 
          Every family is different, and we're committed to finding exactly what yours requires.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
            <Heart className="inline mr-2 h-5 w-5" />
            Get Personalized Help
          </button>
          <button className="px-6 py-3 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors">
            Schedule a Call
          </button>
        </div>
      </div>
    </>
  );
};

export default TalentResults;
