import { APP_COPYRIGHT, APP_NAME } from '@/lib/constants'

export default async function Footer() {
  return (
    <footer className='footer__container'>
      <div className='border-t border-t-black500 py-10'>
        <h6 className='text-xl font-fold mb-2'>{APP_NAME}</h6>
        <p className='md:w-1/3 w-full text-black600 leading-5 text-sm mb-2 break-keep'>
          최신 웹 개발 지식을 공유하고, 실전에서 활용할 수 있는 강력한 개발
          역량을 길러주는 공간입니다.
        </p>
        <p className='text-xs mt-1 text-black700'>{APP_COPYRIGHT}</p>
      </div>
    </footer>
  )
}
