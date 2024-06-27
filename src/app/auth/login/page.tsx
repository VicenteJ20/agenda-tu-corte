import { SignInBtns } from "@/components/SignInBtns";
import { HeaderText } from "@/components/auth/HeaderText";
import msg from '@/messages/es.json'

const LoginPage = () => {
  return (
    <section className='px-12'>
      <HeaderText
        title={msg.LoginPage.title}
        description={msg.LoginPage.subtitle}
      />
      <SignInBtns page='login' />
    </section>
  )
}

export default LoginPage;