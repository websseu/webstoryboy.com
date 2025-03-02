import Image from 'next/image'
import Link from 'next/link'
import { getPostById } from '@/lib/actions/post.actions'
import { formatPostDate } from '@/lib/utils'
import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'
import ReactMarkdown from 'react-markdown'

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

export default async function PostDetailPage(props: {
  params: Promise<{ slug: string }>
}) {
  const params = await props.params
  const post = await getPostById(params.slug)

  if (!post) notFound()

  // 동적으로 컴포넌트 로드
  let PostComponent = null

  if (!post.contents || post.contents.trim() === '') {
    if (post.components) {
      try {
        const DynamicComponent = dynamic(
          () =>
            import(
              `@/blog/${post.category}/${post.subCategory}/${post.components}`
            ),
          {
            loading: () => <p>컴포넌트 로딩 중...</p>,
            ssr: true,
          }
        )
        PostComponent = <DynamicComponent />
      } catch (error) {
        console.error('컴포넌트 로드 실패:', error)
        PostComponent = <p>컴포넌트를 찾을 수 없습니다.</p>
      }
    }
  }

  return (
    <>
      <section className='post__page'>
        <h2>{post.title}</h2>
        <p>{formatPostDate(post.createdAt)}</p>
        <div className='tag'>
          {post.tags.length > 0 ? (
            post.tags.map((tag: string) => (
              <Link key={tag} href={`/tags/${tag}`}>
                {tag}
              </Link>
            ))
          ) : (
            <span className='text-gray-400'>태그 없음</span>
          )}
        </div>
        <div className='img'>
          <Image
            src={`/${post.category}/${post.subCategory}/${post.images}`}
            alt={`${post.title} 이미지`}
            width={800}
            height={450}
            className='group-hover:brightness-75'
          />
        </div>

        <div className='post'>
          <div className='lg:grid grid-cols-[1fr,300px] gap-10 mt-8'>
            <div className='post__contents'>
              {post.contents && post.contents.trim() !== '' ? (
                <ReactMarkdown>{post.contents}</ReactMarkdown>
              ) : (
                PostComponent
              )}
            </div>
            <div className='post__sidebar h-full pb-12'>
              <div className='sidebar sticky top-10'>
                <div className='box1 h-[250px] bg-slate-400'>sponser</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
