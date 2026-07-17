import type { CreateQuiz, Quiz } from "../type/quiz";
import isQuiz from "../guards/quiz";

export default async function createQuiz(quiz:CreateQuiz):Promise<Quiz> {

    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/quizzes/create`, {

        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(quiz)
    });

    if (!response.ok) {
        throw new Error('Failed to create quiz');
    }

    const data: unknown = await response.json();

    if( !isQuiz(data)) {
        throw new Error('Invalid response format');
    }

    return data
}