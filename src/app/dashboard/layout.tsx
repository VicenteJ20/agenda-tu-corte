import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { DashboardNavbar } from "@/components/dashboard/Navbar";


export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()
  return (
    <SessionProvider session={session}>
      <main className=''>
        <DashboardNavbar />
        {children}
      </main>
    </SessionProvider>
  );
}
