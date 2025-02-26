import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { auth } from '@/auth'
import SignUpForm from '../../../components/auth/signup-form'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '회원가입',
}

export default async function SignUpPage(props: {
  searchParams: Promise<{
    callbackUrl: string
  }>
}) {
  const searchParams = await props.searchParams
  const { callbackUrl } = searchParams

  const session = await auth()
  if (session) {
    return redirect(callbackUrl || '/')
  }

  return (
    <section className='max-w-[500px]'>
      <div className='border border-black100 rounded-md p-10'>
        <h2 className='text-2xl text-center font-nexon mb-6'>회원가입</h2>

        <SignUpForm />

        {/* <p className='sperator line my-6'>
          <span>or</span>
        </p> */}

        <div className='text-sm text-black500 leading-5 text-center mt-6'>
          계정을 만들면 webstoryboy의{' '}
          <Link href='/page/conditions' className='uline'>
            이용약관
          </Link>
          과{' '}
          <Link href='/page/privacy' className='uline'>
            개인정보 처리방침
          </Link>
          에 뿅~ 동의하신 걸로 알게 됩니다! 😊 함께 멋진 여정을 시작해볼까요? 🚀{' '}
          <br />
          <p className='mt-1'>
            이미 계정이 있다고요?!🥳 그럼{' '}
            <Link
              className='uline'
              href={`/sign-in?callbackUrl=${callbackUrl}`}
            >
              로그인
            </Link>
            해주세요!
          </p>
        </div>
      </div>
    </section>
  )
}
