import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import CelebrationOverlay from '@/components/CelebrationOverlay';
import { Heart, Sparkles } from 'lucide-react';

export default function FinalCelebrationScreen() {
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    setShowCelebration(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative z-10">
      {showCelebration && <CelebrationOverlay />}
      
      <Card className="max-w-2xl w-full p-8 md:p-12 space-y-8 backdrop-blur-sm bg-card/95 border-2 border-romantic-pink/20 shadow-2xl animate-fade-in text-center">
        <div className="space-y-8">
          <div className="flex justify-center gap-4">
            <Heart className="w-16 h-16 text-romantic-pink fill-romantic-pink animate-pulse-slow" />
            <Sparkles className="w-16 h-16 text-romantic-rose animate-pulse-slow" />
            <Heart className="w-16 h-16 text-romantic-pink fill-romantic-pink animate-pulse-slow" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-romantic-pink leading-tight animate-bounce-slow">
            YAY!!! You are my Valentine forever 💖🌹
          </h1>

          <div className="grid grid-cols-3 gap-4 pt-8">
            {[...Array(9)].map((_, i) => (
              <Heart
                key={i}
                className="w-12 h-12 text-romantic-pink fill-romantic-pink animate-pulse-slow"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
