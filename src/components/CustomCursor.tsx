import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    document.documentElement.classList.add("custom-cursor-active");
    const target = { x: -40, y: -40 };
    const current = { x: -40, y: -40 };
    let frame: number | null = null;

    const render = () => {
      current.x += (target.x - current.x) * 0.18;
      current.y += (target.y - current.y) * 0.18;
      ring.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      if (Math.abs(target.x - current.x) > 0.1 || Math.abs(target.y - current.y) > 0.1) {
        frame = window.requestAnimationFrame(render);
      } else {
        frame = null;
      }
    };

    const handleMove = (event: PointerEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
      dot.style.transform = `translate3d(${target.x}px, ${target.y}px, 0)`;
      ring.classList.add("is-visible");
      dot.classList.add("is-visible");
      if (frame === null) frame = window.requestAnimationFrame(render);
    };
    const handleOver = (event: PointerEvent) => {
      const element = event.target as HTMLElement;
      ring.classList.toggle("is-interactive", Boolean(element.closest("a, button, [role='button']")));
    };
    const handleDown = () => ring.classList.add("is-pressed");
    const handleUp = () => ring.classList.remove("is-pressed");

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerover", handleOver, { passive: true });
    window.addEventListener("pointerdown", handleDown);
    window.addEventListener("pointerup", handleUp);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      if (frame !== null) window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerover", handleOver);
      window.removeEventListener("pointerdown", handleDown);
      window.removeEventListener("pointerup", handleUp);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} aria-hidden="true" className="cursor-ring" />
      <div ref={dotRef} aria-hidden="true" className="cursor-dot" />
    </>
  );
};

export default CustomCursor;
