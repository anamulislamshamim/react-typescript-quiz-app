import React from 'react'
import { AnswerObject } from '../App';
import { ButtonWrapper, Wrapper } from '../components/QuestionCard.styles';

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions
}) => {
    return (
        <Wrapper>
            <p className='number'>
                Question: { questionNr } / { totalQuestions }
            </p>
            <p dangerouslySetInnerHTML={{__html: question}} />
            <div>
                {
                    answers.map((answer, idx) => (
                        <ButtonWrapper 
                        correct={ userAnswer?.correctAnswer === answer }
                        userClicked = { userAnswer?.answer === answer }
                        key={idx}>
                            {/* You can use { userAnswer ? true: false } instead of !! */}
                            <button disabled={ !!userAnswer } value={ answer } onClick={ callback }>
                                <span dangerouslySetInnerHTML={{__html: answer}} />
                            </button>
                        </ButtonWrapper>
                    ))
                }
            </div>
        </Wrapper>
    )
}

export default QuestionCard