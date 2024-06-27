import { AuthButton } from '@/components/auth/Button'
import { signIn } from '@/auth'
import { ButtonProps } from '@/components/auth/Button'

export interface ServerBtnProps extends ButtonProps {
  page: string
}

const ServerBtn = ({ provider, page }: ServerBtnProps) => {
  const minProvider = provider.toLowerCase()
  return (
    <form
      action={async () => {
        'use server'
        await signIn(minProvider, { callbackUrl: '/dashboard' })
      }}
    >
      <AuthButton page={page} type='submit' provider={provider} />
    </form >
  )
}

export { ServerBtn }