
import { MessageSquare, Users, Heart } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <section className="bg-gradient-to-b from-emerald-50/30 to-background py-12 md:py-20">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-emerald-900">
            How CareLink Works
          </h2>
          <p className="text-emerald-700 text-base md:text-lg max-w-2xl mx-auto px-4">
            Finding the perfect caregiver for your family is simple with our streamlined process
          </p>
        </div>
        
        {/* Desktop: 3 columns, Mobile: Single column with connecting lines */}
        <div className="relative">
          {/* Connecting line for mobile */}
          <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-emerald-200 md:hidden"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
            <div className="relative text-center md:text-center group">
              <div className="flex md:justify-center items-start md:items-center gap-4 md:gap-0 md:flex-col">
                {/* Icon */}
                <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 md:h-16 md:w-16 rounded-full bg-emerald-100 text-emerald-600 group-hover:bg-emerald-200 transition-all duration-300 shadow-sm group-hover:shadow-md relative z-10">
                  <MessageSquare className="h-6 w-6 md:h-8 md:w-8" />
                </div>
                
                {/* Content */}
                <div className="flex-1 md:flex-none md:mt-6">
                  <div className="bg-emerald-500 text-white text-xs md:text-sm font-semibold px-2.5 py-1 md:px-3 rounded-full inline-block mb-3 md:mb-4">
                    Step 1
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-emerald-900">
                    Tell Us Your Needs
                  </h3>
                  <p className="text-sm md:text-base text-emerald-700 leading-relaxed">
                    Share your specific care requirements, schedule preferences, and family situation
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative text-center md:text-center group">
              <div className="flex md:justify-center items-start md:items-center gap-4 md:gap-0 md:flex-col">
                {/* Icon */}
                <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 md:h-16 md:w-16 rounded-full bg-emerald-100 text-emerald-600 group-hover:bg-emerald-200 transition-all duration-300 shadow-sm group-hover:shadow-md relative z-10">
                  <Users className="h-6 w-6 md:h-8 md:w-8" />
                </div>
                
                {/* Content */}
                <div className="flex-1 md:flex-none md:mt-6">
                  <div className="bg-emerald-500 text-white text-xs md:text-sm font-semibold px-2.5 py-1 md:px-3 rounded-full inline-block mb-3 md:mb-4">
                    Step 2
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-emerald-900">
                    Get Matched
                  </h3>
                  <p className="text-sm md:text-base text-emerald-700 leading-relaxed">
                    Our team carefully matches you with pre-screened, qualified caregivers who fit your needs
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative text-center md:text-center group">
              <div className="flex md:justify-center items-start md:items-center gap-4 md:gap-0 md:flex-col">
                {/* Icon */}
                <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 md:h-16 md:w-16 rounded-full bg-emerald-100 text-emerald-600 group-hover:bg-emerald-200 transition-all duration-300 shadow-sm group-hover:shadow-md relative z-10">
                  <Heart className="h-6 w-6 md:h-8 md:w-8" />
                </div>
                
                {/* Content */}
                <div className="flex-1 md:flex-none md:mt-6">
                  <div className="bg-emerald-500 text-white text-xs md:text-sm font-semibold px-2.5 py-1 md:px-3 rounded-full inline-block mb-3 md:mb-4">
                    Step 3
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-emerald-900">
                    Start Caring
                  </h3>
                  <p className="text-sm md:text-base text-emerald-700 leading-relaxed">
                    Begin your care journey with confidence, knowing you have ongoing support from our team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
