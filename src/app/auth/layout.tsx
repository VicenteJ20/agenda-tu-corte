import { auth } from "@/auth";
import { HeaderAuth } from "@/components/auth/Header";
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
      <HeaderAuth />
      <main className='flex flex-col gap-4 items-center justify-center min-h-screen w-screen'>
        {children}
      </main>
    </>
  )
}

export default AuthLayout