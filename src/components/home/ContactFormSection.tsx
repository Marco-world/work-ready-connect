
import ClientContactForm from "@/components/ClientContactForm";

const ContactFormSection = () => {
  return (
    <section className="bg-gradient-to-b from-emerald-50/30 to-background py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-900">
            Ready to Find Your Perfect Household worker?
          </h2>
          <p className="text-emerald-700 text-lg max-w-2xl mx-auto">
            Join thousands of families who trust CareLink for their most important care needs. 
            Get matched with verified, compassionate professionals today.
          </p>
        </div>
        <ClientContactForm />
      </div>
    </section>
  );
};

export default ContactFormSection;
