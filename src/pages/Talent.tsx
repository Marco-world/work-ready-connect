
import CandidateCard from "@/components/CandidateCard";
import { candidates } from "@/data/candidates";

const Talent = () => {
  return (
    <div className="container py-12">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl font-extrabold tracking-tight">Our Caring Professionals</h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
          Browse our community of verified caregivers, each bringing compassion, expertise, and dedication to their work. From nursing and childcare to housekeeping and elder care - find the perfect match for your family's needs.
        </p>
      </div>
      
      {/* Filter Section */}
      <div className="mb-8 p-4 bg-secondary/30 rounded-lg">
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
            👩‍⚕️ Nursing
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
            👶 Childcare
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
            🏠 Housekeeping
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
            👴 Elder Care
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {candidates.map((candidate, index) => (
          <div key={candidate.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <CandidateCard candidate={candidate} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Talent;
