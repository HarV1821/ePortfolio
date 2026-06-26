import SectionCard from "./SectionCard";

export default function AboutMe() {
  return (
    <div className="h-full w-full flex items-center justify-center px-6 pt-32">
      <SectionCard className="max-w-3xl">
        <div className="grid md:grid-cols-[1px_1fr] gap-10">
          <div className="hidden md:block w-px bg-stone/30" />

          <div>
            <p className="font-body text-stone text-sm tracking-[0.3em] uppercase mb-3">
              About Me
            </p>
            <h2 className="font-display text-sumi text-4xl md:text-5xl mb-6">
              A little about who I am
            </h2>
            <p className="font-body text-sumi/80 text-base md:text-lg leading-relaxed max-w-xl">
              I'm a developer who believes good software should feel as
              considered as a well-kept garden — nothing extra, nothing
              missing. This is placeholder copy; replace it with your own
              story: where you've worked, what drives you, and what kind
              of problems you like to solve.
            </p>
            <p className="font-body text-sumi/80 text-base md:text-lg leading-relaxed max-w-xl mt-4">
              Outside of code, I [hobby], [hobby], and [interest] — small
              details like this help visitors remember you as a person,
              not just a resume.
            </p>
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
