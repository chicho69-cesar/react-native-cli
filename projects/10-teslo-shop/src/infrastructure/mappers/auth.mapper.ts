import { User } from '../../domain/entities/user'
import { AuthResponse } from '../interfaces/auth.responses'

export class AuthMapper {
  public static toEntity(data: AuthResponse): User {
    return {
      id: data.id,
      email: data.email,
      fullName: data.fullName,
      isActive: data.isActive,
      roles: data.roles,
    }
  }
}
