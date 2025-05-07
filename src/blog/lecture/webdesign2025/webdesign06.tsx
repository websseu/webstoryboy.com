import CodeBlock from '@/components/post/post-code'

export default function Webdesign06() {
  return (
    <>
      <h3>소개</h3>
      <p>안녕하세요! 웹스토리보이입니다 😊</p>
      <p>
        이번에는 B유형의 두 번째 레이아웃, B-2 유형을 만들어보겠습니다. 앞에서
        학습한 B-1 유형의 원리를 잘 이해하셨다면, 이번 레이아웃도 어렵지 않게
        따라오실 수 있을 거예요. 한 번 더 연습하면서 감을 확실히 잡아볼게요!
        그럼 바로 시작해보겠습니다 💪
      </p>

      <h4>1. 기본 구조 만들기</h4>
      <p className='uline'>
        웹 문서 만들기 : VSCODE를 실행하고 B-2.html파일을 만들겠습니다.
      </p>
      <p>
        !를 입력하고 Tab 키를 누르면 기본 HTML 구조가 자동으로 완성됩니다. 이제
        몇 가지 수정을 해볼게요.
      </p>
      <ul>
        <li>
          lang 속성은 &quot;ko&quot;로 변경해 한국어 웹사이트임을 명시하고,
        </li>
        <li>
          title은 &quot;웹디자인기능사 레이아웃 B-2&quot;로 설정하겠습니다.
        </li>
      </ul>
      <p>
        오른쪽에 있는 디자인 보기 버튼을 누르면 전체 레이아웃을 한눈에 확인할 수
        있으니, 작업 전에 꼭 참고해보세요! 웹사이트를 만들 때는 몇 가지 기본
        설정 태그들을 알아두는 것이 좋아요
      </p>
      <ul>
        <li>charset은 문서의 문자 인코딩 방식을 정의하는 것이고,</li>
        <li>
          lang은 웹 브라우저에 페이지의 주 언어가 무엇인지 알려주는 역할을
          합니다.
        </li>
        <li>
          viewport는 모바일 등 다양한 화면 크기에 맞춰 레이아웃이 반응하도록
          설정해주는 부분이에요.
        </li>
      </ul>
      <p>
        지금은 “이런 게 있구나~” 하고 넘어가셔도 괜찮습니다. 아랫 쪽
        정리하기에서 좀 더 자세히 설명해드릴게요 😊
      </p>

      <CodeBlock
        language='html'
        code={`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>웹디자인기능사 레이아웃 B-2</title>
</head>
<body>
    
</body>
</html>`}
      />
      <p>
        B유형의 구조도 A유형과 다른건 없지만 전체 영역이라는 부분이 조금
        다릅니다. 전체 영역이라 함은 width값이 100%라는 것을 의미하고, 100%는
        브라우저 화면의 전체 크기를 의미합니다.
      </p>
      <CodeBlock
        language='html'
        code={`<body>
    <div id="wrap">
        <header id="header"></header>
        <article id="slider"></article>
        <main id="contents"></main>
        <footer id="footer"></footer>
    </div>
</body>`}
      />
      <p>
        해당 영역을 확인하기 위해 width, height, background-color를
        설정하였습니다. width값을 100%를 설정하고, height값과 background-color을
        넣어서 영역을 확인하겠습니다. 이상이 없으면 각 섹션을 작업하겠습니다.
      </p>
      <CodeBlock
        language='css'
        code={`* {
    margin: 0;
    padding: 0;
}
#wrap {
    width: 100%;
}
#header {
    width: 100%;
    height: 100px;
    background-color: #efefef;
}
#slider {
    width: 100%;
    height: 300px;
    background-color: #e3e3e3;
}
#contents {
    width: 100%;
    height: 200px;
    background-color: #d9d9d9;
}
#footer {
    width: 100%;
    height: 100px;
    background-color: #d1d1d1;
}`}
      />

      <h4>2. 각 섹션 작업하기</h4>
      <p>
        헤더 영역은 전체 영역과 가운데 영역으로 구성되어 있고, 가운데 영역은
        로고 영역과 네비 영역으로 구성되어 있습니다. 전체 영역을 나타내는 header
        영역에는 width: 100%를 설정하고 header_container 영역에는 width 값을
        1200px로 설정합니다. header_container 영역은 가운데로 오기 위해서
        margin: 0 auto를 설정하겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<div id="header">
    <div class="header_container">
        <h1 class="logo"></h1>
        <div class="nav"></div>
    </div>
</div>
<!-- //header -->`}
      />
      <CodeBlock
        language='css'
        code={`#header {
    width: 100%;
    background-color: #efefef;
}
#header .header_container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
}
#header .header_container .logo {
    width: 20%;
    height: 100px;
    background-color: #d9d9d9;
}
#header .header_container .nav {
    width: 80%;
    height: 100px;
    background-color: #d1d1d1;
}`}
      />

      <p>
        슬라이드 영역은 전체 영역이 없고 가운데 영역만 있기 때문에 margin: 0
        auto;를 설정하겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<div id="slider"></div>
<!-- //slider -->`}
      />
      <CodeBlock
        language='css'
        code={`#slider {
    width: 1200px;
    height: 300px;
    margin: 0 auto;
    background-color: #c7c7c7;
}`}
      />

      <p>
        컨텐츠 영역도 전체 영역은 없고 가운데 영역만 있는 구조입니다. 가운데
        영역 안에 3개의 자식 영역이 들어가는 형태입니다. 3개의 영역은 width값을
        33.3333%로 설정하고, 상위 박스영역에는 flex를 설정하겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<div id="contents">
    <section class="content1"></section>
    <section class="content2"></section>
    <section class="content3"></section>
</div>
<!-- //contents -->`}
      />
      <CodeBlock
        language='css'
        code={`#contents {
    width: 1200px;
    margin: 0 auto;
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
        마지막으로 부터 영역은 전체 영역이 들어가기 때문에 footer 영역한테는
        width를 100%로 설정하고, footer_container에게는 width값을 1200px로
        설정하고 가운데 정렬를 위해 margin: 0 auto를 설정하겠습니다. 푸터 영역은
        우선 2단계로 나누고 오른쪽 영역은 다시 2단계 영역으로 작업하겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<footer id="footer">
    <div class="footer_container">
        <div class="footer1"></div>
        <div class="footer2">
            <div class="footer2-1"></div>
            <div class="footer2-2"></div>
        </div>
    </div>
</footer>
<!-- //footer -->`}
      />
      <CodeBlock
        language='css'
        code={`#footer {
    width: 100%;
    height: 100px;
    background-color: #d1d1d1;
}
#footer .footer_container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
}
#footer .footer_container .footer1 {
    width: 80%;
    height: 100px;
    background-color: #9d9d9d;
}
#footer .footer_container .footer2 {
    width: 20%;
}
#footer .footer_container .footer2 .footer2-1 {
    width: 100%;
    height: 50px;
    background-color: #929292;
}
#footer .footer_container .footer2 .footer2-2 {
    width: 100%;
    height: 50px;
    background-color: #838383;
}`}
      />

      <h4>3. 정리</h4>
      <p>
        이제까지 B-2 유형의 기본 구조를 만들면서 여러 설정 태그를 다뤄봤습니다.
        웹 문서를 만들 때 필요한 기본적인 설정을 알아보겠습니다.
      </p>
      <ul>
        <li>
          <code>&lt;!DOCTYPE html&gt;</code> : HTML5 문서임을 선언합니다.
          브라우저가 문서를 올바르게 해석하도록 도와주는 선언입니다.
        </li>
        <li>
          <code>&lt;html lang=&quot;ko&quot;&gt;</code> : 페이지의 주 언어가
          한국어임을 브라우저에 알려줍니다. 검색엔진이나 스크린 리더(접근성)에
          중요한 정보예요.
        </li>
        <li>
          <code>&lt;meta charset=&quot;UTF-8&quot;&gt;</code> : 문서의 문자
          인코딩 방식입니다. 한글을 포함한 다양한 문자를 깨지지 않고 표시하려면
          반드시 설정해야 합니다.
        </li>
        <li>
          <code>
            &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width,
            initial-scale=1.0&quot;&gt;
          </code>
          : 반응형 웹 디자인을 위한 설정입니다. 기기 화면 크기에 맞춰 페이지가
          자동으로 맞춰지게 해주는 중요한 태그입니다.
        </li>
        <li>
          <code>&lt;title&gt;</code> : 브라우저 탭에 표시될 문서의 제목입니다.
          사용자가 어떤 페이지인지 구분할 수 있도록 해줍니다.
        </li>
      </ul>
      <p>
        이 항목들은 웹 페이지의 기본 뼈대를 이루는 매우 중요한 구성요소입니다.
        자주 사용되기 때문에 자연스럽게 익혀두시면 좋습니다 😊
      </p>

      <h4>4. 마무리</h4>
      <p>여기까지 B-2 유형 레이아웃을 함께 만들어봤습니다.</p>
      <p>
        반복 학습이 중요하니, 직접 코드를 여러 번 따라 치며 눈과 손에
        익혀보세요! 다음 유형에서도 점점 더 탄탄한 웹 구조 감각을 익힐 수 있을
        거예요 😊
      </p>
      <p>수고 많으셨고, 다음 강의에서 또 만나요! 👋</p>
    </>
  )
}
