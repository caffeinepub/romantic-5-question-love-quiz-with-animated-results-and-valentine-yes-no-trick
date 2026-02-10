import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '@/hooks/useAudio';

export default function AudioControls() {
  const { isMuted, toggleMute } = useAudio();

  return (
    <div className="fixed top-4 left-4 z-50">
      <Button
        onClick={toggleMute}
        variant="outline"
        size="sm"
        className="gap-2 border-romantic-pink/30 hover:bg-romantic-pink/10 backdrop-blur-sm"
      >
        {isMuted ? (
          <VolumeX className="w-4 h-4" />
        ) : (
          <Volume2 className="w-4 h-4" />
        )}
      </Button>
    </div>
  );
}
