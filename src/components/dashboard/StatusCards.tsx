'use client'
import { Card } from '@tremor/react'
import msj from '@/messages/es.json'

const StatusCards = () => {
  const { statusCards } = msj.ExampleDashboardHome as any

  const formatAmount = (value: number, currency: string, location: string) => {
    const formatedValue = new Intl.NumberFormat(location, {
      style: 'currency',
      currency: currency,
    })

    return formatedValue.format(value)

  }
  return (
    <section className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${statusCards.length} gap-6`}>
      {
        statusCards && statusCards.length > 0 && statusCards.map((card: any, index: number) => (
          <Card
            key={index}
            className='flex flex-col gap-3'
            decoration='top'
            decorationColor={card.decorationColor || 'red'}    
          >
            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">{card.title}</p>
            <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
              {card.currency ? formatAmount(card.value, card.currency, card.location) : card.value}
              <span className='pl-2 text-lg'>
                {
                  card.currency && card.currency
                }
              </span>
            </p>
          </Card>
        ))
      }
    </section>
  )
}

export { StatusCards }