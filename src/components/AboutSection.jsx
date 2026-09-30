import SectionHeading from './SectionHeading';
import Fact from './Fact';

export default function AboutSection() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="About" subtitle="A little about who I am." />
      <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
        Driven by a passion for technology and problem-solving, I am a third-year Information Technology student dedicated to mastering software development,
         systems analysis, and modern tech solutions. 
         Throughout my academic journey, I have built a strong foundation in programming, database management, and web 
         development, constantly seeking opportunities to apply my skills to real-world challenges. I thrive in collaborative environments, 
         enjoy diving into complex logic, and am eager to continue expanding my expertise in emerging technologies as I prepare to make a meaningful 
         impact in the IT industry.
      </p>
      <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
        <Fact label="Course" value="BS Information Technology" />
        <Fact label="Year level" value="Third year" />
        <Fact label="School" value="CIT-U" />
        <Fact label="Based in" value="Cebu City" />
      </dl>
    </section>
  );
}