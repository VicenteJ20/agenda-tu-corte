import { auth } from "@/auth";
import { HeaderAuth } from "@/components/auth/Header";
import Image from "next/image";
import { redirect } from "next/navigation";

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
      <main className='grid grid-cols-1 xl:grid-cols-2 gap-8 p-8 min-h-screen w-screen'>
        <div className='hidden xl:block h-[95vh] bg-red-500 rounded-2xl'>
          <Image src='/images/signin-banner.webp' alt='Sign in banner' width={600} height={800} className='rounded-2xl w-full h-full object-cover' />
        </div>
        <section>
          <HeaderAuth />
          {children}
        </section>
      </main>
    </>
  )
}

export default AuthLayout