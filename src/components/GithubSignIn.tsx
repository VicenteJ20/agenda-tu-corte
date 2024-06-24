import { signIn } from '@/auth'
import { AuthButton } from './auth/Button'

export function GithubSignIn() {
  return (
    <form
      action={async () => {
        'use server'
        await signIn('github', { callbackUrl: '/dashboard' })
      }}
    >
      <AuthButton type='submit' provider='Github' />
    </form >
  )
}