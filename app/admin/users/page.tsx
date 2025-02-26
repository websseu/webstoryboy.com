import Image from 'next/image'
import { Metadata } from 'next'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { formatDate } from '@/lib/utils'
import { deleteUser, getAllUsersPages } from '@/lib/actions/user.actions'
import { IUser } from '@/lib/db/models/user.model'

import DeleteDialog from '@/components/dialog/delete-dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from '@/components/ui/table'
import Pagination from '@/components/page/pagination'

export const metadata: Metadata = {
  title: '회원 목록',
}

export default async function AdminUserPage(props: {
  searchParams: Promise<{ page: string }>
}) {
  const searchParams = await props.searchParams
  const session = await auth()

  if (!session || session.user.role !== 'Admin') {
    redirect('/')
  }

  const page = Number(searchParams.page) || 1
  const { users, totalUsers, totalPages, currentPage } = await getAllUsersPages(
    {
      page,
      limit: 10,
    }
  )

  console.log(users[0])

  return (
    <section>
      <Table className='border-b'>
        <TableCaption className='caption-top text-zinc-800 text-xl font-nexon mb-4 mt-0'>
          회원 목록{' '}
          <span className='text-[10px] text-zinc-500'>{totalUsers}</span>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>이름</TableHead>
            <TableHead>이메일</TableHead>
            <TableHead>권한</TableHead>
            <TableHead>날짜</TableHead>
            <TableHead className='w-[100px]'>수정</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className='text-center py-4'>
                회원이 없습니다.
              </TableCell>
            </TableRow>
          ) : (
            users.map((user: IUser) => (
              <TableRow key={user._id}>
                <TableCell className='text-left'>
                  <Image
                    src={user.image ? `${user.image}` : '/face/default.jpg'}
                    alt={user.name}
                    width={24}
                    height={24}
                    className='rounded-full inline mr-1.5'
                  />
                  <span>{user.name}</span>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{formatDate(user.createdAt)}</TableCell>
                <TableCell className='text-right flex justify-end gap-1'>
                  <Button size='sm' variant='black'>
                    수정
                  </Button>
                  <DeleteDialog id={user._id.toString()} action={deleteUser} />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        baseUrl='/admin/users'
      />
    </section>
  )
}
