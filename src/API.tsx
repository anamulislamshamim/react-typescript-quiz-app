/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { shuffleArray } from './utils';
export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
};

export type QuestionState = Question & { answers: string[] };

export const fetchQuizQuestions = async(amount: number, difficulty: Difficulty) => {
    const endPoint=`https://opentdb.com/api.php?amount=${ amount }&difficulty=${ difficulty }`;
    const data = await (await fetch(endPoint)).json();
    return data.results.map((question: Question) => (
        {
            ...question,
            answers: shuffleArray([...question.incorrect_answers,question.correct_answer])
        }
    ))
};