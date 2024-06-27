import { ServerBtn } from "./auth/ServerBtn"

const SignInBtns = ({ page }: { page: string }) => {

  return (
    <ul className='w-full flex flex-col gap-4 mt-4'>
      <li>
          <ServerBtn page={page} provider='Github' type='submit' />
      </li>
      <li>
          <ServerBtn page={page} provider='Google' type='submit' />
      </li>
    </ul>
  )
}

export { SignInBtns }