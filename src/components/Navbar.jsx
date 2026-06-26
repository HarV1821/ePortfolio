const LINKS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ visible, activeSection, onNavigate }) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <div className="bg-washi/90 backdrop-blur-sm border-b border-stone/20">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => onNavigate("home")}
            className="font-display text-sumi text-lg tracking-wide hover:text-torii transition-colors"
          >
            鳥居
          </button>
          <ul className="flex gap-8">
            {LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => onNavigate(link.id)}
                  className={`font-body text-sm tracking-wide uppercase transition-colors ${
                    activeSection === link.id
                      ? "text-torii"
                      : "text-sumi/70 hover:text-torii"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}