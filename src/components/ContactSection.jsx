import SectionHeading from './SectionHeading';
import ContactLink from './ContactLink';

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Contact" subtitle="Say hi." />
      <ul className="mt-8 space-y-3">
        <ContactLink label="Email" href="vincemichael.esgana@cit.edu" text="vincemichael.esgana@cit.edu" />
        <ContactLink label="GitHub" href="https://github.com/VinceMichaelEsgana/CSIT340G8-Lab2_Esgana.git" text="github.com/VinceMichaelEsgana" />
        <ContactLink label="LinkedIn" href="https://linkedin.com/in/vincemichaelesgana" text="linkedin.com/in/vincemichaelesgana" />
      </ul>
    </section>
  );
}