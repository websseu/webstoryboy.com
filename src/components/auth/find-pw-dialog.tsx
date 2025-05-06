'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog'
import FindPasswordForm from './find-pw'
import { Button } from '../ui/button'

export default function FindPasswordDialog() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button type='button' className='uline'>
          비밀번호 찾기
        </button>
      </DialogTrigger>
      <DialogContent className='max-w-md'>
        <DialogHeader>
          <DialogTitle className='font-bold text-lg'>비밀번호 찾기</DialogTitle>
          <DialogDescription>
            가입 시 사용한 이메일로 인증 후 비밀번호를 재설정합니다.
          </DialogDescription>
        </DialogHeader>
        <FindPasswordForm setOpen={setOpen} />
        <DialogFooter className='sm:justify-start'>
          <DialogClose asChild>
            <Button type='button' variant='secondary'>
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
