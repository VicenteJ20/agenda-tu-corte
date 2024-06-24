interface HeaderTextProps {
  title: string;
  description?: string;
}

const HeaderText = ({ title, description }: HeaderTextProps) => {
  return (
    <header className='flex flex-col gap-2 pb-4 text-center'>
      <h1 className='text-2xl lg:text-2xl font-semibold'>{title}</h1>
      {
        description && <p className='text-base lg:text-lg text-zinc-700'>{description}</p>
      }
    </header>
  )
}

export { HeaderText }