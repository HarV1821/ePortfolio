import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import * as FOGModule from "vanta/dist/vanta.fog.min";
import * as WAVESModule from "vanta/dist/vanta.waves.min";

function resolveEffectFn(mod) {
  let candidate = mod;
  for (let i = 0; i < 3; i++) {
    if (typeof candidate === "function") return candidate;
    if (candidate && typeof candidate.default !== "undefined") {
      candidate = candidate.default;
    } else {
      break;
    }
  }
  return typeof candidate === "function" ? candidate : null;
}

const EFFECTS = {
  fog: resolveEffectFn(FOGModule),
  waves: resolveEffectFn(WAVESModule),
};

export default function VantaBackground({
  children,
  className = "",
  effect = "fog",
  options = {},
}) {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    window.THREE = THREE;

    const EFFECT_FN = EFFECTS[effect];

    if (typeof EFFECT_FN !== "function") {
      console.error(`Unknown or unresolved Vanta effect: "${effect}"`, EFFECT_FN);
      return;
    }

    const instance = EFFECT_FN({
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      ...options,
    });
    setVantaEffect(instance);

    return () => {
      instance?.destroy();
    };
  }, [effect]);

  return (
    <div ref={vantaRef} className={className}>
      {children}
    </div>
  );
}
