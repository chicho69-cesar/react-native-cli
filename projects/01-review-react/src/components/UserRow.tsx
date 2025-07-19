import type { User } from '../interfaces/reqres.interface'

interface UserRowProps {
  user: User
}

export default function UserRow({ user }: UserRowProps) {
  const { avatar, first_name, last_name, email } = user

  return (
    <tr>
      <td>
        <img
          style={{ width: '50px' }}
          src={avatar}
          alt="User avatar"
        />
      </td>

      <td>{first_name} {last_name}</td>
      <td>{email} </td>
    </tr>
  )
}
