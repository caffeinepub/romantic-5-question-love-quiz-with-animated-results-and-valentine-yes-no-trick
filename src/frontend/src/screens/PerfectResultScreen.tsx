import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import CopyLinkButton from '@/components/CopyLinkButton';
import { Ticket, Sparkles } from 'lucide-react';

interface PerfectResultScreenProps {
  score: number;
}

export default function PerfectResultScreen({ score }: PerfectResultScreenProps) {
  const [showRedeemMessage, setShowRedeemMessage] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative z-10">
      <div className="absolute top-4 right-4">
        <CopyLinkButton />
      </div>
      
      <Card className="max-w-2xl w-full p-8 md:p-12 space-y-8 backdrop-blur-sm bg-card/95 border-2 border-romantic-pink/20 shadow-2xl animate-fade-in text-center">
        <div className="space-y-6">
          <div className="flex justify-center">
            <Sparkles className="w-20 h-20 text-romantic-pink animate-pulse-slow" />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-romantic-pink leading-tight">
              OMG {score}/5!!! 😭💖
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-foreground">
              You are officially the BEST GIRLFREIND IN THE WORLD.
            </p>
          </div>

          <div className="py-4">
            <img
              src="/assets/generated/couple-meme.dim_900x600.png"
              alt="Romantic couple"
              className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
            />
          </div>

          <Card className="bg-gradient-to-br from-romantic-pink/10 to-romantic-rose/10 border-2 border-romantic-pink/30 p-6 space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Ticket className="w-8 h-8 text-romantic-pink" />
              <h2 className="text-2xl font-bold text-romantic-pink">
                You have won a DATE COUPON!
              </h2>
            </div>
            
            <p className="text-lg text-foreground font-medium">
              Redeemable for: One full day of love, food, cuddles & surprises.
            </p>

            {!showRedeemMessage ? (
              <Button
                onClick={() => setShowRedeemMessage(true)}
                size="lg"
                className="w-full text-lg py-6 bg-gradient-to-r from-romantic-pink to-romantic-rose hover:from-romantic-rose hover:to-romantic-pink transition-all duration-300 transform hover:scale-105"
              >
                Redeem My Date 💌
              </Button>
            ) : (
              <Alert className="bg-romantic-pink/10 border-romantic-pink/30">
                <AlertDescription className="text-center text-lg font-medium text-foreground">
                  Your boy will contact you shortly for booking 😉
                </AlertDescription>
              </Alert>
            )}
          </Card>
        </div>
      </Card>
    </div>
  );
}
