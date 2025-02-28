import { Metadata } from 'next'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import { deletePost, getAllPostsPage } from '@/lib/actions/post.actions'
import { formatDate } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { IPost } from '@/lib/db/models/post.model'

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
import Link from 'next/link'
import Pagination from '@/components/page/pagination'

export const metadata: Metadata = {
  title: '글 목록',
}

export default async function AdminPostPage(props: {
  searchParams: Promise<{ page: string }>
}) {
  const searchParams = await props.searchParams
  const session = await auth()

  if (!session || session.user.role !== 'Admin') {
    redirect('/')
  }

  const page = Number(searchParams.page) || 1
  const { posts, totalPosts, totalPages, currentPage } = await getAllPostsPage({
    page,
    limit: 10,
  })

  return (
    <section>
      <Table className='border-b'>
        <TableCaption className='caption-top text-zinc-800 text-xl font-nexon mb-4 mt-0'>
          글 목록{' '}
          <span className='text-[10px] text-zinc-500'>{totalPosts}</span>
        </TableCaption>
        <TableHeader>
          <TableRow className='border-none'>
            <TableHead>번호</TableHead>
            <TableHead>타이틀</TableHead>
            <TableHead>카테고리</TableHead>
            <TableHead>서브카테고리</TableHead>
            <TableHead>발행</TableHead>
            <TableHead>날짜</TableHead>
            <TableHead className='w-[100px]'>수정</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className='text-center py-4'>
                게시글이 없습니다.
              </TableCell>
            </TableRow>
          ) : (
            posts.map((post: IPost, index: number) => (
              <TableRow key={post._id}>
                <TableCell className='w-[60px]'>
                  {(page - 1) * 10 + index + 1}
                </TableCell>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.category}</TableCell>
                <TableCell>{post.subCategory}</TableCell>
                <TableCell>{post.isPublished ? '공개' : '비공개'}</TableCell>
                <TableCell>{formatDate(post.createdAt)}</TableCell>
                <TableCell className='text-right flex justify-end gap-1'>
                  <Button size='sm' variant='black'>
                    <Link href={`/admin/posts/${post._id}`}>수정</Link>
                  </Button>
                  <DeleteDialog id={post._id.toString()} action={deletePost} />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        baseUrl='/admin/posts'
      />
    </section>
  )
}
