import SectionCard from "./SectionCard";

export default function AboutMe() {
  return (
    <div className="h-full w-full flex items-center justify-center px-6 pt-40 sm:pt-48">
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
              A results-driven Computer Science graduate from the University of Science and Technology of Southern Philippines (USTP), a nationally recognized public state university focused on Science and Technology education in Northern Mindanao. Knowledgeable and developed a strong interest in artificial intelligence, machine learning and software development through academic coursework and projects. Has experience in dealing with embedded system projects using Arduino.
            </p>
            <p className="font-body text-sumi/80 text-base md:text-lg leading-relaxed max-w-xl mt-4">
              My Resume
            </p>
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
