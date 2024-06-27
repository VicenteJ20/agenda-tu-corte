import { auth } from "@/auth";
import { HeaderAuth } from "@/components/auth/Header";
import Image from "next/image";
import { redirect } from "next/navigation";
import msg from '@/messages/es.json'

async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()

  if (session) {
    redirect('/dashboard')
  }
  return (
    <>
      <main className='grid grid-cols-1 xl:grid-cols-2 gap-8 px-6 max-h-screen w-screen'>
        <section className='full relative py-6 max-h-screen'>
          <Image
            width={900}
            height={1200}
            src='/images/signin-banner.webp'
            alt='Sign in banner'
            className='w-full h-full rounded-lg object-cover object-center'  />
        </section>
        <section className='h-full relative py-20 flex flex-col gap-4 items-center justify-center'>
          <HeaderAuth />
          <div className=''>
            {children}
          </div>
          <footer className='text-center px-20 absolute bottom-6 text-zinc-700'>&copy; {msg.FooterBrand}</footer>
        </section>
      </main>
    </>
  )
}

export default AuthLayout