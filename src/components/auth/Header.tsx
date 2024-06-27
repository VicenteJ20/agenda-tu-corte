import msj from '@/messages/es.json'
import Image from 'next/image'

const HeaderAuth = (dashboard?: any) => {
  return (
    <header className={`${dashboard ? 'text-white' : 'p-6 bg-white text-black absolute top-4 left-0'}`}>
      {
        msj.HeaderBrandAuth.imageLogo && msj.HeaderBrandAuth.imageLogo.src.length > 0 ?
          <Image
            width={500}
            height={500}
            src={msj.HeaderBrandAuth.imageLogo.src}
            alt={msj.HeaderBrandAuth.imageLogo.alt}
            className='w-14 h-14' />
          : (
            <div className='flex flex-row justify-center items-center gap-3'>
              <Image
                width={500}
                height={500}
                src={msj.HeaderBrandAuth.image && msj.HeaderBrandAuth.image}
                alt={msj.HeaderBrandAuth.alt && msj.HeaderBrandAuth.alt}
                className={`${dashboard ? 'invert w-12 h-10' : 'w-12 h-12 rounded-md object-cover'}`} />
              <h3 className='text-lg lg:text-xl font-semibold'>{msj.HeaderBrandAuth.title}</h3>
            </div>
          )
      }
    </header>
  )
}

export { HeaderAuth }