import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPostById } from '@/lib/actions/post.action'
import PostUpdate from '@/components/post/post-update'

export const metadata: Metadata = {
  title: '글 수정하기',
}
export default async function UpdatePostPage(props: {
  params: Promise<{ id: string }>
  searchParams: { page?: string; limit?: string }
}) {
  const params = await props.params
  const { id } = params
  const { success, post } = await getPostById(id)

  if (!success || !post) {
    notFound()
  }

  const plainPost = JSON.parse(JSON.stringify(post))
  const page = props.searchParams.page ?? '1'
  const limit = props.searchParams.limit ?? '10'

  return (
    <section className='max-w-6xl mx-auto'>
      <h2 className='text-xl text-center font-nexon mb-12'>글 수정하기</h2>
      <PostUpdate
        post={plainPost}
        postId={plainPost._id}
        page={page}
        limit={limit}
      />
    </section>
  )
}
