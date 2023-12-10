// Quiz.tsx

import React, { useState } from 'react';
import QuestionComponent from './Question';

import enigmas from '../texts/enigmas';

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  const handleUnlockNext = () => {
    setCurrentQuestion((prev) => prev + 1);
  };

  return (
    <div>
      {enigmas.map((question: { title: string; question: string; answer: string; explanation: string; picture: string; }, index: number) => (
        <QuestionComponent
          key={index}
          title={question.title}
          question={question.question}
          answer={question.answer}
          explanation={question.explanation}
          picture={question.picture}
          isCompleted={index < currentQuestion}
          isExpanded={index === currentQuestion}
          onUnlockNext={handleUnlockNext}
        />
      ))}
      {currentQuestion === enigmas.length && (
        <div>
            <p>Quiz terminé</p>
        </div>
        )}
    </div>
  );
};

export default Quiz;
