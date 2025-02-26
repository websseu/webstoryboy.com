'use client'

import { redirect } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { IUserSignIn } from '@/lib/types'
import { signInWithCredentials } from '@/lib/actions/user.actions'
import { zodResolver } from '@hookform/resolvers/zod'
import { isRedirectError } from 'next/dist/client/components/redirect-error'
import { UserSignInSchema } from '@/lib/validator'
import { toast } from 'sonner'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

const signInDefaultValues =
  process.env.NODE_ENV === 'development'
    ? {
        email: 'webstoryboy@naver.com',
        password: '123456',
      }
    : {
        email: '',
        password: '',
      }

export default function SignInForm() {
  const form = useForm<IUserSignIn>({
    resolver: zodResolver(UserSignInSchema),
    defaultValues: signInDefaultValues,
  })

  const onSubmit = async (data: IUserSignIn) => {
    try {
      await signInWithCredentials({
        email: data.email,
        password: data.password,
      })
      toast.success('🎉 환영합니다! 로그인이 완료되었습니다.')

      redirect('/')
    } catch (error) {
      if (isRedirectError(error)) {
        throw error
      }
      toast.error('이메일 또는 비밀번호가 일치하지 않습니다.')
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className='space-y-6'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='이메일을 입력해주세요!' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type='password'
                    placeholder='비밀번호를 입력하세요!'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className='text-center w-full'>
            <Button type='submit' variant='black' className='w-full py-6'>
              Sign In
            </Button>
          </div>
        </div>
      </form>
    </Form>
  )
}
