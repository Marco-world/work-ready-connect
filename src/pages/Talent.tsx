
import { candidates } from "@/data/candidates";
import { useState } from "react";
import TalentHeader from "@/components/talent/TalentHeader";
import TalentBenefits from "@/components/talent/TalentBenefits";
import TalentFilters from "@/components/talent/TalentFilters";
import TalentCareTypes from "@/components/talent/TalentCareTypes";
import TalentResults from "@/components/talent/TalentResults";

const Talent = () => {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

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
        <TalentHeader />
        <TalentBenefits />
        <TalentFilters 
          selectedLanguages={selectedLanguages}
          selectedSkills={selectedSkills}
          onLanguageChange={handleLanguageChange}
          onSkillChange={handleSkillChange}
          onResetFilters={resetFilters}
          filteredCount={filteredCandidates.length}
        />
        <TalentCareTypes />
        <TalentResults 
          filteredCandidates={filteredCandidates}
          onResetFilters={resetFilters}
        />
      </div>
    </div>
  );
};

export default Talent;
