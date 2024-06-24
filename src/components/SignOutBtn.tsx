import { signOut } from '@/auth'

export function SignOutBtn() {
  return (
    <form
      action={async () => {
        'use server'
        await signOut()
      }}
    >
      <button type='submit' className='border border-zinc-300 px-4 py-2 rounded-md max-w-96 font-medium text-zinc-900 bg-zinc-100 hover:bg-zinc-200'>Sign Out</button>
    </form>
  )
}