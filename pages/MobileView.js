import Image from 'next/image'
import ImageMobile from '../public/productMobile.jpg'

function MobileView() {
  return (
    <div>
      <Image
        src={ImageMobile}
        height='238px'
        width='345px'
        alt='mobileimage'
        className='rounded-t-lg aspect-auto'
      />
      <div></div>
    </div>
  )
}

export default MobileView
