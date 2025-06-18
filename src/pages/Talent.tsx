
import CandidateCard from "@/components/CandidateCard";
import { candidates } from "@/data/candidates";
import { Heart, Shield, Clock, Users } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const Talent = () => {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  // Define allowed languages and skills
  const allLanguages = ["English", "Arabic", "Spanish", "French", "Tagalog"];
  const allowedSkills = [
    "Cleaning",
    "Washing", 
    "Ironing",
    "Baby Sitting",
    "New Born Care",
    "Decorating",
    "Housekeeping",
    "Caregiver",
    "Old Person Care",
    "Cooking",
    "Driving"
  ];

  // Filter candidates based on selected filters
  const filteredCandidates = candidates.filter(candidate => {
    const languageMatch = selectedLanguages.length === 0 || 
      selectedLanguages.some(lang => 
        lang === "English" || lang === "Arabic" // Assuming all candidates have these
      );
    
    const skillMatch = selectedSkills.length === 0 || 
      selectedSkills.some(skill => 
        candidate.skills.some(candidateSkill => 
          candidateSkill.toLowerCase().includes(skill.toLowerCase())
        )
      );

    return languageMatch && skillMatch;
  });

  const resetFilters = () => {
    setSelectedLanguages([]);
    setSelectedSkills([]);
  };

  const handleLanguageChange = (language: string, checked: boolean) => {
    if (checked) {
      setSelectedLanguages(prev => [...prev, language]);
    } else {
      setSelectedLanguages(prev => prev.filter(lang => lang !== language));
    }
  };

  const handleSkillChange = (skill: string, checked: boolean) => {
    if (checked) {
      setSelectedSkills(prev => [...prev, skill]);
    } else {
      setSelectedSkills(prev => prev.filter(s => s !== skill));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50/50 via-background to-emerald-100/30">
      <div className="container py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-extrabold tracking-tight text-emerald-900">Find Your Perfect Caregiver</h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-emerald-700">
            Discover compassionate, verified caregivers who will treat your family with the love and care they deserve. 
            Every professional in our network is thoroughly vetted for your peace of mind.
          </p>
        </div>
        
        {/* Family-focused benefits */}
        <div className="mb-8 grid md:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
            <Shield className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
            <h4 className="font-semibold text-sm text-emerald-900">Verified & Trusted</h4>
            <p className="text-xs text-emerald-700">Background checked</p>
          </div>
          <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
            <Heart className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
            <h4 className="font-semibold text-sm text-emerald-900">Compassionate Care</h4>
            <p className="text-xs text-emerald-700">Genuine caring nature</p>
          </div>
          <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
            <Clock className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
            <h4 className="font-semibold text-sm text-emerald-900">Flexible Scheduling</h4>
            <p className="text-xs text-emerald-700">Works with your needs</p>
          </div>
          <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
            <Users className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
            <h4 className="font-semibold text-sm text-emerald-900">Family Matched</h4>
            <p className="text-xs text-emerald-700">Perfect compatibility</p>
          </div>
        </div>
        
        {/* Filter Section */}
        <div className="mb-8 p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-emerald-100">
          <h3 className="text-lg font-semibold text-emerald-900 mb-4">Filter Caregivers</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Language Filters */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-emerald-800">Languages</label>
              <div className="space-y-2">
                {allLanguages.map(language => (
                  <div key={language} className="flex items-center space-x-2">
                    <Checkbox
                      id={`language-${language}`}
                      checked={selectedLanguages.includes(language)}
                      onCheckedChange={(checked) => handleLanguageChange(language, checked as boolean)}
                      className="border-emerald-300 data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600"
                    />
                    <Label 
                      htmlFor={`language-${language}`}
                      className="text-sm text-emerald-700 cursor-pointer"
                    >
                      {language}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Skill Filters */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-emerald-800">Skills</label>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {allowedSkills.map(skill => (
                  <div key={skill} className="flex items-center space-x-2">
                    <Checkbox
                      id={`skill-${skill}`}
                      checked={selectedSkills.includes(skill)}
                      onCheckedChange={(checked) => handleSkillChange(skill, checked as boolean)}
                      className="border-emerald-300 data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600"
                    />
                    <Label 
                      htmlFor={`skill-${skill}`}
                      className="text-sm text-emerald-700 cursor-pointer"
                    >
                      {skill}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={resetFilters}
              className="px-4 py-2 text-sm border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors"
            >
              Reset Filters
            </button>
            <div className="text-sm text-emerald-700">
              Showing {filteredCandidates.length} caregiver{filteredCandidates.length !== 1 ? 's' : ''}
            </div>
          </div>

          {/* Active Filters */}
          {(selectedLanguages.length > 0 || selectedSkills.length > 0) && (
            <div className="mt-4 space-y-2">
              <span className="text-sm text-emerald-700">Active filters:</span>
              <div className="flex flex-wrap gap-2">
                {selectedLanguages.map(language => (
                  <Badge key={`lang-${language}`} variant="secondary" className="bg-emerald-100 text-emerald-700">
                    Language: {language}
                  </Badge>
                ))}
                {selectedSkills.map(skill => (
                  <Badge key={`skill-${skill}`} variant="secondary" className="bg-emerald-100 text-emerald-700">
                    Skill: {skill}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Care type filters with family-friendly messaging */}
        <div className="mb-8 p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-emerald-100">
          <h3 className="text-lg font-semibold text-emerald-900 mb-4 text-center">What type of care does your family need?</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium hover:bg-emerald-200 transition-colors cursor-pointer">
              👩‍⚕️ Professional Nursing
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium hover:bg-emerald-200 transition-colors cursor-pointer">
              👶 Loving Childcare
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium hover:bg-emerald-200 transition-colors cursor-pointer">
              🏠 Home Support
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium hover:bg-emerald-200 transition-colors cursor-pointer">
              👴 Senior Companionship
            </div>
          </div>
        </div>

        {filteredCandidates.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-emerald-700 text-lg">No caregivers match your current filters.</p>
            <button
              onClick={resetFilters}
              className="mt-4 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCandidates.map((candidate, index) => (
              <div key={candidate.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CandidateCard candidate={candidate} />
              </div>
            ))}
          </div>
        )}
        
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
      </div>
    </div>
  );
};

export default Talent;
