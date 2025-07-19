import { useForm } from 'react-hook-form'

interface FormInputs {
  email: string
  password: string
}

export default function FormsPage() {
  const { register, handleSubmit, formState, watch } = useForm<FormInputs>({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = (data: FormInputs) => {
    console.log('Form submitted:', data)
  }

  console.log('Email:', watch('email'))
  console.log('Password:', watch('password'))

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Formularios</h3>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input type='text' placeholder='Email' {...register('email', { required: true })} />
          <input type='text' placeholder='password' {...register('password')} />

          <button type='submit'>Ingresar</button>
        </div>
      </form>

      <pre>
        {JSON.stringify(formState, null, 2)}
      </pre>
    </>
  )
}
