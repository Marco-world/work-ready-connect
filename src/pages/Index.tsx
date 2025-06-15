
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Users, Briefcase, Star, Phone } from "lucide-react";
import ProfessionalsCarousel from "@/components/ProfessionalsCarousel";
import ClientContactForm from "@/components/ClientContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="flex flex-col">
      <main className="flex-grow">
        {/* Hero Section with Background Image */}
        <section className="relative py-20 md:py-32 text-center overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50 z-5"></div>
          
          {/* Content */}
          <div className="container relative z-10">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg mb-6">
                Connect with Caring Professionals
              </h1>
              <p className="mt-4 max-w-3xl mx-auto text-xl text-white/95 leading-relaxed drop-shadow mb-8">
                Find trusted, compassionate caregivers for your family's most important needs. From nursing and childcare to housekeeping and elder care - we connect you with verified professionals who truly care.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" asChild className="hover-scale text-lg px-8 py-4">
                  <Link to="/talent">Find Caregivers <Heart className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="hover-scale bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4">
                  <Link to="/apply">Join Our Team</Link>
                </Button>
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
        
        {/* Featured Professionals Carousel Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold">Meet Our Caring Professionals</h2>
              <p className="mt-2 text-muted-foreground">Dedicated caregivers ready to support your family with love and expertise.</p>
            </div>
            <ProfessionalsCarousel />
            <div className="text-center mt-12">
              <Button asChild className="hover-scale">
                <Link to="/talent">View All Caregivers <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Care Categories Section with Enhanced Images */}
        <section className="bg-gradient-to-r from-primary/5 to-secondary/30 py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Care Services We Provide</h2>
              <p className="mt-2 text-muted-foreground">Professional care services tailored to your family's needs.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-background rounded-lg shadow-lg hover-scale relative overflow-hidden group">
                <div 
                  className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="relative z-10">
                  <div className="text-5xl mb-4">👩‍⚕️</div>
                  <h3 className="font-semibold text-lg">Nursing Care</h3>
                  <p className="text-sm text-muted-foreground mt-2">Professional medical care at home</p>
                </div>
              </div>
              <div className="text-center p-6 bg-background rounded-lg shadow-lg hover-scale relative overflow-hidden group">
                <div 
                  className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="relative z-10">
                  <div className="text-5xl mb-4">👶</div>
                  <h3 className="font-semibold text-lg">Childcare</h3>
                  <p className="text-sm text-muted-foreground mt-2">Loving care for your little ones</p>
                </div>
              </div>
              <div className="text-center p-6 bg-background rounded-lg shadow-lg hover-scale relative overflow-hidden group">
                <div 
                  className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="relative z-10">
                  <div className="text-5xl mb-4">🏠</div>
                  <h3 className="font-semibold text-lg">Housekeeping</h3>
                  <p className="text-sm text-muted-foreground mt-2">Professional home cleaning services</p>
                </div>
              </div>
              <div className="text-center p-6 bg-background rounded-lg shadow-lg hover-scale relative overflow-hidden group">
                <div 
                  className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="relative z-10">
                  <div className="text-5xl mb-4">👴</div>
                  <h3 className="font-semibold text-lg">Elder Care</h3>
                  <p className="text-sm text-muted-foreground mt-2">Compassionate senior assistance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Contact Form Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Find Your Perfect Caregiver?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Join thousands of families who trust CareLink for their most important care needs. 
                Get matched with verified, compassionate professionals today.
              </p>
            </div>
            <ClientContactForm />
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="bg-primary py-20">
          <div className="container text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Join Our Community of Care
              </h2>
              <p className="text-primary-foreground/90 text-lg mb-8">
                Whether you're looking for care or wanting to provide it, CareLink connects hearts and homes. 
                Start your journey with us today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" variant="secondary" asChild className="hover-scale">
                  <Link to="/talent">Browse Caregivers <Heart className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="hover-scale border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to="/apply">Become a Caregiver</Link>
                </Button>
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
