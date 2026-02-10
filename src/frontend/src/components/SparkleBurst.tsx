import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  delay: number;
  scale: number;
}

export default function SparkleBurst() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const newSparkles: Sparkle[] = [];
    for (let i = 0; i < 20; i++) {
      const angle = (i / 20) * Math.PI * 2;
      const distance = 30 + Math.random() * 20;
      newSparkles.push({
        id: i,
        x: 50 + Math.cos(angle) * distance,
        y: 50 + Math.sin(angle) * distance,
        delay: Math.random() * 0.3,
        scale: 0.5 + Math.random() * 1,
      });
    }
    setSparkles(newSparkles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-sparkle"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            animationDelay: `${sparkle.delay}s`,
            transform: `scale(${sparkle.scale})`,
          }}
        >
          <Sparkles className="w-8 h-8 text-yellow-400 fill-yellow-400" />
        </div>
      ))}
    </div>
  );
}
