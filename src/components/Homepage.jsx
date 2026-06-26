import VantaBackground from "./VantaBackground";

export default function Homepage({ onEnter }) {
  return (
    <VantaBackground
      effect="waves"
      className="relative h-screen w-full overflow-hidden"
      options={{
        color: 0x2b1c3c,
        shininess: 30.0,
        waveHeight: 15.0,
        waveSpeed: 1.0,
        zoom: 1.0,
      }}
    >
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-display font-bold text-washi text-5xl sm:text-6xl md:text-7xl tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.65)]">
          Harvey Francis Magarin
        </h1>
        <p className="font-body font-medium text-washi text-base sm:text-lg mt-5 max-w-md drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]">
          Developer
        </p>
      </div>

      <button
        onClick={onEnter}
        aria-label="Scroll to About Me"
        className="group absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-washi focus-visible:ring-offset-2 focus-visible:ring-offset-sumi rounded-full p-2"
      >
        <span className="font-body text-washi/80 text-xs tracking-[0.2em] uppercase drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
          Scroll
        </span>
        <span className="block h-10 w-px bg-washi/70 group-hover:h-14 transition-all duration-300" />
      </button>
    </VantaBackground>
  );
}
