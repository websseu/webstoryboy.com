import Image from 'next/image'
import Link from 'next/link'
import { LuHeart, LuFileSpreadsheet, LuPresentation } from 'react-icons/lu'
import { Badge } from '@/components/ui/badge'
import { formatLikes } from '@/lib/utils'

interface Post {
  _id: string
  title: string
  description?: string
  category?: string
  subCategory?: string
  images?: string
  tags?: string[]
  numLikes?: number
}

interface PageCardProps {
  posts: Post[]
}

export default function PageCard({ posts }: PageCardProps) {
  return (
    <div className='page__card'>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className='card'>
            <div className='card__images group'>
              <Image
                src={`/${post.category}/${post.subCategory}/${post.images}`}
                alt={`${post.title} 이미지`}
                width={500}
                height={400}
                className='group-hover:brightness-75'
              />
              <div className='link group-hover:opacity-100'>
                <Link href={`/post/${post._id}`}>
                  <LuFileSpreadsheet />
                </Link>
                <a target='_blank' rel='noopener noreferrer'>
                  <LuPresentation />
                </a>
              </div>
            </div>
            <div className='card__desc'>
              <div className='mt-2 mb-2 flex gap-1'>
                {/* tag */}
                {post.tags?.map((tag, index) => (
                  <Badge key={index} variant='outline'>
                    {tag}
                  </Badge>
                ))}
                {/* like */}
                <span className='likes'>
                  <LuHeart className='mx-0.5' />
                  <span className='text-[10px]'>
                    {formatLikes(post.numLikes)}
                  </span>
                </span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className='noData'>등록된 게시물이 없습니다.🙅🏽</p>
      )}
    </div>
  )
}
