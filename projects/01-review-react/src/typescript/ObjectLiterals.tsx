interface Person {
  firstName: string
  lastName: string
  age: number
  address: Address
  isAlive?: boolean
}

interface Address {
  country: string
  houseNo: number
}

export default function ObjectLiterals() {
  const person: Person = {
    age: 23,
    firstName: 'Cesar',
    lastName: 'Villalobos Olmos',
    address: {
      country: 'México',
      houseNo: 2111
    }
  }

  return (
    <>
      <h3>Objetos literales</h3>

      <pre>
        {JSON.stringify(person, null, 2)}
      </pre>
    </>
  )
}
