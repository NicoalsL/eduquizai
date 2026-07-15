import { useQuery } from '@tanstack/react-query'

type HelloResponse = {
  message: string
}

function isHelloResponse(data: unknown): data is HelloResponse {
  return (
    typeof data === 'object' &&
    data !== null &&
    'message' in data &&
    typeof data.message === 'string'
  )
}

async function getHello(): Promise<HelloResponse> {
  const response = await fetch('http://localhost:8000/api/hello/')

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const data: unknown = await response.json()

  if (!isHelloResponse(data)) {
    throw new Error('Invalid response format')
  }

  return data
}

function App() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['hello'],
    queryFn: getHello,
  })

  if (isPending) {
    return <p>Chargement...</p>
  }

  if (isError) {
    return <p role="alert">Erreur : {error.message}</p>
  }

  return <h1>{data.message}</h1>
}


export default App