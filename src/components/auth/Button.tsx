interface ButtonProps {
  type: 'submit' | 'button';
  provider: 'Github' | 'Google';
}

const AuthButton = ({ type, provider }: ButtonProps) => {
  return (
    <button
      className='border border-zinc-400 w-full rounded-lg px-4 py-3 bg-black text-white font-medium' type={type}>
      Iniciar con {provider}
    </button>
  )
}

export { AuthButton }