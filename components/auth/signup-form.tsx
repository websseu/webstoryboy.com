'use client'

import { redirect } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { IUserSignUp } from '@/lib/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserSignUpSchema } from '@/lib/validator'
import { isRedirectError } from 'next/dist/client/components/redirect-error'
import { registerUser, signInWithCredentials } from '@/lib/actions/user.actions'
import { toast } from 'sonner'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

const signUpDefaultValues =
  process.env.NODE_ENV === 'development'
    ? {
        name: 'webstoryboy',
        email: 'webstoryboy@naver.com',
        password: '123456',
        confirmPassword: '123456',
      }
    : {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      }

export default function SignUpForm() {
  const form = useForm<IUserSignUp>({
    resolver: zodResolver(UserSignUpSchema),
    defaultValues: signUpDefaultValues,
  })

  const onSubmit = async (data: IUserSignUp) => {
    try {
      const res = await registerUser(data)

      if (!res.success) {
        let errorMessage = res.error
        if (res.error === 'email already exists') {
          errorMessage = '이메일이 이미 존재합니다.'
        }

        toast.error(String(errorMessage))
        return
      }
      toast.success('🎉 환영합니다! 이메일 인증해주세요!')

      await signInWithCredentials({
        email: data.email,
        password: data.password,
      })

      redirect('/')
    } catch (error) {
      if (isRedirectError(error)) {
        throw error
      }
      toast.error('이메일 또는 비밀번호가 정확하지 않습니다.')
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className='space-y-6'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder='이름을 입력해주세요!' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
          <FormField
            control={form.control}
            name='confirmPassword'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    type='password'
                    placeholder='확인 비밀번호를 입력하세요!'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='text-center w-full'>
            <Button type='submit' variant='black' className='w-full py-6'>
              Sign Up
            </Button>
          </div>
        </div>
      </form>
    </Form>
  )
}
