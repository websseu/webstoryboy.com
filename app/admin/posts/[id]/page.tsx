import { Metadata } from 'next'
import { getPostById } from '@/lib/actions/post.actions'
import { notFound } from 'next/navigation'
import PostUpdate from '@/components/post/post-update'

export const metadata: Metadata = {
  title: '글 수정하기',
}

type UpdatePostProps = {
  params: Promise<{
    id: string
  }>
}

export default async function UpdatePostPage(props: UpdatePostProps) {
  const params = await props.params
  const { id } = params

  const post = await getPostById(id)
  if (!post) notFound()

  return (
    <section className='max-w-6xl mx-auto'>
      <h2 className='text-xl text-center font-nexon mb-12'>글 수정하기</h2>
      <PostUpdate post={post} postId={post._id} />
    </section>
  )
}
