import { GithubSignIn } from "./GithubSignIn"

const SignInBtns = () => {

  return (
    <ul className='w-full'>
      <li className='w-full bg-white'>
        <GithubSignIn />
      </li>
    </ul>
  )
}

export { SignInBtns }