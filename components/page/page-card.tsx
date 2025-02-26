import Image from 'next/image'
import Link from 'next/link'
import { LuClock8, LuFileSpreadsheet, LuPresentation } from 'react-icons/lu'
import { formatTimeAgo } from '@/lib/utils'

interface CardProps {
  posts: {
    _id: string
    title: string
    slug: string
    category: string
    subCategory: string
    images: string
    tags: string[]
    numLikes: number
    numViews: number
    author?: string
    createdAt: string
  }[]
}

export default function PageCard({ posts }: CardProps) {
  return (
    <>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className='card group'>
            <div className='card-image relative block'>
              <Image
                src={`/${post.category}/${post.subCategory}/${post.images}`}
                alt={`${post.title} 관련 이미지`}
                width={500}
                height={400}
                className='rounded-none transition-all duration-500 ease-in-out group-hover:brightness-75'
              />
              <div className='absolute inset-0 flex gap-1 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <Link
                  href={`/post/${post.slug}`}
                  className='bg-black p-2 rounded-full'
                >
                  <LuFileSpreadsheet className='h-4 w-4 text-white' />
                </Link>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-black p-2 rounded-full cursor-pointer'
                >
                  <LuPresentation className='h-4 w-4 text-white' />
                </a>
              </div>
            </div>
            <div className='card-desc py-3'>
              <div className='flex gap-1 mt-1 mb-2'>
                {/* <CardTags tags={post.tags} />
                <CardLikes likes={post.numLikes} /> */}
              </div>
              <h3 className='text-xl leading-6 font-nanum text-black200 sm:truncate sm:w-full sm:whitespace-nowrap sm:overflow-hidden'>
                <Link href={`/post/${post.slug}`}>{post.title}</Link>
                <span className='text-[8px] pl-1'>{post.numViews}</span>
              </h3>
              <div className='mt-1'>
                <span className='text-xs text-black400 flex items-center gap-1'>
                  <LuClock8 /> {post.author || '작성자 미상'} ·{' '}
                  {formatTimeAgo(post.createdAt)}에 작성함
                </span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className='no-data'>
          현재 열심히 데이터를 생성 중입니다! 🛠️✨ <br />곧 멋진 콘텐츠가 쏟아질
          예정이니, 잠시만 기다려 주세요! 🐥🚀 <br />
          데이터들이 정리 정돈 중...📦📚
        </div>
      )}
    </>
  )
}
