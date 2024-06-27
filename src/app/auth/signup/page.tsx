import { HeaderText } from "@/components/auth/HeaderText";
import { SignInBtns } from "@/components/SignInBtns";
import msg from '@/messages/es.json'

const SignUpPage = () => {
  return (
    <section className='px-12'>
      <HeaderText
        title={msg.SignupPage.title}
        description={msg.SignupPage.subtitle}
      />
      <SignInBtns page='register' />
    </section>
  )
}

export default SignUpPage;