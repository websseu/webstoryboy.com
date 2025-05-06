import PostCard from '@/components/post/post-card'
import { getPostsForSubCategory } from '@/lib/actions/post.action'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '웹디자인개발기능사 2025',
}

export default async function Webdesign2025Page() {
  const { posts, totalCount } = await getPostsForSubCategory('webdesign2025')
  return (
    <section>
      <div className='page__title mb-1'>
        <h2>
          웹디자인개발기능사 2025<span className='small'>{totalCount}</span>
        </h2>
        <PostCard posts={posts ?? []} />
      </div>
    </section>
  )
}
