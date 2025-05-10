import CodeBlock from '@/components/post/post-code'
import { BookCheck } from 'lucide-react'

export default function WebdesignA2() {
  return (
    <>
      <h3>소개</h3>
      <p>안녕하세요! 웹스토리보이입니다 😊</p>
      <p>
        이번에는 실전 감각을 익힐 수 있도록 실제 사이트를 직접 만들어보겠습니다.
        마치 시험장에 있는 것처럼 집중해서 실습을 진행해볼게요. A유형 중 두 번째
        유형을 선택하여 하나씩 단계적으로 작업해보겠습니다. 자, 그럼 천천히
        시작해볼까요?
      </p>
      <p>
        우선 오른쪽 메뉴에서 PDF 항목 중 A-2 유형을 선택해 열어보겠습니다. 실제
        시험 상황이라고 생각하고, 여러분은 지금 A-2 유형의 시험지를 받았다고
        가정해볼게요. 사이트의 주제는 바로 <strong>Green 복지재단</strong>
        입니다!
      </p>

      <h4>1. 기본 셋팅하기</h4>
      <p>
        VSCODE를 실행하고 webdesign폴더 안에 siteA-2 폴더를 만들겠습니다.
        images, script, css 폴더를 만들고 index.html 파일을 만듭니다. 시험지에
        나왔있어요. 참고하세요!
      </p>
      <span className='check'>
        <BookCheck className='w-4 h-4' /> 시험지 체크
      </span>
      <p className='uline'>
        폴더 안에는 images, script, css 등의 자료를 분류하여 저장한 폴더도
        포함되어 있어야 하며, 메인페이지는 반드시 최상위 폴더에 index.html로
        저장하여 제출해야 한다.
      </p>
      <p>
        index.html 페이지에서 !를 누르고 탭을 누르면 다음과 같이 나옵니다. 만약
        자동 완성이 되지 않으면 html 파일로 만들었는지 확인해보세요!
      </p>
      <CodeBlock
        language='html'
        code={`<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Green 복지재단</title>
    </head>
    <body></body>
</html>`}
      />

      <h4>2. 레이아웃 작업하기</h4>
      <p>
        기본적인 세팅이 끝났다면, 이제 본격적으로 레이아웃 작업을 시작해볼게요.
        PDF에 있는 레이아웃을 참고하면서 하나씩 만들어보겠습니다. 이 구조는
        우리가 연습했던 레이아웃과 거의 같기 때문에 익숙하실 거예요. 만약 아직
        레이아웃 코딩이 헷갈린다면, 이전에 봤던 영상을 한 번 더 복습하고 오시는
        걸 추천드려요!
      </p>

      <CodeBlock
        language='html'
        code={`<div id="wrap">
    <header id="header">
        <h1 class="logo"></h1>
        <div class="nav"></div>
    </header>
    <!-- //header -->

    <article id="slider"></article>
    <!-- //slider -->

    <main id="contents">
        <div class="content1"></div>
        <div class="content2"></div>
        <div class="content3"></div>
    </main>
    <!-- //contents -->

    <footer id="footer">
        <div class="footer1"></div>
        <div class="footer2"></div>
        <div class="footer3"></div>
    </footer>
    <!-- //footer -->
</div>`}
      />
      <CodeBlock
        language='css'
        code={`* {
    margin: 0;
    padding: 0;
}
#wrap {
    width: 1200px;
    margin: 0 auto;
}
#header {
    width: 1200px;
    display: flex;
}
#header .logo {
    width: 20%;
    height: 100px;
    background-color: #efefef;
}
#header .nav {
    width: 80%;
    height: 100px;
    background-color: #e3e3e3;
}
#slider {
    width: 1200px;
    height: 300px;
    background-color: #d9d9d9;
}
#contents {
    width: 1200px;
    display: flex;
}
#contents .content1 {
    width: 33.3333%;
    height: 200px;
    background-color: #d1d1d1;
}
#contents .content2 {
    width: 33.3333%;
    height: 200px;
    background-color: #c7c7c7;
}
#contents .content3 {
    width: 33.3333%;
    height: 200px;
    background-color: #bcbcbc;
}
#footer {
    width: 1200px;
    display: flex;
}
#footer .footer1 {
    width: 20%;
    height: 100px;
    background-color: #b1b1b1;
}
#footer .footer2 {
    width: 60%;
    height: 100px;
    background-color: #a3a3a3;
}
#footer .footer3 {
    width: 20%;
    height: 100px;
    background-color: #9d9d9d;
}`}
      />
      <CodeBlock language='css' code={``} />
      <CodeBlock language='css' code={``} />
      <CodeBlock language='css' code={``} />

      <h4>3. 정리</h4>

      <h4>4. 마무리</h4>
    </>
  )
}
