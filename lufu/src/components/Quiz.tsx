import React, { useState } from 'react';
import QuestionComponent from './Question';

import enigmas from '../texts/enigmas';
import './Quiz.css';

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  const handleUnlockNext = () => {
    setCurrentQuestion((prev) => prev + 1);
  };

  return (
    <div>
      {currentQuestion !== enigmas.length && (<div className="quiz-explanation">
        <p>
          Coucou petit chaton, j'espère que tu vas bien. <br/> 
          Je te propose une petite succession d'énigmes pour te
          rappeler quelques souvenirs. Pour chaque énigme, tu dois trouver la réponse et la saisir dans le champ
          prévu à cet effet. À l'issue de chaque énigme, tu pourras lire une petite explication ou passer à la question suivante. Bonne chance ! 😘
        </p>
      </div>)}
      {currentQuestion !== enigmas.length && enigmas.map((question: { title: string; question: string; answer: string; explanation: string; picture: string; }, index: number) => (
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
        <div className='quiz-completed'>
            <h1>Félicitations ! ✨</h1>
            <br></br>
            <p>
              Mon amour, tu as réussi à trouver toutes les réponses à ces énigmes. J'espère que cela t'a rappelé de bons souvenirs et que tu as pris du plaisir à les résoudre. <br/>
              <br></br>
              J'espère aussi que ce petit cadeau bricolé à la hâte te fera plaisir et a pu te rappeler, d'une certaine manière, les moments où je concoctais pour toi des petits cadeaux surprises personnalisés. Une attention qui te tenait à cœur et que j'ai malheureusement délaissée ces derniers temps. <br/>
              L'idée est là, même si le résultat n'est pas forcément à la hauteur de ce que j'escomptais et de ce que tu mériterais, mais je tenais à te montrer à quel point tu comptes pour moi et à quel point je tiens à toi à travers cette petite attention "manuelle". <br/><br/>
              Je voulais te montrer que ma passion pour toi ne faiblit jamais et que, même si je ne suis pas toujours à la hauteur, au quotidien, dans mes gestes ou dans mes démonstrations, je ferai toujours de mon mieux pour te rendre heureuse. <br/><br/>
              Me replonger dans tous ces souvenirs n'a fait que renforcer mon amour pour toi et me rappeler à quel point tu es importante pour moi, importante à ma vie. Je suis fier de voir la petite famille que nous construisons peu à peu, avec nos proches, nos amis et, surtout, nos deux petits bébés qui nous accompagnent au quotidien.
              Je souhaite que nous puissions continuer à construire notre vie ensemble, à nous soutenir et à nous aimer, pour toujours. Je souhaite être ton repère et ton soutien, dans les bons comme les mauvais moments, comme tu l'as été, l'es et le sera pour moi, au quotidien. Je souhaite que ces quelques souvenirs, qu'il a été difficile de sélectionner et de résumer en quelques mois, ne soient que les premiers d'une histoire qui ne se finira jamais. 
              Puissent nos souvenirs continuer à s'accumuler, à se multiplier et à se diversifier, pour toujours. Puissent nos souvenirs continuer à nous faire sourire, à nous faire rire, à nous faire pleurer, à nous faire grandir, à nous faire aimer, à nous faire vivre, à nous faire nous sentir vivants. <b>Ensemble.</b>
              <br/>
              <img className="result-picture" src={'/static/images/together.JPG'} alt="Lufu" />
              <br/>
              Sache que je t'aime plus que tout et que je serai toujours là pour toi, quoi qu'il arrive. Tu es la meilleure chose qui me soit arrivée.<br/>
              <br></br>
              Je t'aime, ma p'tite tête. ❤️
            </p>
        </div>
        )}
            <br></br>
    </div>
  );
};

export default Quiz;
