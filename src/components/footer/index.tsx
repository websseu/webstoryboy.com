import { APP_COPYRIGHT } from '@/lib/constants'
import { FaYoutube, FaGithub } from 'react-icons/fa6'

export default async function Footer() {
  return (
    <footer className='footer__container'>
      <div className='border-t font-nanum py-10'>
        <div className='flex gap-2 mb-2'>
          <a href='https://github.com/webstoryboy' target='_blank'>
            <FaGithub className='text-black dark:text-white' />
          </a>
          <a href='https://www.youtube.com/@webstoryboy' target='_blank'>
            <FaYoutube className='text-red-500 dark:text-white' />
          </a>
        </div>
        <h6 className='text-xl font-light font-poppins mb-2'>webstoryboy</h6>

        <p className='text-zinc-500 md:w-1/2 w-full leading-5 text-sm mb-2'>
          최신 웹 개발 지식을 공유하고, 실전에서 활용할 수 있는
          <br />
          강력한 개발 역량을 길러주는 공간입니다.
        </p>
        <p className='text-xs mt-1 text-zinc-500'>{APP_COPYRIGHT}</p>
      </div>
    </footer>
  )
}
