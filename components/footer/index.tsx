import { APP_COPYRIGHT, APP_NAME } from '@/lib/constants'
import Link from 'next/link'

export default async function Footer() {
  return (
    <footer className='max-w-6xl mx-auto mt-32 grid grid-cols-[1.5fr,2fr,1fr] gap-10 border-t border-t-black700 py-10'>
      <div>
        <h5 className='text-xl font-fold mb-2'>{APP_NAME}</h5>
        <p className='w-full text-black600 leading-5 text-sm mb-2 break-keep'>
          최신 웹 개발 지식을 공유하고, 실전에서 활용할 수 있는 강력한 개발
          역량을 길러주는 공간입니다.
        </p>
        <p className='text-sm mt-1 text-black700'>{APP_COPYRIGHT}</p>
      </div>

      <div className='grid grid-cols-2 gap-4 gap-y-8'>
        <div>
          <h5 className='mb-2'>Products</h5>
          <ul className='flex flex-col'>
            <li className='text-black700 leading-5 text-sm mb-1'>
              <Link href='/' className=''>
                UI/UX CSS Design
              </Link>
            </li>
            <li className='text-black700 leading-5 text-sm mb-1'>
              <Link href='/' className=''>
                GSAP Interactive Animation
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className='mb-2'>Products</h5>
          <ul className='flex flex-col'>
            <li className='text-black700 leading-5 text-sm mb-1'>
              <Link href='/' className=''>
                웹디자인개발기능사 2025
              </Link>
            </li>
            <li className='text-black700 leading-5 text-sm mb-1'>
              <Link href='/' className=''>
                리액트를 위한 자바스크립트 기초
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className='mb-2'>Inspiration</h5>
          <ul className='flex flex-col'>
            <li className='text-black700 leading-5 text-sm mb-1'>
              <Link href='/' className=''>
                SITE 인스퍼레이션
              </Link>
            </li>
            <li className='text-black700 leading-5 text-sm mb-1'>
              <Link href='/' className=''>
                TUTORIAL 인스퍼레이션
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className='mb-2'>Reference</h5>
          <ul className='flex flex-col'>
            <li className='text-black700 leading-5 text-sm mb-1'>
              <Link href='/' className=''>
                HTML 레퍼런스
              </Link>
            </li>
            <li className='text-black700 leading-5 text-sm mb-1'>
              <Link href='/' className=''>
                CSS 레퍼런스
              </Link>
            </li>
            <li className='text-black700 leading-5 text-sm mb-1'>
              <Link href='/' className=''>
                JAVASCRIPT 레퍼런스
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h5 className='mb-2'>Reach us</h5>
        <ul className='flex flex-col'>
          <li className='text-black700 leading-5 text-sm mb-1'>
            <Link href='/' className=''>
              웹스토리보이
            </Link>
          </li>
          <li className='text-black700 leading-5 text-sm mb-1'>
            <Link href='/' className=''>
              이용 약관
            </Link>
          </li>
          <li className='text-black700 leading-5 text-sm mb-1'>
            <Link href='/' className=''>
              개인 정보 처리 방침
            </Link>
          </li>
          <li className='text-black700 leading-5 text-sm mb-1'>
            <Link href='/' className=''>
              문의하기
            </Link>
          </li>
          <li className='text-black700 leading-5 text-sm mb-1'>
            <Link href='/' className=''>
              버그 알려주기
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
