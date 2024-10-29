import { useEffect, useState } from 'react';

export function MouseTrail() {
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTrail((prev) => [...prev.slice(-20), { x: e.clientX, y: e.clientY }]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {trail.map((point, i) => (
        <div
          key={i}
          className="mouse-trail"
          style={{
            left: point.x - 10,
            top: point.y - 10,
            opacity: (i / trail.length) * 0.3,
            transform: `scale(${(i / trail.length) * 2})`,
          }}
        />
      ))}
    </>
  );
}