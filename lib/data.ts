import { Data } from './types'

const data: Data = {
  adminMenus: [
    { name: 'Overview', href: '/admin/overview' },
    { name: 'Posts', href: '/admin/posts' },
    { name: 'Users', href: '/admin/users' },
    { name: 'Reviews', href: '/admin/reviews' },
    { name: 'Settings', href: '/admin/settings' },
  ],
  menuData: [
    {
      title: 'Started',
      items: [
        {
          title: 'webstoryboy',
          description:
            '웹스토리보이는 최신 웹 기술을 연구하고 공유하는 개발 블로그입니다.',
          href: '/',
          rowSpan: 4,
        },
        {
          title: '튜토리얼',
          description: 'CSS와 GSAP 강의가 준비되어 있습니다.',
          href: '/',
          rowSpan: 1,
        },
        {
          title: '강의',
          description: '웹디자인개발기능사 2025와 자바스크립트 강의',
          href: '/',
          rowSpan: 1,
        },
        {
          title: '레퍼런스',
          description: 'HTML, CSS, JAVASCRIPT 레퍼런스 제공',
          href: '/',
          rowSpan: 1,
        },
        {
          title: '인스퍼레이션',
          description: '영감적인 자료 수집',
          href: '/',
          rowSpan: 1,
        },
      ],
    },
    {
      title: 'Tutorial',
      items: [
        {
          title: 'Tutorial',
          description:
            '웹 개발을 처음 시작하는 분들을 위한 기초부터 실전까지의 튜토리얼 제공',
          href: '/',
          rowSpan: 2,
        },
        {
          title: 'UI/UX CSS Design',
          description: 'CSS와 GSAP을 활용한 UI/UX 디자인 강의',
          href: '/tutorial/uiux-design',
          rowSpan: 1,
        },
        {
          title: 'GSAP Interactive Animation',
          description: '웹 애니메이션과 인터랙티브 UI 개발',
          href: '/tutorial/gsap-animation',
          rowSpan: 1,
        },
      ],
    },
    {
      title: 'Lecture',
      items: [
        {
          title: 'Lecture',
          description: '웹 개발과 디자인을 위한 체계적인 강의 제공',
          href: '/',
          rowSpan: 2,
        },
        {
          title: '웹디자인개발기능사 2025',
          description: '시험 대비 강의',
          href: '/lecture/webdesign2025',
          rowSpan: 1,
        },
        {
          title: '리액트를 위한 자바스크립트 기초',
          description: '기초부터 마스터까지',
          href: '/lecture/javascript-react',
          rowSpan: 1,
        },
      ],
    },
    {
      title: 'Reference',
      items: [
        {
          title: 'Reference',
          description: 'HTML, CSS, JavaScript 등의 핵심 개념과 실전 예제 제공',
          href: '/',
          rowSpan: 3,
        },
        {
          title: 'HTML 레퍼런스',
          description: 'HTML 태그, 속성 활용 정리',
          href: '/reference/html',
          rowSpan: 1,
        },
        {
          title: 'CSS 레퍼런스',
          description: 'CSS 속성과 레이아웃 정리',
          href: '/reference/css',
          rowSpan: 1,
        },
        {
          title: 'Javascript 레퍼런스',
          description: '자바스크립트 문법과 예제 정리',
          href: '/reference/javascript',
          rowSpan: 1,
        },
      ],
    },
    {
      title: 'Inspiration',
      items: [
        {
          title: 'Inspiration',
          description: '웹 디자인과 인터랙션의 영감을 얻을 수 있는 예제 제공',
          href: '/',
          rowSpan: 2,
        },
        {
          title: 'SITE 인스퍼레이션',
          description: '웹사이트 디자인 사례 모음',
          href: '/inspiration/site',
          rowSpan: 1,
        },
        {
          title: 'TUTORIAL 인스퍼레이션',
          description: '다양한 웹 개발 학습 자료',
          href: '/inspiration/tutorial',
          rowSpan: 1,
        },
      ],
    },
  ],
}

export default data
