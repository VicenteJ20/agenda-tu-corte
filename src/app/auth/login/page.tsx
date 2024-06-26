import { SignInBtns } from "@/components/SignInBtns";
import { HeaderText } from "@/components/auth/HeaderText";

const LoginPage = () => {
  return (
    <section className=''>
      <HeaderText
        title='Inicia sesión o crea tu cuenta'
        description='Accede a tu cuenta o registrate sin costo y podrás acceder a increúbles beneficios.'
      />
      <SignInBtns />
    </section>
  )
}

export default LoginPage;