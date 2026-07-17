export type Quiz = {
    id: number,
    title: string,
    description: string,
    created_at: string,
    updated_at: string
}

export type CreateQuiz = {
    title: string,
    description: string
} 