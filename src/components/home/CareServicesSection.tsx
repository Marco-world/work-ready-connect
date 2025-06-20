
import { Stethoscope, Baby, Home, Users2 } from "lucide-react";

const CareServicesSection = () => {
  return (
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
                backgroundImage: "url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <div className="relative z-10">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto mb-4">
                <Stethoscope className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg">Nursing Care</h3>
              <p className="text-sm text-muted-foreground mt-2">Professional medical care at home</p>
            </div>
          </div>
          <div className="text-center p-6 bg-background rounded-lg shadow-lg hover-scale relative overflow-hidden group">
            <div 
              className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1476703993599-0035a21b17a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <div className="relative z-10">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto mb-4">
                <Baby className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg">Childcare</h3>
              <p className="text-sm text-muted-foreground mt-2">Loving care for your little ones</p>
            </div>
          </div>
          <div className="text-center p-6 bg-background rounded-lg shadow-lg hover-scale relative overflow-hidden group">
            <div 
              className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <div className="relative z-10">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto mb-4">
                <Home className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg">Housekeeping</h3>
              <p className="text-sm text-muted-foreground mt-2">Professional home cleaning services</p>
            </div>
          </div>
          <div className="text-center p-6 bg-background rounded-lg shadow-lg hover-scale relative overflow-hidden group">
            <div 
              className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <div className="relative z-10">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto mb-4">
                <Users2 className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg">Elder Care</h3>
              <p className="text-sm text-muted-foreground mt-2">Compassionate senior assistance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareServicesSection;
