import useUsers from '../hooks/useUsers'
import UserRow from './UserRow'

export default function UsersPage() {
  const { users, nextPage, previousPage } = useUsers()

  return (
    <>
      <h3>Usuarios:</h3>

      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>

      <div>
        <button onClick={previousPage}>Prev</button>
        <button onClick={nextPage}>Next</button>
      </div>
    </>
  )
}
