import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";


export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()
  return (
    <SessionProvider session={session}>
      <main>
        {children}
      </main>
    </SessionProvider>
  );
}
