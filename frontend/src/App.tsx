import useCreateQuiz from "./hooks/useCreateQuiz";


function App() {

  const { mutate, isPending, isSuccess, isError, error, data } = useCreateQuiz();

  function handleCreateQuiz() {
    mutate({
      title: "Sample Quiz",
      description: "This is a sample quiz."
    })
  }

  return (
    <>
      <button onClick={handleCreateQuiz} disabled={isPending}>
        {isPending ? "Creating..." : "Create Quiz"}
      </button>

      {isSuccess && <div>Quiz created successfully! ID: {data?.id}</div>}
      {isError && <div>Error creating quiz: {error?.message}</div>}
    </>
  )

}
export default App