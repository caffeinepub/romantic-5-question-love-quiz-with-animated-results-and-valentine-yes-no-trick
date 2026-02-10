import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import WelcomeScreen from './screens/WelcomeScreen';
import QuizScreen from './screens/QuizScreen';
import PerfectResultScreen from './screens/PerfectResultScreen';
import NonPerfectResultScreen from './screens/NonPerfectResultScreen';
import FinalCelebrationScreen from './screens/FinalCelebrationScreen';
import FloatingHeartsBackground from './components/FloatingHeartsBackground';
import AudioControls from './components/AudioControls';
import { Toaster } from '@/components/ui/sonner';
import './index.css';

type Screen = 'welcome' | 'quiz' | 'perfect-result' | 'non-perfect-result' | 'final-celebration';

const queryClient = new QueryClient();

function AppContent() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [score, setScore] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const transitionToScreen = (screen: Screen) => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentScreen(screen);
      setFadeOut(false);
    }, 300);
  };

  const handleStartQuiz = () => {
    transitionToScreen('quiz');
  };

  const handleQuizComplete = (finalScore: number) => {
    setScore(finalScore);
    if (finalScore === 5) {
      transitionToScreen('perfect-result');
    } else {
      transitionToScreen('non-perfect-result');
    }
  };

  const handleValentineAccepted = () => {
    transitionToScreen('final-celebration');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingHeartsBackground />
      <AudioControls />
      
      <div
        className={`transition-opacity duration-300 ${
          fadeOut ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {currentScreen === 'welcome' && (
          <WelcomeScreen onStart={handleStartQuiz} />
        )}
        {currentScreen === 'quiz' && (
          <QuizScreen onComplete={handleQuizComplete} />
        )}
        {currentScreen === 'perfect-result' && (
          <PerfectResultScreen score={score} />
        )}
        {currentScreen === 'non-perfect-result' && (
          <NonPerfectResultScreen
            score={score}
            onValentineAccepted={handleValentineAccepted}
          />
        )}
        {currentScreen === 'final-celebration' && (
          <FinalCelebrationScreen />
        )}
      </div>
      
      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <AppContent />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
