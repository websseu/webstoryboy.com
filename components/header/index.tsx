import Link from 'next/link'
import { MdStars } from 'react-icons/md'

import LeftButton from './left-button'
import RightButton from './right-button'
import Menu from './menu'

export default function Header() {
  return (
    <header className='border-b-2 border-black100 line'>
      <div className='flex items-center justify-center mx-4'>
        <LeftButton />
        <div className='md:my-2 my-1 bg-background md:px-4 px-2 font-poppins font-black'>
          <Link
            href={'/'}
            className='flex items-center md:text-8xl sm:text-7xl text-6xl uppercase'
          >
            <span className='mr-[-0.5vw] inline-block'>st</span>
            <MdStars className='animate-color dark:animate-colorDark' />
            <span className='ml-[-0.5vw] inline-block'>ry</span>
          </Link>
        </div>
        <RightButton />
      </div>
      <Menu />
    </header>
  )
}
