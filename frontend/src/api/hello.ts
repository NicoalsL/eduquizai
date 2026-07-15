import isHelloResponse from "../guards/hello"
import type { HelloResponse } from "../type/hello"

 export default async function getHello(): Promise<HelloResponse> {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/hello/`)

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const data: unknown = await response.json()

  if (!isHelloResponse(data)) {
    throw new Error('Invalid response format')
  }

  return data
}