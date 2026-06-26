import SectionCard from "./SectionCard";

const PROJECTS = [
  { title: "Project One", description: "A short, plain description of what this project does and the problem it solves.", tags: ["React", "Node.js"] },
  { title: "Project Two", description: "Swap this out with a real project. Keep the description specific rather than clever.", tags: ["Python", "Data"] },
  { title: "Project Three", description: "A third example — link to a live demo or repo once this section is wired up.", tags: ["TailwindCSS", "Vite"] },
];

export default function Projects() {
  return (
    <div className="h-full w-full flex items-center justify-center px-6">
      <SectionCard className="max-w-4xl w-full">
        <p className="font-body text-stone text-sm tracking-[0.3em] uppercase mb-3 text-center">
          Selected Work
        </p>
        <h2 className="font-display text-sumi text-4xl md:text-5xl mb-12 text-center">
          Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div key={project.title} className="border border-stone/30 rounded-sm p-6 hover:border-torii/60 transition-colors duration-300">
              <h3 className="font-display text-sumi text-xl mb-2">{project.title}</h3>
              <p className="font-body text-sumi/70 text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-body text-xs text-moss border border-moss/30 rounded-full px-3 py-1">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
