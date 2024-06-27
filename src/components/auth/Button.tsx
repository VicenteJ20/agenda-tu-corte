import { RiGithubFill, RiGoogleFill } from "@remixicon/react";
import { ServerBtnProps } from "./ServerBtn";

export interface ButtonProps {
  type: 'submit' | 'button';
  provider: 'Github' | 'Google';
}


// En caso de agregar nuevos proveedores, se deben agregar los iconos acá al igual que los provider.
const icons = {
  'Github': <RiGithubFill className='inline-block mr-2'/>,
  'Google': <RiGoogleFill className='inline-block mr-2'/>
}

const AuthButton = ({ type, provider, page }: ServerBtnProps) => {
  return (
    <button
      className='border border-zinc-300 px-4 py-4 rounded-lg w-full flex flex-row items-center justify-center transition-all duration-300 hover:bg-zinc-800 hover:text-zinc-300 select-none' type={type} title={`Iniciar sesión con ${provider}`}>
      {icons[provider]}
      {page && page === 'register' ? 'Registrarse con' : 'Iniciar con'} {provider}
    </button>
  )
}

export { AuthButton }