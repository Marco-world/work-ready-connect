
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Briefcase, Star } from "lucide-react";
import { candidates } from "@/data/candidates";
import CandidateCard from "@/components/CandidateCard";

const Index = () => {
  return (
    <div className="flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 md:py-32 text-center">
          <div className="container">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Connect with Exceptional Talent
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              The premier platform for discovering and hiring top-tier professionals from around the globe. Your next great hire is just a click away.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/talent">Find Talent <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/apply">Apply Now</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-secondary py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Why Choose TalentLink?</h2>
              <p className="mt-2 text-muted-foreground">Streamline your hiring process with our powerful features.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground mx-auto mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Vetted Professionals</h3>
                <p className="mt-2 text-muted-foreground">Access a curated pool of candidates who have been pre-screened for quality and expertise.</p>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground mx-auto mb-4">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Seamless Hiring</h3>
                <p className="mt-2 text-muted-foreground">From discovery to hire, our platform makes the entire recruitment process intuitive and efficient.</p>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground mx-auto mb-4">
                  <Star className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Top-Tier Companies</h3>
                <p className="mt-2 text-muted-foreground">Join the ranks of leading companies who trust us to find the best talent for their teams.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Candidates Section */}
        <section className="py-20">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold">Featured Talent</h2>
                    <p className="mt-2 text-muted-foreground">A glimpse of the incredible professionals on our platform.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {candidates.slice(0,3).map(candidate => (
                        <CandidateCard key={candidate.id} candidate={candidate} />
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Button asChild>
                        <Link to="/talent">View All Talent <ArrowRight className="ml-2 h-5 w-5" /></Link>
                    </Button>
                </div>
            </div>
        </section>

      </main>
    </div>
  );
};

export default Index;
