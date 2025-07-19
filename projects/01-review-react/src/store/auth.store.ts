import { create } from 'zustand'

interface AuthStore {
  status: 'authenticated' | 'unauthenticated' | 'checking'
  token?: string
  user?: {
    name: string
    email: string
  }

  login: (email: string, password: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  status: 'checking',
  token: undefined,
  user: undefined,

  login: (email) => {
    set({
      status: 'authenticated',
      token: 'ABCD1234',
      user: {
        name: 'John Doe',
        email: email
      }
    })
  },

  logout: () => {
    set({
      status: 'unauthenticated',
      token: undefined,
      user: undefined
    })
  }
}))
