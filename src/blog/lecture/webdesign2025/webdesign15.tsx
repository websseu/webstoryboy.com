import CodeBlock from '@/components/post/post-code'

export default function Webdesign15() {
  return (
    <>
      <h3>소개</h3>
      <p>안녕하세요! 웹스토리보이입니다 😊</p>
      <p>
        이번에는 D-3 유형 레이아웃을 함께 만들어보겠습니다. D-3 유형은 전체적인
        구조가 D-1 유형과 거의 유사하지만, 푸터 영역만 조금 다르게 구성되어 있는
        것이 특징입니다. 이미 D-1 유형을 한 번 만들어본 경험이 있다면 이번
        작업은 복습하는 느낌으로 가볍게 따라오시면 좋을 것 같아요. 그럼 천천히,
        그리고 꼼꼼하게 같이 만들어볼까요? 렛츠 기릿! 💪✨
      </p>
      <h4>1. 기본 구조 만들기</h4>
      <p className='uline'>
        웹 문서 만들기 : VSCODE를 실행하고 D-3.html파일을 만들겠습니다.
      </p>
      <p>
        !를 치고 tab버튼을 누르면 다음과 같이 나타납니다. lang는 ko로 변경하고
        title은 웹디자인기능사 레이아웃 D-3으로 변경해주겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>웹디자인기능사 레이아웃 D-3</title>
</head>
<body>
    
</body>
</html>`}
      />
      <p>
        전체적인 구조는 asdie, main, footer로 나누어 작업하였습니다. 왼쪽
        사이드는 고정값이기 때문에 width: 200px를 설정하고, 컨텐츠 영역은 width:
        100%를 설정했습니다. 이렇게 하면 가로 정렬이 안되기 때문에 고정값
        200px을 빼주고 width 값을 설정해야 합니다. main의 가로 값은 width:
        calc(100% - 200px)로 설정해야 구조가 깨지지 않겠죠!
      </p>
      <CodeBlock
        language='html'
        code={`<body>
    <div id="wrap">
        <aside id="aside"></aside>
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
    display: flex;
    flex-wrap: wrap;
}
#aside {
    width: 200px;
    height: 650px;
    background-color: #efefef;
}
#main {
    width: calc(100% - 200px);
    height: 650px;
    background-color: #e3e3e3;
}
#footer {
    width: 100%;
    height: 100px;
    background-color: #d9d9d9;
}`}
      />
      <p>
        메인 콘텐츠는 3개의 영역으로 이루어져 있으며, slider, banner, contents로
        구성하였습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<div id="wrap">
    <aside id="aside"></aside>
    <main id="main">
        <article id="slider"></article>
        <article id="banner"></article>
        <section id="contents"></section>
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
    display: flex;
    flex-wrap: wrap;
}
#aside {
    width: 200px;
    height: 850px;
    background-color: #efefef;
}
#main {
    width: calc(100% - 200px);
    height: 850px;
    background-color: #e3e3e3;
}
#slider {
    width: 100%;
    height: 400px;
    background-color: #d9d9d9;
}
#banner {
    width: 100%;
    height: 200px;
    background-color: #d1d1d1;
}
#contents {
    width: 100%;
    height: 250px;
    background-color: #c7c7c7;
}
#footer {
    width: 100%;
    height: 100px;
    background-color: #bcbcbc;
}`}
      />
      <h4>2. 각 섹션 작업하기</h4>
      <p>
        사이드 영역의 로고와 메뉴를 설정하겠습니다. 따로 크기에 대한 정의가
        없으므로, 임의로 설정하겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<aside id="aside">
    <h1 class="logo"></h1>
    <nav class="nav"></nav>
</aside>`}
      />
      <CodeBlock
        language='css'
        code={`#aside {
    width: 200px;
}
#aside .logo {
    width: 100%;
    height: 100px;
    background-color: #efefef;
}
#aside .nav {
    width: 100%;
    height: 750px;
    background-color: #e3e3e3;
}`}
      />
      <p>
        슬라이드 영역에는 링크 영역이 있습니다. 슬라이드 영역 위에 위치하기
        때문에 position: absolute로 설정하겠습니다. 절대값을 설정하면 항상
        기준점이 되는 relative를 설정해야 합니다.
      </p>
      <CodeBlock
        language='html'
        code={`<article id="slider">
    <div class="link"></div>
