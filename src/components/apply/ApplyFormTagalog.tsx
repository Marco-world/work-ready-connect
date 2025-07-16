import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { useState } from "react";
import { formSchema, ApplyFormData } from "@/types/apply";
import { useApplyFormSubmissionTagalog } from "@/hooks/useApplyFormSubmissionTagalog";
import PersonalInfoFieldsTagalog from "./PersonalInfoFieldsTagalog";
import ProfessionalInfoFieldsTagalog from "./ProfessionalInfoFieldsTagalog";
import SkillsSelectorTagalog from "./SkillsSelectorTagalog";
import SubmitButtonTagalog from "./SubmitButtonTagalog";

const ApplyFormTagalog = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const { submitApplication, isSubmitting } = useApplyFormSubmissionTagalog();

  const form = useForm<ApplyFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      headline: "",
      selectedSkills: [],
      bio: "",
    },
  });

  const handleSkillChange = (skill: string, checked: boolean) => {
    let updatedSkills;
    if (checked) {
      updatedSkills = [...selectedSkills, skill];
    } else {
      updatedSkills = selectedSkills.filter(s => s !== skill);
    }
    setSelectedSkills(updatedSkills);
    form.setValue('selectedSkills', updatedSkills);
  };

  async function onSubmit(values: ApplyFormData) {
    const result = await submitApplication(values, selectedSkills);
    
    if (result.success) {
      // Reset form and selected skills
      form.reset();
      setSelectedSkills([]);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <PersonalInfoFieldsTagalog control={form.control} />
        <ProfessionalInfoFieldsTagalog control={form.control} />
        <SkillsSelectorTagalog
          control={form.control}
          selectedSkills={selectedSkills}
          onSkillChange={handleSkillChange}
        />
        <SubmitButtonTagalog isSubmitting={isSubmitting} />
      </form>
    </Form>
  );
};

export default ApplyFormTagalog;