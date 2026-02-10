import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { quizQuestions } from '@/data/quizContent';
import CelebrationOverlay from '@/components/CelebrationOverlay';
import SparkleBurst from '@/components/SparkleBurst';

interface QuizScreenProps {
  onComplete: (score: number) => void;
}

export default function QuizScreen({ onComplete }: QuizScreenProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [showSparkles, setShowSparkles] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  const handleAnswerSelect = (option: string) => {
    if (isAnswered) return;

    setSelectedAnswer(option);
    setIsAnswered(true);

    const isCorrect = option === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      setScore(score + 1);
      setShowCelebration(true);
      
      // Special sparkle for Q4 "Everything"
      if (currentQuestionIndex === 3 && option === 'Everything') {
        setShowSparkles(true);
        setTimeout(() => setShowSparkles(false), 2000);
      }

      setTimeout(() => {
        setShowCelebration(false);
        moveToNext();
      }, 1500);
    } else {
      setTimeout(() => {
        moveToNext();
      }, 1000);
    }
  };

  const moveToNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      const finalScore = score + (selectedAnswer === currentQuestion.correctAnswer ? 1 : 0);
      onComplete(finalScore);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative z-10">
      {showCelebration && <CelebrationOverlay />}
      {showSparkles && <SparkleBurst />}
      
      <Card className="max-w-2xl w-full p-6 md:p-10 space-y-8 backdrop-blur-sm bg-card/95 border-2 border-romantic-pink/20 shadow-2xl animate-fade-in">
        <div className="space-y-4">
          <div className="flex justify-between items-center text-sm text-muted-foreground font-medium">
            <span>Question {currentQuestionIndex + 1}/{quizQuestions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
            {currentQuestion.question}
          </h2>

          <div className="grid gap-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === option;
              const isCorrect = option === currentQuestion.correctAnswer;
              const showCorrect = isAnswered && isCorrect;
              const showIncorrect = isAnswered && isSelected && !isCorrect;

              return (
                <Button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  disabled={isAnswered}
                  variant="outline"
                  className={`
                    w-full p-6 text-left justify-start text-base md:text-lg font-medium
                    transition-all duration-300 transform hover:scale-[1.02]
                    ${!isAnswered && 'hover:bg-romantic-pink/10 hover:border-romantic-pink'}
                    ${showCorrect && 'bg-green-100 border-green-500 text-green-900'}
                    ${showIncorrect && 'bg-red-100 border-red-500 text-red-900'}
                    ${isSelected && !isAnswered && 'bg-romantic-pink/20 border-romantic-pink'}
                  `}
                >
                  <span className="mr-3 font-bold text-romantic-pink">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {option}
                </Button>
              );
            })}
          </div>
        </div>
      </Card>
    </div>
  );
}
