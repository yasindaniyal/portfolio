import { useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
};

const LiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: -1000, y: -1000 };
    let points: Point[] = [];
    let frame = 0;
    let width = 0;
    let height = 0;

    const createPoints = () => {
      const count = Math.min(62, Math.max(28, Math.floor(width / 24)));
      points = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        radius: Math.random() * 1.2 + 0.5,
      }));
    };

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      createPoints();
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      points.forEach((point, index) => {
        if (!reducedMotion) {
          point.x += point.vx;
          point.y += point.vy;
          if (point.x < 0 || point.x > width) point.vx *= -1;
          if (point.y < 0 || point.y > height) point.vy *= -1;
        }

        const pointerDistance = Math.hypot(point.x - pointer.x, point.y - pointer.y);
        const active = pointerDistance < 150;
        context.beginPath();
        context.fillStyle = active ? "rgba(103, 232, 249, 0.7)" : "rgba(148, 163, 184, 0.28)";
        context.arc(point.x, point.y, active ? point.radius + 0.7 : point.radius, 0, Math.PI * 2);
        context.fill();

        for (let next = index + 1; next < points.length; next += 1) {
          const other = points[next];
          const distance = Math.hypot(point.x - other.x, point.y - other.y);
          if (distance < 115) {
            context.beginPath();
            context.strokeStyle = `rgba(103, 232, 249, ${0.07 * (1 - distance / 115)})`;
            context.moveTo(point.x, point.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        }
      });

      if (!reducedMotion) frame = window.requestAnimationFrame(draw);
    };

    const handleResize = () => {
      resize();
      if (reducedMotion) draw();
    };

    const handlePointer = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };

    resize();
    draw();
    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", handlePointer, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
};

export default LiveBackground;
