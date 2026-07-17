import { useMutation } from "@tanstack/react-query";
import createQuiz  from "../api/quiz";

export default function useCreateQuiz() {
    return useMutation({
        mutationFn: createQuiz
    });
}