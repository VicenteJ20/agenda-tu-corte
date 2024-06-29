import { auth } from '@/auth'
import { SignOutBtn } from '@/components/SignOutBtn'
import { BarChartHome } from '@/components/dashboard/BarChartHome'
import { SectionHeader } from '@/components/dashboard/SectionHeader'
import { StatusCards } from '@/components/dashboard/StatusCards'
import msj from '@/messages/es.json'

const DashboardAdminPage = async () => {
  const session = await auth()
  const { stats, graphicStats } = msj.DashboardHomePage as any
  return (
    <section className='w-full relative h-[94vh] max-h-screen flex flex-col gap-10 justify-between'>
      <div>
        <SectionHeader title={stats.title} />
        <StatusCards />
      </div>
      <div className='flex flex-1 flex-col'>
        <SectionHeader title={graphicStats.title} description={graphicStats.description} />
        <BarChartHome />
      </div>
    </section>
  )
}

export default DashboardAdminPage;