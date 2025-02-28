import { getPostById } from '@/lib/actions/post.actions'

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}) {
  const params = await props.params
  const post = await getPostById(params.slug)

  if (!post) {
    return { title: '해당 글을 찾을 수 없습니다.' }
  }
  return {
    title: post.title,
    description: post.description,
  }
}

export default async function PostDetailPage() {
  return <div>PostPage</div>
}
