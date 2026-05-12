"use client";
import { useEffect, useRef } from "react";

const media = [
  "/images/image-003 (7).avif",
  "/images/image-002.avif",
  "/images/image-003 (6).avif",
  "/images/vid_001.mp4",
];

const VIDEO_EXTENSIONS = ["mp4", "webm", "ogg", "mov"];

function isVideo(src) {
  const ext = src.split(".").pop().toLowerCase();
  return VIDEO_EXTENSIONS.includes(ext);
}

const doubled = [...media, ...media];

export default function AutomaticGalerie() {
  const trackRef = useRef(null);
  const sectionRef = useRef(null);
  const stateRef = useRef({
    position: 0,
    animationId: null,
    isDragging: false,
    startX: 0,
    dragStartPosition: 0,
    velocity: 0,
    lastX: 0,
    lastTime: 0,
  });

  useEffect(() => {
    const track = trackRef.current;
    const section = sectionRef.current;
    const s = stateRef.current;
    const SPEED = 0.5;

    function getHalfWidth() {
      return track.scrollWidth / 2;
    }

    function wrapPosition(pos) {
      const half = getHalfWidth();
      if (pos <= -half) return pos + half;
      if (pos > 0) return pos - half;
      return pos;
    }

    function animate() {
      if (!s.isDragging) {
        s.position -= SPEED;
        s.position = wrapPosition(s.position);
      }
      track.style.transform = `translateX(${s.position}px)`;
      s.animationId = requestAnimationFrame(animate);
    }

    s.animationId = requestAnimationFrame(animate);

    function onMouseDown(e) {
      s.isDragging = true;
      s.startX = e.clientX;
      s.dragStartPosition = s.position;
      s.lastX = e.clientX;
      s.lastTime = Date.now();
      s.velocity = 0;
      section.style.cursor = "grabbing";
    }

    function onMouseMove(e) {
      if (!s.isDragging) return;
      const now = Date.now();
      const dt = now - s.lastTime;
      if (dt > 0) s.velocity = (e.clientX - s.lastX) / dt;
      s.lastX = e.clientX;
      s.lastTime = now;
      s.position = wrapPosition(s.dragStartPosition + (e.clientX - s.startX));
    }

    function applyMomentum() {
      let v = s.velocity * 15;
      const decay = 0.92;
      function step() {
        if (Math.abs(v) < 0.2) return;
        s.position = wrapPosition(s.position + v);
        v *= decay;
        requestAnimationFrame(step);
      }
      step();
    }

    function onMouseUp() {
      if (!s.isDragging) return;
      s.isDragging = false;
      section.style.cursor = "grab";
      applyMomentum();
    }

    function onTouchStart(e) {
      s.isDragging = true;
      s.startX = e.touches[0].clientX;
      s.dragStartPosition = s.position;
      s.lastX = s.startX;
      s.lastTime = Date.now();
      s.velocity = 0;
    }

    function onTouchMove(e) {
      if (!s.isDragging) return;
      const now = Date.now();
      const dt = now - s.lastTime;
      if (dt > 0) s.velocity = (e.touches[0].clientX - s.lastX) / dt;
      s.lastX = e.touches[0].clientX;
      s.lastTime = now;
      s.position = wrapPosition(s.dragStartPosition + (e.touches[0].clientX - s.startX));
    }

    function onTouchEnd() {
      if (!s.isDragging) return;
      s.isDragging = false;
      applyMomentum();
    }

    section.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    section.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      cancelAnimationFrame(s.animationId);
      section.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      section.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 overflow-hidden bg-[#0a0a0a] cursor-grab select-none"
    >
      <div ref={trackRef} className="flex gap-12 md:gap-40 w-max">
        {doubled.map((src, i) => (
          <div
            key={i}
            className="w-[300px] h-[200px] md:w-[500px] md:h-[350px] flex-shrink-0 rounded overflow-hidden"
          >
            {isVideo(src) ? (
              <video
                src={src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover pointer-events-none"
              />
            ) : (
              <img
                src={src}
                alt={`Galerie Bild ${i + 1}`}
                className="w-full h-full object-cover pointer-events-none"
                draggable={false}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}