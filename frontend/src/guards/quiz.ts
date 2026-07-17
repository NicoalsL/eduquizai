 import type { Quiz } from "../type/quiz";

export default function isQuiz(data: unknown): data is Quiz {
    return (
        typeof data === 'object' &&
        data !== null &&
        typeof (data as Quiz).id === 'number' &&
        typeof (data as Quiz).title === 'string' &&
        typeof (data as Quiz).description === 'string' &&
        typeof (data as Quiz).created_at === 'string' &&
        typeof (data as Quiz).updated_at === 'string'
    );
}