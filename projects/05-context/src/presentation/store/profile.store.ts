import { create } from 'zustand'

interface ProfileState {
  name: string
  email: string

  changeProfile: (name: string, email: string) => void
}

export const useProfileStore = create<ProfileState>((set, get) => ({
  name: 'Cesar Villalobos Olmos',
  email: 'cesar-09a@hotmail.com',

  changeProfile: (name: string, email: string) => {
    console.log('changeProfile', get().name, get().email)

    set({
      name,
      email
    })
  }
}))
