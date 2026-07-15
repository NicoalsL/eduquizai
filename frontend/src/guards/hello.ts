import type { HelloResponse } from "../type/hello";

export default function isHelloResponse(data: unknown): data is HelloResponse {
  return (
    typeof data === 'object' &&
    data !== null &&
    'message' in data &&
    typeof data.message === 'string'
  )
}