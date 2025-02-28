import { Metadata } from 'next'
import PageCard from '@/components/page/page-card'
import { getPostsForSubCategory } from '@/lib/actions/post.actions'

export const metadata: Metadata = {
  title: '리액트를 위한 자바스크립트 기초',
}

export default async function JavascriptReactPage() {
  const subCategory = 'javascript-react'
  const { success, posts, totalCount } = await getPostsForSubCategory(
    subCategory
  )

  return (
    <section>
      <div className='page__title'>
        <h2>
          리액트를 위한 자바스크립트 기초
          <span className='small'>{totalCount}</span>
        </h2>
        <p>
          이 섹션은 웹스토리보이가 제공하는 다양한 강의를 소개합니다.
          웹디자인개발기능사 2025 시험 대비 강의와 리액트를 위한 자바스크립트
          기초 강의가 준비되어 있으며, 실무 중심의 지식과 문제 해결 능력을 키울
          수 있습니다. 초보자를 위한 기초 강의부터 전문가를 위한 심화 강의까지
          모두 포함되어 있습니다.
        </p>
      </div>

      {success && <PageCard posts={posts || []} />}
    </section>
  )
}
