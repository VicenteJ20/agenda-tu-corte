import { auth } from '@/auth'
import { SignOutBtn } from '@/components/SignOutBtn'
import Image from 'next/image'

const DashboardAdminPage = async () => {
  const session = await auth()
  return (
    <section>
      ESTE ES EL DASHBOARD PROTEGIDO DE LOS ADMINISTRADORES Y COLABORADORES.
      {
        session && session.user && (
          <ul>
            <li>
              DATOS DE LA SESIÓN
            </li>
            <li>
              EMAIL: {session.user.email}
            </li>
            <li>
              NOMBRE: {session.user.name}
            </li>
            <li>
              FOTO: <Image width={100} height={100} src={session.user.image || ''} alt={session.user.name || ''} />
            </li>
          </ul>
        )
      }
      <SignOutBtn />
    </section>
  )
}

export default DashboardAdminPage;