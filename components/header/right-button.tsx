import Image from 'next/image'
import Link from 'next/link'
import { auth } from '@/auth'
import { Button, buttonVariants } from '@/components/ui/button'
import { SignOut } from '@/lib/actions/user.actions'
import { cn } from '@/lib/utils'
import { Gi3dGlasses } from 'react-icons/gi'
import { LogOut, BadgeCheck, Bell, FolderLock, NotebookPen } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'

export default async function RightButton() {
  const session = await auth()

  return (
    <div className='absolute right-4'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {session ? (
            // 로그인 상태일 때
            <div className='w-full circle py-2 px-2 pr-4 h-11'>
              <div>
                <Image
                  src={session.user.image || '/face/default.jpg'}
                  alt={session.user.name || 'Profile'}
                  width={30}
                  height={30}
                  className='rounded-full w-8 h-8 object-cover mr-2'
                />
              </div>
              <div className='flex flex-col text-xs text-left'>
                <span>Hello, {session.user.name}</span>
                <span className='font-semibold'>Welcome</span>
              </div>
            </div>
          ) : (
            // 비로그인 상태일 때
            <div className='circle'>
              <Gi3dGlasses size='20' />
            </div>
          )}
        </DropdownMenuTrigger>
        {session ? (
          <DropdownMenuContent
            className='w-56 mr-0 mt-2 bg-background'
            align='end'
            forceMount
          >
            <DropdownMenuLabel className='font-normal'>
              <div className='flex flex-col space-y-1'>
                <p className='text-sm my-1 font-bold leading-none'>
                  {session.user.name}
                </p>
                <p className='text-[10px] leading-none text-black700'>
                  {session.user.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <BadgeCheck className='h-4 w-4 text-zinc-500' />
              계정관리
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Bell className='h-4 w-4 text-zinc-500' />
              알림
            </DropdownMenuItem>
            {session.user.role === 'Admin' && (
              <>
                <Link href='/admin/overview'>
                  <DropdownMenuItem>
                    <FolderLock className='h-4 w-4 text-zinc-500' />
                    관리자
                  </DropdownMenuItem>
                </Link>
                <Link href='/admin/posts/create'>
                  <DropdownMenuItem>
                    <NotebookPen className='h-4 w-4 text-zinc-500' />
                    글쓰기
                  </DropdownMenuItem>
                </Link>
              </>
            )}
            <DropdownMenuSeparator />
            <DropdownMenuItem className='m-0 py-0'>
              <form action={SignOut} className='w-full'>
                <Button variant='ghost' size='lg' className='p-0 m-0'>
                  <LogOut className='h-4 w-4 text-zinc-500' /> 로그아웃
                </Button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        ) : (
          <DropdownMenuContent
            className='w-56 mt-1 bg-background'
            align='end'
            forceMount
          >
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link
                  className={cn(
                    buttonVariants(),
                    'w-full bg-black200 text-white100'
                  )}
                  href='/sign-in'
                >
                  로그인
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuLabel>
              <div className='font-normal text-center text-black700 mb-1'>
                반가워요! 오늘도 멋진 하루 😊 <br />
                아직 계정이 없으신가요? <br />
                <Link href='/sign-up' className='underline underline-offset-4'>
                  회원가입
                </Link>
                하고 시작하세요! 🚀
              </div>
            </DropdownMenuLabel>
          </DropdownMenuContent>
        )}
      </DropdownMenu>
    </div>
  )
}
