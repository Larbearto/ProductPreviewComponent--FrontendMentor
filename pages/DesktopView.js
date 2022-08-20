import Image from 'next/image'
import Desktop from '../public/productDesktop.jpg'

function DesktopView() {
  return (
    <div>
      <Image
        src={Desktop}
        alt='desktopimage'
        width='300px'
        height='450px'
        className='md:rounded-bl-lg'
      />
    </div>
  )
}

export default DesktopView
