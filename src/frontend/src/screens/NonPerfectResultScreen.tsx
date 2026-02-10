import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import CopyLinkButton from '@/components/CopyLinkButton';
import { Heart } from 'lucide-react';

interface NonPerfectResultScreenProps {
  score: number;
  onValentineAccepted: () => void;
}

export default function NonPerfectResultScreen({
  score,
  onValentineAccepted,
}: NonPerfectResultScreenProps) {
  const [noClickCount, setNoClickCount] = useState(0);

  const handleNoClick = () => {
    setNoClickCount(noClickCount + 1);
  };

  const handleYesClick = () => {
    onValentineAccepted();
  };

  const getPromptText = () => {
    if (noClickCount === 0) return "Will you still be my Valentine? 💘";
    if (noClickCount === 1) return "Are you sure?? 🥺";
    return "You have no escape 😌";
  };

  const yesButtonScale = 1 + noClickCount * 0.5;
  const noButtonScale = Math.max(0.3, 1 - noClickCount * 0.2);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative z-10">
      <div className="absolute top-4 right-4">
        <CopyLinkButton />
      </div>
      
      <Card className="max-w-2xl w-full p-8 md:p-12 space-y-8 backdrop-blur-sm bg-card/95 border-2 border-romantic-pink/20 shadow-2xl animate-fade-in text-center">
        <div className="space-y-6">
          <div className="flex justify-center">
            <Heart className="w-16 h-16 text-romantic-pink/60 fill-romantic-pink/60" />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Hmm… not perfect 👀
            </h1>
            <p className="text-xl md:text-2xl font-medium text-muted-foreground">
              You need to do better… but I still love you.
            </p>
          </div>

          <div className="py-4">
            <img
              src="/assets/generated/teasing-meme.dim_900x600.png"
              alt="Teasing meme"
              className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
            />
          </div>

          <div className="space-y-6 pt-4">
            <h2 className="text-2xl md:text-3xl font-bold text-romantic-pink">
              {getPromptText()}
            </h2>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Button
                onClick={handleYesClick}
                size="lg"
                style={{
                  transform: `scale(${yesButtonScale})`,
                  transition: 'transform 0.3s ease-out',
                }}
                className="bg-gradient-to-r from-romantic-pink to-romantic-rose hover:from-romantic-rose hover:to-romantic-pink text-lg font-bold px-8 py-6 shadow-lg hover:shadow-xl"
              >
                Yes 💖
              </Button>

              <Button
                onClick={handleNoClick}
                variant="outline"
                size="lg"
                style={{
                  transform: `scale(${noButtonScale})`,
                  transition: 'transform 0.3s ease-out',
                }}
                className="border-2 border-romantic-pink/50 text-lg font-bold px-8 py-6"
              >
                No 😈
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
