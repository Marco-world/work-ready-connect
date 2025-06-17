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
                Connecting Hearts, Homes & Healthcare
              </h1>
              <p className="mt-4 max-w-3xl mx-auto text-xl text-white/95 leading-relaxed drop-shadow mb-12">
                Whether you need compassionate care for your family or want to build a rewarding career in caregiving, 
                CareLink brings together trusted professionals and loving families.
              </p>
              
              {/* Two distinct user paths */}
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* For Families */}
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 text-left">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="h-8 w-8 text-emerald-600" />
                    <h3 className="text-2xl font-bold text-emerald-900">For Families</h3>
                  </div>
                  <p className="text-emerald-800 mb-6">
                    Find verified, compassionate caregivers who will treat your loved ones like family. 
                    From childcare to senior support, we have trusted professionals ready to help.
                  </p>
                  <Button size="lg" asChild className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                    <Link to="/talent">
                      <Heart className="mr-2 h-5 w-5" />
                      Find Care for Your Family
                    </Link>
                  </Button>
                </div>
                
                {/* For Professionals */}
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 text-left">
                  <div className="flex items-center gap-3 mb-4">
                    <Briefcase className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-bold text-primary">For Caregivers</h3>
                  </div>
                  <p className="text-primary-foreground/80 mb-6">
                    Join our professional network and build a meaningful career in caregiving. 
                    Work with premium families who value your expertise and dedication.
                  </p>
                  <Button size="lg" asChild className="w-full bg-primary hover:bg-primary/90">
                    <Link to="/apply">
                      <Briefcase className="mr-2 h-5 w-5" />
                      Start Your Career Journey
                    </Link>
                  </Button>
                </div>
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
        <section className="bg-gradient-to-r from-emerald-50/50 to-emerald-100/30 py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-emerald-900">Care Services for Every Family Need</h2>
              <p className="mt-2 text-emerald-700">Professional care services tailored to your family's unique situation.</p>
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
        <section className="bg-gradient-to-b from-emerald-50/30 to-background py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-900">
                Ready to Find Your Perfect Caregiver?
              </h2>
              <p className="text-emerald-700 text-lg max-w-2xl mx-auto">
                Join thousands of families who trust CareLink for their most important care needs. 
                Get matched with verified, compassionate professionals today.
              </p>
            </div>
            <ClientContactForm />
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="bg-gradient-to-r from-primary to-emerald-600 py-20">
          <div className="container text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Two Paths, One Community of Care
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Whether you're seeking care or providing it, CareLink connects hearts and homes with purpose. 
                Join our trusted community today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" variant="secondary" asChild className="hover-scale bg-emerald-600 hover:bg-emerald-700 text-white border-0">
                  <Link to="/talent">
                    <Heart className="ml-2 h-5 w-5" />
                    Find Family Care
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="hover-scale border-white/30 text-white hover:bg-white/10 bg-white/5">
                  <Link to="/apply">
                    <Briefcase className="ml-2 h-5 w-5" />
                    Build Your Career
                  </Link>
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
