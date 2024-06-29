'use client'

import { BarChart } from '@tremor/react';
import msj from '@/messages/es.json'



const BarChartHome = () => {
  const { chartdata } = msj.ExampleDashboardHome as any
  return (
    <BarChart
    className='flex-1 bg-white rounded-xl border border-zinc-200 shadow-lg py-4 px-2' 
        
      data={chartdata}
      index='name'
      categories={['Cortes realizados']}
      colors={['teal', 'cyan']}
      showAnimation={true}
      showTooltip={true}
      showLegend={true}
      tickGap={5}
      valueFormatter={(value) => value.toLocaleString()}
      onValueChange={(value) => console.log(value)}
    />
  )
}

export { BarChartHome }