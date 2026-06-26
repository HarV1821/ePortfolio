import SectionCard from "./SectionCard";

export default function Contact() {
  return (
    <div className="h-full w-full flex items-center justify-center px-6">
      <SectionCard className="max-w-2xl w-full text-center">
        <p className="font-body text-stone text-sm tracking-[0.3em] uppercase mb-3">
          Get in Touch
        </p>
        <h2 className="font-display text-sumi text-4xl md:text-5xl mb-6">
          Let's talk
        </h2>
        <p className="font-body text-sumi/80 text-base md:text-lg leading-relaxed mb-8">
          Replace this with a short line inviting visitors to reach out — and a real way to do it.
        </p>
        <a href="mailto:youremail@example.com" className="inline-block font-body text-sm tracking-wide uppercase border border-sumi/40 rounded-full px-8 py-3 hover:bg-torii hover:border-torii hover:text-washi transition-colors duration-300">
          Email Me
        </a>
        <div className="mt-10 flex justify-center gap-6">
          <a href="#" className="font-body text-sumi/60 text-sm hover:text-torii transition-colors">GitHub</a>
          <a href="#" className="font-body text-sumi/60 text-sm hover:text-torii transition-colors">LinkedIn</a>
        </div>
      </SectionCard>
    </div>
  );
}
