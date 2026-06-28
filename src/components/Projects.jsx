import SectionCard from "./SectionCard";

const PROJECTS = [
  { title: "AniGUI", description: "Python-based native desktop client prototype using multiple APIs for streaming anime.", tags: ["Python", "PYQT6", "Multi-API", "SQLite", "FFMPEG"] },
  { title: "Umazing Discord Bot", description: "Discord bot that provides information, news, and other features on the game “Uma Musume” using the Umapyoi.net API.", tags: ["Python"] },
  { title: "iPara", description: "Flutter-based mobile application for commuting passengers and drivers, offering real-time public utility vehicles and jeepney tracking.", tags: ["Flutter", "Dart"] },
];

export default function Projects() {
  return (
    <div className="h-full w-full flex items-center justify-center px-6 pt-40 sm:pt-48">
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
