import CodeBlock from '@/components/post/post-code'

export default function Webdesign17() {
  return (
    <>
      <h3>소개</h3>
      <p>안녕하세요! 웹스토리보이입니다 😊</p>
      <p>
        이번에는 E유형 레이아웃을 함께 만들어보겠습니다. E유형은 지금까지 학습한
        A~D유형보다 구성과 배치가 조금 더 복잡하게 느껴질 수 있습니다. 하지만
        핵심은 여전히 동일합니다. 전체 구조를 파악하고, 각 영역을 명확하게
        분리한 뒤, 순차적으로 스타일을 적용해 나가면 어렵지 않게 완성할 수
        있어요. 처음에는 복잡해 보여도, 반복해서 만들어 보면 자연스럽게
        익숙해지고, 오히려 레이아웃 감각이 한 단계 더 성장하는 기회가 될 수
        있습니다. 그러니 겁먹지 말고, 하나씩 차근차근 따라와 주세요! 👊🔥 그럼,
        E유형도 완벽하게 마스터하러 가볼까요? 렛츠 기릿! 💪🚀
      </p>
      <h4>1. 기본 구조 만들기</h4>
      <p className='uline'>
        웹 문서 만들기 : VSCODE를 실행하고 E-1.html파일을 만들겠습니다.
      </p>
      <p>
        !를 치고 tab버튼을 누르면 다음과 같이 나타납니다. lang는 ko로 변경하고
        title은 웹디자인기능사 레이아웃 E-1으로 변경해주겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>웹디자인기능사 레이아웃 E-1</title>
</head>
<body>
    
</body>
</html>`}
      />
      <p>
        전체적인 구조는 2단 또는 4단으로 만들수 있습니다. 4단보다는 2단구조가 더
        안정적이기 때문에 main과 footer로 만들고 작업하겠습니다. 이번 레이아웃의
        특징은 height 값도 화면 height 값에 딱 맞추어야 합니다. 그래서 푸터
        영역을 제외한 부분을 100%로 맞추어야 합니다. 메인의 높이 값은 height:
        calc(100vh - 120px) 이렇게 설정하면 화면 높이에 딱 맞출 수 있습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<body>
    <div id="wrap">
        <main id="main"></main>
        <footer id="footer"></footer>
    </div>
</body>`}
      />
      <CodeBlock
        language='css'
        code={`* {
    margin: 0;
    padding: 0;
}
#wrap {
    width: 100%;           
}
#main {
    width: 100%;
    height: calc(100vh - 120px);
    background-color: #efefef;
}
#footer {
    width: 100%;
    height: 120px;
    background-color: #e3e3e3;
}`}
      />
      <p>
        메인 콘텐츠는 3개의 영역으로 이루어져 있으며, header, contents, slider로
        구성하였습니다. 여기서 헤더와 콘텐츠는 고정값이고, 슬라이드는 유동적이기
        때문에 width: calc(100% - 600px); 이렇게 설정해야 반응형이 가능합니다.
        이렇게 하면 화면의 크기를 변경해도 화면에 맞게 변하는 모습을 볼 수
        있습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<div id="wrap">
    <main id="main">
        <header id="header"></header>
        <section id="contents"></section>
        <article id="slider"></article>
    </main>
    <footer id="footer"></footer>
</div>`}
      />
      <CodeBlock
        language='css'
        code={`* {
    margin: 0;
    padding: 0;
}
#wrap {
    width: 100%;           
}
#main {
    width: 100%;
    height: calc(100vh - 120px);
    display: flex;
}
#header {
    width: 200px;
    height: 100%;
    background-color: #efefef;
}
#contents {
    width: 400px;
    height: 100%;
    background-color: #e3e3e3;
}
#slider {
    width: calc(100% - 600px);
    height: 100%;
    background-color: #d9d9d9;
}
#footer {
    width: 100%;
    height: 120px;
    background-color: #d1d1d1;
}`}
      />
      <h4>2. 각 섹션 작업하기</h4>
      <p>
        메인 박스 안에 헤더 영역을 작업하겠습니다. 헤더 영역은 로고와 메뉴
        영역으로 나누어져 있습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<header id="header">
    <h1 class="logo"></h1>
    <nav class="nav"></nav>
</header>
<!-- //header -->`}
      />
      <CodeBlock
        language='css'
        code={`#header {
    width: 200px;
    height: 100%;
}
#header .logo {
    width: 100%;
    height: 10%;
    background-color: #e3e3e3;
}
#header .nav {
    width: 100%;
    height: 90%;
    background-color: #d9d9d9;
}`}
      />
      <p>
        컨텐츠 영역은 4개의 영역으로 이루어져 있습니다. 배너, 공지사항, 갤러리,
        링크 영역으로 이루어져 있으며, 높이 값은 화면 비율에 맞추어야 하기
        때문에 %로 작업하였습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<section id="contents">
    <article class="banner"></article>
    <article class="notice"></article>
    <article class="gallery"></article>
    <article class="link"></article>
