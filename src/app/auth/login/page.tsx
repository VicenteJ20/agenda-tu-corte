import { SignInBtns } from "@/components/SignInBtns";
import { HeaderText } from "@/components/auth/HeaderText";

const LoginPage = () => {
  return (
    <section className='max-w-[32rem] bg-white lg:border border-zinc-200 rounded-lg px-8 md:p-6 lg:shadow-lg '>
      <HeaderText
        title='Inicia sesión o crea tu cuenta'
        description='Accede a tu cuenta o registrate sin costo y podrás acceder a increúbles beneficios.'
      />
      <SignInBtns />
    </section>
  )
}

export default LoginPage;