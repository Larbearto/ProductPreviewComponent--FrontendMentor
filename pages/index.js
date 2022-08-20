import Image from 'next/image'
import Cart from '../public/icon-cart.svg'
import DesktopView from './DesktopView'
import MobileView from './MobileView'

function Home() {
  return (
    <div className='bg-cream'>
      <main className='flex items-center justify-center min-w-min min-h-screen p-4'>
        {/* Product Card */}
        <div className='bg-white rounded-lg overflow-hidden max-w-sm md:max-w-[37.5rem] md:flex anim-zoomIn'>
          {/* Product Image */}
          <picture className='h-60 basis-2/4 block md:h-auto overflow-hidden'>
            <div className='hidden md:flex'>
              <DesktopView />
            </div>
            <div className='md:hidden'>
              <MobileView />
            </div>
          </picture>

          {/* Body Card */}
          <div className='p-6 basis-2/4 md:p-8 space-y-5 anim-fadeIn'>
            <div className='font-Montserrat tracking-[.31rem] text-Grayish text-xs opacity-80'>
              PERFUME
            </div>

            <p className='font-Fraunces font-bold text-3xl tracking-[.05rem] leading-8 text-Blackish'>
              Gabrielle Essense Eau <br />
              De Parfum
            </p>

            <p className='font-Montserrat text-sm text-DarkGrayBlue text-Grayish leading-6 opacity-80'>
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the house of CHANEL.
            </p>
            <div className='flex space-x-5 items-center'>
              <p className='font-Fraunces font-bold text-3xl text-Greenish tracking-wide '>
                $149.99
              </p>
              <p className='font-Montserrat opacity-80 font-normal text-xs line-through text-Grayish'>
                $169.99
              </p>
            </div>
            <button className='bg-Greenish w-full rounded-lg flex justify-center items-center space-x-3 '>
              <Cart />
              <p className='text-white font-Montserrat text-sm font-bold py-4'>
                Add to Cart
              </p>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
export default Home
