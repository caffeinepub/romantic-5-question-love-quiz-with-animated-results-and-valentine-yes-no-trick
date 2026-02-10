export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    question: "When is our anniversary (don't check my status oops)?",
    options: [
      '14th Feb 2021',
      '25th Nov 2021',
      '26th Nov 2021',
      'You were born knowing me',
    ],
    correctAnswer: '25th Nov 2021',
  },
  {
    question: 'Where was our first date?',
    options: [
      'At the mall',
      'A movie theatre',
      'A cafe',
      'In my dreams',
    ],
    correctAnswer: 'A cafe',
  },
  {
    question: 'What was my first gift to you?',
    options: [
      'Chocolate',
      'Flowers',
      'Pendant',
      'My heart',
    ],
    correctAnswer: 'Pendant',
  },
  {
    question: 'What do you like about me the most?',
    options: [
      'My looks',
      'My brain',
      'My humour',
      'Everything',
    ],
    correctAnswer: 'Everything',
  },
  {
    question: 'When did I first start liking you?',
    options: [
      '3rd Semester',
      '1st Semester',
      '2nd Semester',
      'Every day since we met',
    ],
    correctAnswer: '1st Semester',
  },
];
