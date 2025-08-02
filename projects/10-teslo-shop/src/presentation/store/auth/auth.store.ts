import { create } from 'zustand'

import { AuthActions } from '../../../actions/auth/auth'
import { StorageAdapter } from '../../../config/adapters/storage.adapter'
import { User } from '../../../domain/entities/user'
import { AuthStatus } from '../../../infrastructure/interfaces/auth.status'

export interface AuthState {
  status: AuthStatus
  token?: string
  user?: User

  login: (email: string, password: string) => Promise<boolean>
  checkStatus: () => Promise<void>
  logout: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
  status: 'checking',
  token: undefined,
  user: undefined,

  login: async (email, password) => {
    const response = await AuthActions.authLogin(email, password)

    if (!response) {
      set({
        status: 'unauthenticated',
        token: undefined,
        user: undefined
      })

      return false
    }

    await StorageAdapter.setItem('token', response.token)

    set({
      status: 'authenticated',
      token: response.token,
      user: response.user
    })

    return true
  },

  checkStatus: async () => {
    const response = await AuthActions.authCheckStatus()

    if (!response) {
      set({
        status: 'unauthenticated',
        token: undefined,
        user: undefined
      })

      return
    }

    await StorageAdapter.setItem('token', response.token)

    set({
      status: 'authenticated',
      token: response.token,
      user: response.user
    })
  },

  logout: async () => {
    await StorageAdapter.removeItem('token')

    set({
      status: 'unauthenticated',
      token: undefined,
      user: undefined
    })
  }
}))
