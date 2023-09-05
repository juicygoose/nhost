'use client'

import { signIn } from '@actions'
import Input from '@components/input'
import SubmitButton from '@components/submit-button'
import { useState } from 'react'

export default function SignIn() {
  const [error, setError] = useState('')

  async function handleSignIn(formData: FormData) {
    const response = await signIn(formData)

    if (response?.error) {
      setError(response.error)
    }
  }

  return (
    <>
      <h1 className="text-2xl font-semibold text-center">Sign In</h1>

      {error && <p className="mt-3 font-semibold text-center text-red-500">{error}</p>}

      <form className="space-y-5" action={handleSignIn}>
        <Input label="Email" id="email" name="email" type="email" required />

        <Input label="Password" id="password" name="password" type="password" required />

        <SubmitButton type="submit">Sign In</SubmitButton>
      </form>
    </>
  )
}