</section>
<!-- //contents -->`}
      />
      <CodeBlock
        language='css'
        code={`#contents {
    width: 400px;
    height: 100%;
}
#contents .banner {
    width: 100%;
    height: 15%;
    background-color: #d1d1d1;
}
#contents .notice {
    width: 100%;
    height: 35%;
    background-color: #c7c7c7;
}
#contents .gallery {
    width: 100%;
    height: 35%;
    background-color: #bcbcbc;
}
#contents .link {
    width: 100%;
    height: 15%;
    background-color: #b1b1b1;
}`}
      />
      <p>
        슬라이드 영역은 특별한 것이 없으니 영역만 잡고 넘어가겠습니다. 대신
        width 값은 유동적으로 변해야 하기 때문에 width: calc(100% - 600px)
        이렇게 설정했습니다.
      </p>
      <CodeBlock language='html' code={`<article id="slider"></article>`} />
      <CodeBlock
        language='css'
        code={`#slider {
    width: calc(100% - 600px);
    height: 100%;
    background-color: #a3a3a3;
}`}
      />
      <p>
        푸터 영역은 2개의 영역으로 나누고, 두번재 영역은 다시 두개의 영역으로
        작업하겠습니다.
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
    height: 120px;
    background-color: #9d9d9d;
}
#footer .footer2 {
    width: 80%;
}
#footer .footer2 .footer2-1 {
    width: 100%;
    height: 60px;
    background-color: #929292;
}
#footer .footer2 .footer2-2 {
    width: 100%;
    height: 60px;
    background-color: #838383;
}`}
      />
      <h4>3. 정리</h4>
      <p>
        E-1 유형은 반응형 레이아웃 구성에서 매우 중요한 개념들을 연습할 수 있는
        구조입니다. 특히 이번 실습에서 핵심이 되는 부분은{' '}
        <strong>가변값과 고정값을 함께 활용하는 방식</strong>입니다.
      </p>
      <p>
        그중에서도 가장 중요한 개념은 바로 <code>calc()</code> 함수입니다.
      </p>
      <ul>
        <li>
          <code>calc()</code>는 CSS에서{' '}
          <strong>다양한 단위를 조합해서 연산할 수 있게 해주는 함수</strong>
          입니다.
        </li>
        <li>
          예를 들어 <code>width: calc(100% - 600px)</code>은 전체 너비(100%)에서
          고정값(600px)을 뺀 나머지 공간을 차지하게 합니다.
        </li>
        <li>
          <strong>주의할 점</strong>은 연산 기호 양쪽에 반드시 공백을 넣어야
          한다는 것입니다.
          <br /> 예시: <code>calc(100% - 200px)</code> ← 공백 필수!
        </li>
      </ul>
      <p>
        또한, <strong>세로 높이를 화면에 맞추는</strong> 부분에서도{' '}
        <code>height: calc(100vh - 120px)</code> 같은 방식으로 화면 전체
        높이에서 푸터 높이를 제외해 main 영역을 딱 맞게 설정할 수 있습니다.
      </p>
      <p>
        이런 방식은 <strong>실제 반응형 웹사이트 레이아웃 구현</strong>에 매우
        자주 활용되므로, 꼭 익숙해지셔야 합니다 💡
      </p>
      <h4>4. 마무리</h4>
      <p>
        자, 이렇게 해서 드디어 E유형의 첫 번째 레이아웃도 완성되었습니다! 🎉
      </p>
      <p>
        이번 레이아웃은 A~D유형과 비교했을 때 조금 더 디테일하고 화면 기준
        계산이 필요한 구조였습니다. 하지만 핵심 개념인{' '}
        <strong>calc() 함수의 활용</strong>,{' '}
        <strong>flexbox를 이용한 정렬</strong>, 그리고{' '}
        <strong>퍼센트 기반의 세로 높이 분할</strong>까지 잘 이해하셨다면 충분히
        해내셨을 거예요! 😊
      </p>
      <p>
        실무에서도 매우 자주 등장하는 구조이기 때문에, 꼭 여러 번 반복해서
        연습해보시고 모양을 바꾸거나 구조를 살짝 변경해보며{' '}
        <strong>응용 능력</strong>도 키워보시길 추천드립니다.
      </p>
      <p> 그럼 다음 유형에서 또 만나요! 고생하셨습니다. 👏👏👏 </p>
    </>
  )
}
