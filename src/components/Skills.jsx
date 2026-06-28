import SectionCard from "./SectionCard";

const SKILL_GROUPS = [
  { label: "Frontend", items: ["React", "TailwindCSS", "JavaScript", "HTML/CSS"] },
  { label: "Backend", items: ["Node.js", "Express", "REST APIs"] },
  { label: "Tools", items: ["Git", "Vite", "Figma"] },
];

export default function Skills() {
  return (
    <div className="h-full w-full flex items-center justify-center px-6 pt-40 sm:pt-48">
      <SectionCard className="max-w-3xl w-full">
        <p className="font-body text-stone text-sm tracking-[0.3em] uppercase mb-3 text-center">
          What I Work With
        </p>
        <h2 className="font-display text-sumi text-4xl md:text-5xl mb-12 text-center">
          Skills
        </h2>
        <div className="grid sm:grid-cols-3 gap-10">
          {SKILL_GROUPS.map((group) => (
            <div key={group.label} className="text-center">
              <h3 className="font-display text-torii text-lg mb-4">{group.label}</h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="font-body text-sumi/80 text-sm">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
