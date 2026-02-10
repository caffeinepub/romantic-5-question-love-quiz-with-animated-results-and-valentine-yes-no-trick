import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  scale: number;
}

export default function CelebrationOverlay() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 30; i++) {
      newParticles.push({
        id: i,
        x: 50,
        y: 50,
        vx: (Math.random() - 0.5) * 100,
        vy: (Math.random() - 0.5) * 100,
        rotation: Math.random() * 360,
        scale: 0.5 + Math.random() * 1,
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-confetti"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            '--vx': `${particle.vx}vw`,
            '--vy': `${particle.vy}vh`,
            transform: `rotate(${particle.rotation}deg) scale(${particle.scale})`,
          } as React.CSSProperties}
        >
          <Heart className="w-6 h-6 text-romantic-pink fill-romantic-pink" />
        </div>
      ))}
    </div>
  );
}
