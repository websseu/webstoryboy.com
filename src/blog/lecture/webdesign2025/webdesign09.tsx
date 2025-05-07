import CodeBlock from '@/components/post/post-code'

export default function Webdesign09() {
  return (
    <>
      <h3>소개</h3>
      <p>안녕하세요! 웹스토리보이입니다 😊</p>
      <p>이번에는 C유형 레이아웃을 함께 만들어보겠습니다.</p>
      <p>
        C유형은 2000년대 초반에 많이 사용되던 구조로, 가운데 정렬이 아닌 왼쪽
        정렬 방식으로 구성된 것이 특징입니다. 사이트 전체가 왼쪽에 고정되고, 그
        안에 콘텐츠들이 배치되는 구조죠. 이 레이아웃은 2023년 버전 개정 전에
        사용되던 방식이라 최근 레이아웃들에 비해 비교적 단순하고 쉬운 편이에요.
      </p>
      <p>그럼 빠르게 정리하고, 다음 D유형으로 넘어가볼게요! 렛츠 기릿! 💨</p>

      <h4>1. 기본 구조 만들기</h4>
      <p className='uline'>
        웹 문서 만들기 : VSCODE를 실행하고 C-1.html파일을 만들겠습니다.
      </p>
      <p>
        !를 치고 tab버튼을 누르면 다음과 같이 나타납니다. lang는 ko로 변경하고
        title은 웹디자인기능사 레이아웃 C-1으로 변경해주겠습니다.
      </p>

      <CodeBlock
        language='html'
        code={`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>웹디자인기능사 레이아웃 C-1</title>
</head>
<body>
    
</body>
</html>`}
      />
      <p>
        전체적인 구조는 왼쪽 메뉴와 콘텐츠로 구성되어 있습니다. aside와 main
        영역으로 설정하겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<body>
    <div id="wrap">
        <aside id="aside"></aside>
        <main id="main"></main>
    </div>
    <!-- //wrap -->
</body>`}
      />
      <CodeBlock
        language='css'
        code={`* {
    margin: 0;
    padding: 0;
}
#wrap {
    width: 1000px;
    display: flex;
}
#aside {
    width: 20%;
    height: 650px;
    background-color: #efefef;
}
#main {
    width: 80%;
    height: 650px;
    background-color: #e3e3e3;
}`}
      />
      <p>
        콘텐츠 구조에는 3개의 섹션이 들어가기 때문에 이 부분도 구조화
        하겠습니다. 이렇게 하면 전체적인 구조가 완성된것 같습니다. 세부적으로
        하나씩 작업을 들어가겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<div id="wrap">
    <aside id="aside"></aside>
    <main id="main">
        <article id="slider"></article>
        <section id="contents"></section>
        <footer id="footer"></footer>
    </main>
</div>
<!-- //wrap -->`}
      />
      <CodeBlock
        language='css'
        code={`#slider {
    width: 100%;
    height: 350px;
    background-color: #d9d9d9;
}
#contents {
    width: 100%;
    height: 200px;
    background-color: #d1d1d1;
}
#footer {
    width: 100%;
    height: 100px;
    background-color: #c7c7c7;
}`}
      />

      <h4>2. 각 섹션 작업하기</h4>
      <p>
        왼쪽 사이드 영역에는 두개의 영역이 들어갑니다. width, height,
        background-color를 넣어주고, 영역을 확인하겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<aside id="aside">
    <h1 class="logo"></h1>
    <nav class="nav"></nav>
</aside>
<!-- //aside -->`}
      />
      <CodeBlock
        language='css'
        code={`#aside {
    width: 20%;
}
#aside .logo {
    width: 100%;
    height: 100px;
    background-color: #efefef;
}
#aside .nav {
    width: 100%;
    height: 550px;
    background-color: #d9d9d9;
}`}
      />

      <p>슬라이드 영역은 별개 없으니 영역만 확인하고 넘어가겠습니다.</p>
      <CodeBlock
        language='html'
        code={`<article id="slider">
</article>
<!-- //slider -->`}
      />
      <CodeBlock
        language='css'
        code={`#slider {
    width: 100%;
    height: 350px;
    background-color: #c7c7c7;
}`}
      />

      <p>
        컨텐츠 영역에는 3개의 섹션으로 구성되어 있습니다. 독립적인 주제
        영역이라면, article 태그를 사용해도 괜찮습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<section id="contents">
    <article class="content1"></article>
    <article class="content2"></article>
    <article class="content3"></article>
</section>
<!-- //contents -->`}
      />
      <CodeBlock
        language='css'
        code={`#contents {
    width: 100%;
    display: flex;
}
#contents .content1 {
    width: 33.3333%;
    height: 200px;
    background-color: #bcbcbc;
}
#contents .content2 {
    width: 33.3333%;
    height: 200px;
    background-color: #b1b1b1;
}
#contents .content3 {
    width: 33.3333%;
    height: 200px;
    background-color: #a3a3a3;
}`}
      />
      <p>
        푸터 영역은 두개의 영역으로 나누고, 두번째 영역에 두개의 영역으로
        만들겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<footer id="footer">
    <div class="footer1"></div>
    <div class="footer2">
        <div class="footer2-1"></div>
        <div class="footer2-2"></div>
    </div>
</footer>`}
      />
      <CodeBlock
        language='css'
        code={`#footer {
    width: 100%;
    display: flex;
}
#footer .footer1 {
    width: 20%;
    height: 100px;
    background-color: #9d9d9d;
}
#footer .footer2 {
    width: 80%;
}
#footer .footer2 .footer2-1 {
    width: 100%;
    height: 50px;
    background-color: #929292;
}
#footer .footer2 .footer2-2 {
    width: 100%;
    height: 50px;
    background-color: #838383;
}`}
      />

      <h4>3. 정리</h4>
      <p>
        C유형은 과거에 많이 사용되던 <strong>왼쪽 정렬 기반의 레이아웃</strong>
        으로, 최근의 반응형 레이아웃과는 구조가 다소 단순하고 고정적인 편입니다.
      </p>
      <ul>
        <li>
          전체 구조는 <code>aside</code>와 <code>main</code> 두 영역으로 나뉘며,
          <strong>flex를 활용해 수평 배치</strong>되었습니다.
        </li>
        <li>
          <code>main</code> 안에는 <code>slider</code>, <code>contents</code>,
          <code>footer</code> 순으로 구성됩니다.
        </li>
        <li>
          <code>contents</code>는 3등분된 박스 형태로 구성했고,
          <code>footer</code>는 <strong>2단 구조 + 중첩된 2단</strong> 구조를
          사용했습니다.
        </li>
      </ul>
      <p>
        이 구조는 과거 고정형 레이아웃에 많이 사용되었지만, 여전히 기본기를
        익히기엔 좋은 예제입니다. 특히 flex 구조에 익숙해지기 딱 좋아요!
      </p>

      <h4>4. 마무리</h4>
      <p>
        수고하셨습니다! 🎉 이번 C유형은 최근 레이아웃과는 다르게 왼쪽 정렬이라는
        고정형 스타일을 사용했지만, 레이아웃의 기본 구조를 이해하고 정리하는 데
        아주 좋은 예제였습니다.
      </p>
      <p>
        이제 D유형으로 넘어가면 조금 더 다양한 구조와 응용이 나올 예정이에요.
        다양한 형태의 실전 레이아웃을 익히는 과정이니 기대하셔도 좋습니다!
      </p>
      <p>
        여기까지 따라오신 여러분 정말 고생 많으셨고, 다음 단계도 저와 함께
        차근차근 만들어보아요! 😄
      </p>
    </>
  )
}
