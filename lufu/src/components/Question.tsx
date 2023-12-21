// Question.tsx

import React, { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  TextField,
  Typography,
  Modal,
} from '@mui/material';
import Explanation from './Explanation';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './Question.css';

interface QuestionProps {
  title: string;
  question: string;
  answer: string;
  explanation: string;
  picture: string;
  isCompleted: boolean;
  isExpanded: boolean;
  onUnlockNext: () => void;
}

const Question: React.FC<QuestionProps> = ({
  title,
  question,
  answer,
  explanation,
  picture,
  isCompleted,
  isExpanded,
  onUnlockNext,
}) => {
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [openExplanation, setOpenExplanation] = useState<boolean>(false);

  const handleSubmit = () => {
    if (userAnswer.trim().toLocaleLowerCase() === answer.trim().toLocaleLowerCase()) {
      setShowExplanation(true);
    }
  };

  return (
    <div className='question-component'>
      <Accordion expanded={isExpanded}>
        <div className='summary'>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                <span className='title'>
                  {title} {isCompleted && "✓"}
                </span>
              </Typography>
            </AccordionSummary>
        </div>

        <AccordionDetails>
            <Typography style={{ padding: '10px', textAlign: 'center' }}>
                <span className='question'>{question}</span>
            </Typography>

            {!isCompleted && !showExplanation && (
                <>
                  <div className='answer'>
                    <TextField 
                      id='outlined-basic'
                      label='Ta réponse' 
                      variant='outlined'
                      fullWidth
                      size='small'
                      style={{ borderColor: '#8b1123' }}
                      onChange={(e) => setUserAnswer(e.target.value)}
                    />
                  </div>
                  <div className='answer-submission'>
                    <Button 
                      variant='contained' 
                      onClick={handleSubmit} 
                      fullWidth 
                      style={{ backgroundColor: '#8b1123', fontWeight: 'bold'}}
                    >
                        Valider
                    </Button>
                  </div>
                </>
            )}

            {showExplanation && (
                <>
                    <div className='answer-submission' style={{ paddingTop: '10px' }}>
                      <Button 
                        variant='outlined' 
                        onClick={() => setOpenExplanation(true)}
                        fullWidth 
                        style={{ fontWeight: 'bold', color: '#8b1123', borderColor: '#8b1123'}}
                      >
                        Voir les explications
                      </Button>
                    </div>
                    <div className='answer-submission' style={{ paddingTop: '10px' }}>
                      <Button 
                        variant='contained' 
                        onClick={onUnlockNext}
                        fullWidth 
                        style={{ backgroundColor: '#8b1123', fontWeight: 'bold'}}
                      >
                        Passer à l'énigme suivante
                      </Button>
                    </div>
                </>
            )}
          </AccordionDetails>
        </Accordion>

        <Modal
          open={openExplanation}
          onClose={() => setOpenExplanation(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Explanation 
            title={'Mystère résolu !'}
            description={explanation}
            imageLabel={title}
            image={picture}
          />
        </Modal>
    </div>
  );
};

export default Question;
