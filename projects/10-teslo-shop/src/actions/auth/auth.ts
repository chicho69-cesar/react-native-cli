import tesloApi from '../../config/api/teslo-api'
import { User } from '../../domain/entities/user'
import { AuthResponse } from '../../infrastructure/interfaces/auth.responses'
import { AuthMapper } from '../../infrastructure/mappers/auth.mapper'

export class AuthActions {
  private static returnUserToken(data: AuthResponse) {
    const user: User = AuthMapper.toEntity(data)

    return {
      user,
      token: data.token,
    }
  }

  public static async authLogin(email: string, password: string) {
    try {
      const { data } = await tesloApi.post<AuthResponse>('/auth/login', {
        email: email.toLowerCase().trim(),
        password,
      })

      return AuthActions.returnUserToken(data)
    } catch (error) {
      console.error('Error during login:', error)
      return null
    }
  }

  public static async authCheckStatus() {
    try {
      const { data } = await tesloApi.get<AuthResponse>('/auth/check-status')
      return AuthActions.returnUserToken(data)
    } catch (error) {
      console.error('Error checking auth status:', error)
      return null
    }
  }
}
