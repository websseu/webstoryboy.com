import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SITE 인스퍼레이션',
}

export default function ReferenceCss() {
  return (
    <section className='page__title'>
      <h2>
        SITE 인스퍼레이션<span className='small'>2</span>
      </h2>
      <p>
        이 섹션은 웹스토리보이가 제공하는 다양한 강의를 소개합니다.
        웹디자인개발기능사 2025 시험 대비 강의와 리액트를 위한 자바스크립트 기초
        강의가 준비되어 있으며, 실무 중심의 지식과 문제 해결 능력을 키울 수
        있습니다. 초보자를 위한 기초 강의부터 전문가를 위한 심화 강의까지 모두
        포함되어 있습니다.
      </p>
    </section>
  )
}
