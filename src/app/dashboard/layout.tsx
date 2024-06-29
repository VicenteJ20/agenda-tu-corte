import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { DashboardNavbar } from "@/components/dashboard/Navbar";
import { HeaderBarTitle } from "@/components/dashboard/HeaderBarTitle";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()
  return (
    <SessionProvider session={session}>
      <main className='flex flex-row bg-zinc-100 relative'>
        <DashboardNavbar />
        <section className='w-full transitions-all duration-300 ease-in-out'>
          <HeaderBarTitle />
          <section className='p-6 w-full'>
            {children}
          </section>
        </section>
      </main>
    </SessionProvider>
  );
}
