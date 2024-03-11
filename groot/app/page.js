import Banner from '@/Components/Banner'

const page = () => {
  return (
    <div className='px-12 banner h-screen py-24 aspect-auto'>
      <img src="leaf4.jpg" alt="" className='hidden lg:block fixed top-0 left-0 w-screen aspect-[16/9] z-[-1] object-cover object-top' />
      <Banner/>
    </div>
  )
}

export default page
