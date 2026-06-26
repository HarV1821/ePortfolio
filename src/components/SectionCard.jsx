export default function SectionCard({ children, className = "" }) {
  return (
    <div
      className={`bg-washi/85 backdrop-blur-md border border-stone/20 rounded-sm shadow-lg shadow-sumi/10 px-8 py-10 sm:px-12 sm:py-14 ${className}`}
    >
      {children}
    </div>
  );
}
