import useHello from './hooks/useHello'

function App() {

  const { data, isPending, isError, error } = useHello();
  if (isPending) {
    return <p>Chargement...</p>
  }

  if (isError) {
    return <p role="alert">Erreur : {error.message}</p>
  }

  return <h1>{data.message}</h1>
}

export default App