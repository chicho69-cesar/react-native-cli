import { HttpAdapter } from './http.adapter'

interface Options {
  baseUrl: string
  params: Record<string, string>
}

export class FetchAdapter implements HttpAdapter {
  private baseUrl: string
  private params: Record<string, string>

  constructor(options: Options) {
    this.baseUrl = options.baseUrl
    this.params = options.params
  }

  async get<T>(url: string, options?: Record<string, unknown>): Promise<T> {
    try {
      const queryParams = new URLSearchParams(this.params).toString()

      if (queryParams) {
        url += `?${queryParams}`
      }

      const response = await fetch(`${this.baseUrl}${url}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers as any,
        },
        ...options,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(`HTTP GET request failed with status ${response.status}: ${data.message || 'Unknown error'}`)
      }

      return data as T
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`HTTP GET request failed: ${error.message}`)
      }

      throw new Error('An unexpected error occurred during the HTTP GET request')
    }
  }
}
