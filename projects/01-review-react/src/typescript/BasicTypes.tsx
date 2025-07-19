export default function BasicTypes() {
  const name: string = 'Cesar'
  const age: number = 23
  const isActive: boolean = true

  const powers: string[] = ['React', 'Angular', 'Vue', 'Svelte']

  return (
    <>
      <h3>Tipos básicos</h3>

      {name} {age} {isActive ? 'true' : 'false'}
      <br />

      {powers.join(', ')}
    </>
  )
}
