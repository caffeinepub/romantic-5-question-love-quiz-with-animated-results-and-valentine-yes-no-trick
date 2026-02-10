import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import CopyLinkButton from '@/components/CopyLinkButton';
import { Heart } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative z-10">
      <div className="absolute top-4 right-4">
        <CopyLinkButton />
      </div>
      
      <Card className="max-w-lg w-full p-8 md:p-12 text-center space-y-8 backdrop-blur-sm bg-card/95 border-2 border-romantic-pink/20 shadow-2xl animate-fade-in">
        <div className="space-y-4">
          <div className="flex justify-center">
            <Heart className="w-16 h-16 text-romantic-pink fill-romantic-pink animate-pulse-slow" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-romantic-pink leading-tight">
            How Well Do You Know Your Boy? 💖
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground font-medium">
            A tiny test made with love just for you
          </p>
        </div>

        <div className="pt-4">
          <Button
            onClick={onStart}
            size="lg"
            className="w-full text-lg py-6 bg-gradient-to-r from-romantic-pink to-romantic-rose hover:from-romantic-rose hover:to-romantic-pink transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Start the Love Test →
          </Button>
        </div>

        <div className="flex justify-center gap-2 pt-4">
          <Heart className="w-4 h-4 text-romantic-pink/60 fill-romantic-pink/60" />
          <Heart className="w-4 h-4 text-romantic-pink/60 fill-romantic-pink/60" />
          <Heart className="w-4 h-4 text-romantic-pink/60 fill-romantic-pink/60" />
        </div>
      </Card>
    </div>
  );
}
