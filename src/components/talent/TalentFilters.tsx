
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AVAILABLE_SKILLS } from "@/constants/skills";

interface TalentFiltersProps {
  selectedLanguages: string[];
  selectedSkills: string[];
  onLanguageChange: (language: string, checked: boolean) => void;
  onSkillChange: (skill: string, checked: boolean) => void;
  onResetFilters: () => void;
  filteredCount: number;
}

const TalentFilters = ({ 
  selectedLanguages, 
  selectedSkills, 
  onLanguageChange, 
  onSkillChange, 
  onResetFilters,
  filteredCount 
}: TalentFiltersProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const allLanguages = ["English", "Arabic", "Spanish", "French", "Tagalog"];

  return (
    <div className="mb-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-emerald-100">
      {/* Filter Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h3 className="text-lg font-semibold text-emerald-900">Filter Household workers</h3>
          <div className="text-sm text-emerald-700">
            Showing {filteredCount} Household worker{filteredCount !== 1 ? 's' : ''}
          </div>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 px-4 py-2 text-sm border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors"
        >
          {isExpanded ? 'Hide Filters' : 'Show Filters'}
          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
      </div>

      {/* Expandable Filter Content */}
      {isExpanded && (
        <div className="px-4 pb-4 border-t border-emerald-100">
          <div className="pt-4 grid md:grid-cols-2 gap-6">
            {/* Language Filters */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-emerald-800">Languages</label>
              <div className="space-y-2">
                {allLanguages.map(language => (
                  <div key={language} className="flex items-center space-x-2">
                    <Checkbox
                      id={`language-${language}`}
                      checked={selectedLanguages.includes(language)}
                      onCheckedChange={(checked) => onLanguageChange(language, checked as boolean)}
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
                {AVAILABLE_SKILLS.map(skill => (
                  <div key={skill} className="flex items-center space-x-2">
                    <Checkbox
                      id={`skill-${skill}`}
                      checked={selectedSkills.includes(skill)}
                      onCheckedChange={(checked) => onSkillChange(skill, checked as boolean)}
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
              onClick={onResetFilters}
              className="px-4 py-2 text-sm border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors"
            >
              Reset Filters
            </button>
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
      )}
    </div>
  );
};

export default TalentFilters;