</article>`}
      />
      <CodeBlock
        language='css'
        code={`#slider {
    width: 100%;
    height: 400px;
    background-color: #d9d9d9;
    position: relative;
}
#slider .link {
    position: absolute;
    right: 0;
    top: 0;
    width: 100px;
    height: 300px;
    background-color: #9d9d9d;
}`}
      />
      <p>배너 영역도 특이한 부분이 없기 때문에 영역만 확인하겠습니다.</p>
      <CodeBlock language='html' code={`<article id="banner"></article>`} />
      <CodeBlock
        language='css'
        code={`#banner {
    width: 100%;
    height: 200px;
    background-color: #d1d1d1;
}`}
      />
      <p>
        콘텐츠 공지사항 영역도 특이한 부분이 없기 때문에 영역만 확인하겠습니다.
      </p>
      <CodeBlock language='html' code={`<section id="contents"></section>`} />
      <CodeBlock
        language='css'
        code={`#contents {
    width: 100%;
    height: 250px;
    background-color: #c7c7c7;
}`}
      />
      <p>
        푸터 영역은 2개의 영역으로 나뉘고, 두번째 영역은 또 다시 두개의 영역으로
        설정합니다.
      </p>
      <CodeBlock
        language='html'
        code={`<footer id="footer">
    <div class="footer1"></div>
    <div class="footer2">
        <div class="footer2-1"></div>
        <div class="footer2-2"></div>
    </div>
</footer>
<!-- //footer -->`}
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
    background-color: #bcbcbc;
}
#footer .footer2 {
    width: 80%;
}
#footer .footer2 .footer2-1 {
    width: 100%;
    height: 60px;
    background-color: #b1b1b1;
}
#footer .footer2 .footer2-2 {
    width: 100%;
    height: 60px;
    background-color: #a3a3a3;
}`}
      />
      <h4>3. 정리</h4>
      <p>
        D-3 유형은 D-1 유형과 기본 레이아웃 구조는 거의 동일하지만,
        <strong>푸터 구조에서만 차이점</strong>이 있습니다. 이번 유형을 통해
        다음과 같은 개념을 다시 복습해볼 수 있었습니다.
      </p>
      <ul>
        <li>
          <strong>반응형 레이아웃 설계</strong>: <code>calc(100% - 200px)</code>
          을 활용한 유동 폭 계산
        </li>
        <li>
          <strong>position 속성</strong>: <code>absolute</code>와
          <code>relative</code>의 관계
        </li>
        <li>
          <strong>섹션 분리</strong>: 슬라이더, 배너, 콘텐츠, 푸터 영역 구성
        </li>
        <li>
          <strong>레이아웃 계층</strong>: 푸터 내에서 중첩된 박스 구조 만들기
        </li>
      </ul>
      <p>
        각 요소마다 <code>width</code>, <code>height</code>,
        <code>background-color</code>를 활용해 구조를 시각적으로 빠르게 확인할
        수 있는 방법도 익혔습니다. 이렇게 시각적 피드백을 통해 레이아웃을 잡는
        습관은 실무에서도 매우 유용합니다.
      </p>
      <h4>4. 마무리</h4>
      <p>
        이제 D-3 유형도 무사히 완성했습니다! 👏 앞서 진행한 D-1, D-2 유형과
        비교하면서 연습하면 레이아웃 패턴이 자연스럽게 머리에 들어올 거예요.
        시험장에서 당황하지 않으려면, 단순히 정답만 외우는 것보다
        <strong>어떤 구조가 반복되고 어떤 부분이 달라지는지</strong> 흐름을
        파악하는 것이 더 중요합니다. 꼭 한 번은{' '}
        <strong>혼자 힘으로 처음부터 끝까지 재현</strong>해보세요. 연습 중
        실수하거나 막히는 것도 중요한 경험입니다. 실수하면서 배우는 것이 더 오래
        남습니다.
      </p>
      <p> 자, 그럼 다음 유형도 힘내서 함께 작업해볼까요? 파이팅입니다! 💪🚀 </p>
    </>
  )
}
