import { Metadata } from 'next'
import { getPostsForSubCategory } from '@/lib/actions/post.actions'
import PageCard from '@/components/page/page-card'

export const metadata: Metadata = {
  title: 'GSAP Interactive Animatio',
}

export default async function GsapAnimationPage() {
  const subCategory = 'webdesign2025'
  const { success, posts, totalCount } = await getPostsForSubCategory(
    subCategory
  )

  return (
    <section>
      <div className='page__title'>
        <h2>
          GSAP Interactive Animation<span className='small'>{totalCount}</span>
        </h2>
        <p>
          이 섹션은 실전 웹 디자인과 개발을 위한 다양한 튜토리얼을 제공합니다.
          CSS 디자인과 GSAP 인터랙티브 애니메이션을 중심으로 구성되어 있으며,
          CSS를 활용한 UI/UX 디자인 기법부터 최신 애니메이션 기술까지 학습할 수
          있습니다. 실무에 바로 활용할 수 있는 기초 및 심화 지식을 제공하여, 웹
          개발 능력을 한 단계 끌어올릴 수 있습니다.
        </p>
      </div>

      {success && <PageCard posts={posts || []} />}
    </section>
  )
}
