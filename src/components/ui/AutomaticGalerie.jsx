"use client";
import { useEffect, useRef } from "react";

const images = [
  "/images/hero_image_version_0001.avif",
  "/images/hero_image_version_0001.avif",
  "/images/hero_image_version_0001.avif",
  "/images/hero_image_version_0001.avif",
  "/images/hero_image_version_0001.avif",
  "/images/hero_image_version_0001.avif",
  "/images/hero_image_version_0001.avif",
];

// Bilder doppeln für nahtlosen Loop
const doubled = [...images, ...images];

export default function AutomaticGalerie() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    let animationId;
    let position = 0;

    const step = () => {
      position -= 0.5; // Geschwindigkeit anpassen

      // Zurücksetzen wenn die Hälfte durchgescrollt
      if (Math.abs(position) >= track.scrollWidth / 2) {
        position = 0;
      }

      track.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-16 overflow-hidden bg-[#0a0a0a]">
      <div ref={trackRef} className="flex gap-12 md:gap-40 w-max">
        {doubled.map((src, i) => (
          <div key={i} className="w-[300px] h-[200px] md:w-[500px] md:h-[350px] flex-shrink-0 rounded overflow-hidden">
            <img
              src={src}
              alt={`Galerie Bild ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}