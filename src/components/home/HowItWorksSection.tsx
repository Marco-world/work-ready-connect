
import { MessageSquare, Users, Heart } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50/30 to-blue-100/20 py-12">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-blue-900">
            How CareLink Works
          </h2>
          <p className="text-blue-700 text-base md:text-lg max-w-2xl mx-auto px-4">
            Finding the perfect caregiver for your family is simple with our streamlined process
          </p>
        </div>
        
        {/* Desktop: 3 columns, Mobile: Single column with connecting lines */}
        <div className="relative">
          {/* Connecting line - Enhanced for mobile */}
          <div className="absolute left-8 top-20 bottom-20 w-0.5 bg-gradient-to-b from-blue-300 to-blue-400 md:hidden"></div>
          
          {/* Desktop connecting elements */}
          <div className="hidden md:flex absolute top-32 left-0 right-0 items-center justify-center">
            <div className="flex items-center justify-between w-2/3">
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-300 to-blue-400"></div>
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-300 to-blue-400"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
            <div className="relative text-center md:text-center group">
              <div className="flex md:justify-center items-start md:items-center gap-4 md:gap-0 md:flex-col">
                {/* Enhanced Icon with better styling */}
                <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300 shadow-lg group-hover:shadow-xl relative z-10 border-2 border-white">
                  <MessageSquare className="h-7 w-7 md:h-9 md:w-9 drop-shadow-sm" />
                </div>
                
                {/* Content */}
                <div className="flex-1 md:flex-none md:mt-6">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs md:text-sm font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-full inline-block mb-4 md:mb-5 shadow-md">
                    Step 1
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-blue-900">
                    Tell Us Your Needs
                  </h3>
                  <p className="text-sm md:text-base text-blue-700 leading-relaxed max-w-xs mx-auto">
                    Share your specific care requirements, schedule preferences, and family situation with our team
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative text-center md:text-center group">
              <div className="flex md:justify-center items-start md:items-center gap-4 md:gap-0 md:flex-col">
                {/* Enhanced Icon */}
                <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300 shadow-lg group-hover:shadow-xl relative z-10 border-2 border-white">
                  <Users className="h-7 w-7 md:h-9 md:w-9 drop-shadow-sm" />
                </div>
                
                {/* Content */}
                <div className="flex-1 md:flex-none md:mt-6">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs md:text-sm font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-full inline-block mb-4 md:mb-5 shadow-md">
                    Step 2
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-blue-900">
                    Get Matched
                  </h3>
                  <p className="text-sm md:text-base text-blue-700 leading-relaxed max-w-xs mx-auto">
                    Our expert team carefully matches you with pre-screened, qualified caregivers who perfectly fit your needs
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative text-center md:text-center group">
              <div className="flex md:justify-center items-start md:items-center gap-4 md:gap-0 md:flex-col">
                {/* Enhanced Icon */}
                <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300 shadow-lg group-hover:shadow-xl relative z-10 border-2 border-white">
                  <Heart className="h-7 w-7 md:h-9 md:w-9 drop-shadow-sm" />
                </div>
                
                {/* Content */}
                <div className="flex-1 md:flex-none md:mt-6">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs md:text-sm font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-full inline-block mb-4 md:mb-5 shadow-md">
                    Step 3
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-blue-900">
                    Start Caring
                  </h3>
                  <p className="text-sm md:text-base text-blue-700 leading-relaxed max-w-xs mx-auto">
                    Begin your care journey with complete confidence, knowing you have ongoing support from our dedicated team
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
