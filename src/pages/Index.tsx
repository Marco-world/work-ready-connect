
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Users, Briefcase, Star } from "lucide-react";
import { candidates } from "@/data/candidates";
import CandidateCard from "@/components/CandidateCard";
import ClientContactForm from "@/components/ClientContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="flex flex-col">
      <main className="flex-grow">
        {/* Hero Section with Background Image */}
        <section className="relative py-20 md:py-32 text-center bg-gradient-to-b from-primary/5 to-background overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 z-0 opacity-10"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          {/* Content */}
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                  Connect with Caring Professionals
                </h1>
                <p className="mt-4 max-w-2xl mx-auto lg:mx-0 text-lg text-muted-foreground leading-relaxed">
                  Find trusted, compassionate caregivers for your family's most important needs. From nursing and childcare to housekeeping and elder care - we connect you with verified professionals who truly care.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                  <Button size="lg" asChild className="hover-scale">
                    <Link to="/talent">Find Caregivers <Heart className="ml-2 h-5 w-5" /></Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="hover-scale">
                    <Link to="/apply">Join Our Team</Link>
                  </Button>
                </div>
              </div>
              
              {/* Client Contact Form */}
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <ClientContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-secondary/50 py-20">
          <div className="container">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold">Why Choose CareLink?</h2>
              <p className="mt-2 text-muted-foreground">Connecting families with trusted care professionals.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 hover-scale">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground mx-auto mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Verified & Trusted</h3>
                <p className="mt-2 text-muted-foreground">All our caregivers undergo thorough background checks and reference verification for your peace of mind.</p>
              </div>
              <div className="p-6 hover-scale">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground mx-auto mb-4">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Compassionate Care</h3>
                <p className="mt-2 text-muted-foreground">Our professionals are selected not just for their skills, but for their genuine caring nature and empathy.</p>
              </div>
              <div className="p-6 hover-scale">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground mx-auto mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Perfect Matches</h3>
                <p className="mt-2 text-muted-foreground">We carefully match caregivers with families based on specific needs, preferences, and compatibility.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Candidates Section */}
        <section className="py-20">
            <div className="container">
                <div className="text-center mb-12 animate-fade-in">
                    <h2 className="text-3xl font-bold">Meet Our Caring Professionals</h2>
                    <p className="mt-2 text-muted-foreground">Dedicated caregivers ready to support your family with love and expertise.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {candidates.slice(0,3).map(candidate => (
                        <div key={candidate.id} className="animate-fade-in">
                            <CandidateCard candidate={candidate} />
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Button asChild className="hover-scale">
                        <Link to="/talent">View All Caregivers <ArrowRight className="ml-2 h-5 w-5" /></Link>
                    </Button>
                </div>
            </div>
        </section>

        {/* Care Categories Section */}
        <section className="bg-gradient-to-r from-primary/5 to-secondary/30 py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Care Services We Provide</h2>
              <p className="mt-2 text-muted-foreground">Professional care services tailored to your family's needs.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-background rounded-lg shadow-sm hover-scale">
                <div className="text-4xl mb-3">👩‍⚕️</div>
                <h3 className="font-semibold">Nursing Care</h3>
                <p className="text-sm text-muted-foreground mt-1">Professional medical care at home</p>
              </div>
              <div className="text-center p-6 bg-background rounded-lg shadow-sm hover-scale">
                <div className="text-4xl mb-3">👶</div>
                <h3 className="font-semibold">Childcare</h3>
                <p className="text-sm text-muted-foreground mt-1">Loving care for your little ones</p>
              </div>
              <div className="text-center p-6 bg-background rounded-lg shadow-sm hover-scale">
                <div className="text-4xl mb-3">🏠</div>
                <h3 className="font-semibold">Housekeeping</h3>
                <p className="text-sm text-muted-foreground mt-1">Professional home cleaning services</p>
              </div>
              <div className="text-center p-6 bg-background rounded-lg shadow-sm hover-scale">
                <div className="text-4xl mb-3">👴</div>
                <h3 className="font-semibold">Elder Care</h3>
                <p className="text-sm text-muted-foreground mt-1">Compassionate senior assistance</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      
      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;
