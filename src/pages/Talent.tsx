
import { useState } from "react";
import TalentHeader from "@/components/talent/TalentHeader";
import TalentBenefits from "@/components/talent/TalentBenefits";
import TalentFilters from "@/components/talent/TalentFilters";
import TalentCareTypes from "@/components/talent/TalentCareTypes";
import TalentResults from "@/components/talent/TalentResults";
import { useCaregivers } from "@/hooks/useCaregivers";

const Talent = () => {
  const { data: caregivers = [], isLoading } = useCaregivers();
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  // Filter caregivers based on selected filters
  const filteredCaregivers = caregivers.filter(caregiver => {
    const skillMatch = selectedSkills.length === 0 || 
      selectedSkills.some(skill => 
        caregiver.care_types.some(careType => 
          careType.toLowerCase().includes(skill.toLowerCase())
        )
      );

    return skillMatch;
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50/50 via-background to-emerald-100/30 flex items-center justify-center">
        <div className="text-lg text-emerald-600">Loading talent...</div>
      </div>
    );
  }

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
          filteredCount={filteredCaregivers.length}
        />
        <TalentCareTypes />
        <TalentResults 
          filteredCandidates={filteredCaregivers}
          onResetFilters={resetFilters}
        />
      </div>
    </div>
  );
};

export default Talent;
