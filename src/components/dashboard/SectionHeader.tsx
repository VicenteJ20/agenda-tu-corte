interface SectionHeaderProps {
  title: string;
  description?: string;
}

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <header className='mb-4 flex flex-col gap-2'>
      <h2 className='text-xl lg:text-2xl font-semibold'>{title}</h2>
      {
        description &&
        (
          <p className='text-base text-zinc-600'>{description}</p>
        )
      }
    </header>
  )
}

export { SectionHeader }