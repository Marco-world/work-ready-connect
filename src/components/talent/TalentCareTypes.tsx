
const TalentCareTypes = () => {
  return (
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
  );
};

export default TalentCareTypes;
