import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="About Me in React"
          description="My first React project, rebuilt from a plain HTML page."
          tech="React · Tailwind CSS"
          link="https://github.com/yourusername/CSIT340-Lab1-LastName"
        />
        <ProjectCard
          year="2025"
          title="CampusCart"
          description="A page that shows how long the canteen line is so students can decide when to go."
          tech="HTML · CSS · JavaScript"
          link="https://github.com/yourusername/canteen-queue"
        />
        <ProjectCard
          year="2025"
          title="HotelBookings"
          description="A desktop app for our database class that keeps visit records for a small clinic."
          tech="Java · MySQL"
          link="https://github.com/yourusername/clinic-records"
        />
        <ProjectCard
          year="2024"
          title="Org Event Page"
          description="A one-page site for our org's freshman orientation, with the schedule and venue."
          tech="HTML · Bootstrap"
          link="https://github.com/yourusername/org-event-page"
        />
      </div>
    </section>
  );
}