import { useAuthStore } from '../../store/auth/auth.store'

export default function useAuth() {
  const status = useAuthStore((state) => state.status)
  const token = useAuthStore((state) => state.token)
  const user = useAuthStore((state) => state.user)
  const login = useAuthStore((state) => state.login)
  const checkStatus = useAuthStore((state) => state.checkStatus)
  const logout = useAuthStore((state) => state.logout)

  return {
    status,
    token,
    user,
    login,
    checkStatus,
    logout,
  }
}
