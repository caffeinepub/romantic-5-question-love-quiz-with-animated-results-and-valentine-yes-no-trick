import { Button } from '@/components/ui/button';
import { Share2, Check } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function CopyLinkButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast.success('Link copied! 💖', {
        description: 'Share this love quiz with anyone!',
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy link');
    }
  };

  return (
    <Button
      onClick={handleCopy}
      variant="outline"
      size="sm"
      className="gap-2 border-romantic-pink/30 hover:bg-romantic-pink/10"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4" />
          Copied!
        </>
      ) : (
        <>
          <Share2 className="w-4 h-4" />
          Copy Link
        </>
      )}
    </Button>
  );
}
