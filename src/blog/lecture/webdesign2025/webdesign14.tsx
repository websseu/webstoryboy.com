import CodeBlock from '@/components/post/post-code'

export default function Webdesign14() {
  return (
    <>
      <h3>소개</h3>
      <p>안녕하세요! 웹스토리보이입니다 😊</p>
      <p>
        좋아요! D-2유형은 D-1과 구조는 유사하지만 콘텐츠 영역 구성에 차이가
        있으니 비교하면서 작업하면 더 이해가 잘 될 거예요. 샘플 이미지
        참고하면서 정확한 위치와 크기를 맞추는 게 중요합니다. 시작할 준비
        되셨나요? 😎
      </p>
      <h4>1. 기본 구조 만들기</h4>
      <p className='uline'>
        웹 문서 만들기 : VSCODE를 실행하고 D-2.html파일을 만들겠습니다.
      </p>
      <p>
        !를 치고 tab버튼을 누르면 다음과 같이 나타납니다. lang는 ko로 변경하고
        title은 웹디자인기능사 레이아웃 D-2으로 변경해주겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>웹디자인기능사 레이아웃 D-2</title>
</head>
<body>
    
</body>
</html>`}
      />
      <p>
        전체적인 구조는 aside, main, footer영역으로 나누어져 있습니다.
        aside영역은 width값이 200px로 고정되어 있고, main 영역을 유동적으로
        변하는 구조입니다. main 영역의 width값은 100%에서 200px 뺀값을 넣어주면
        전체적인 구조는 깨지지 않고 가로로 정렬이 됩니다. 그러기 위해서는 width:
        calc(100% - 200px);를 설정하면 됩니다.
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
        이번 유형의 main 유형에는 두개의 섹션만 들어갑니다. 배너 섹션은 이미지
        슬라이드 안으로 들어갑니다.
      </p>
      <CodeBlock
        language='html'
        code={`<div id="wrap">
    <aside id="aside"></aside>
    <main id="main">
        <article id="slider"></article>
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
    height: 650px;
    background-color: #efefef;
}
#main {
    width: calc(100% - 200px);
    height: 650px;
    background-color: #e3e3e3;
}
#slider {
    width: 100%;
    height: 400px;
    background-color: #d9d9d9;
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
        슬라이드 영역을 작업해보겠습니다. 슬라이드 영역에는 이미지 영역과 배너
        영역으로 나누어 집니다. 여기서 배너 영역도 230px로 고정되어 있기 때문에
        이미지 영역의 width 값은 calc(100% - 230px)으로 설정해야 합니다.
      </p>
      <CodeBlock
        language='html'
        code={`<article id="slider">
    <div class="image"></div>
    <div class="banner"></div>
</article>`}
      />
      <CodeBlock
        language='css'
        code={`#slider {
    width: 100%;
    display: flex;
}
#slider .image {
    width: calc(100% - 230px);
    height: 400px;   
    background-color: #d9d9d9; 
}
#slider .banner {
    width: 230px;
    height: 400px;
    background-color: #d1d1d1;
}`}
      />
      <p>컨텐츠 영역은 두개의 영역으로 구성되어 있습니다.</p>
      <CodeBlock
        language='html'
        code={`<section id="contents">
    <div class="content1"></div>
    <div class="content2"></div>
</section>`}
      />
      <CodeBlock
        language='css'
        code={`#contents {
    width: 100%;
    display: flex;
}
#contents .content1 {
    width: 50%;
    height: 250px;
    background-color: #c7c7c7;
}
#contents .content2 {
    width: 50%;
    height: 250px;
    background-color: #bcbcbc;
}`}
      />
      <p>푸터 영역은 3개의 영역으로 작업하겠습니다.</p>
      <CodeBlock
        language='html'
        code={`<footer id="footer">
    <div class="footer1"></div>
    <div class="footer2"></div>
    <div class="footer3"></div>
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
      <h4>3. 정리</h4>
      <p>D-2 유형의 핵심 포인트를 다시 한 번 정리해볼게요.</p>
      <ul>
        <li>
          <strong>
            <code>calc(100% - 200px)</code>
          </strong>
          을 사용하여 고정 사이드바(200px)와 유동적인 메인 영역의 조합을
          구현했습니다.
        </li>
        <li>
          <strong>슬라이드 영역</strong>은 두 영역으로 나눠져 있으며,
          <code>.image</code>와 <code>.banner</code>를 flex로 수평 정렬하여
          구성했습니다.
        </li>
        <li>
          <strong>컨텐츠 영역</strong>은 50%씩 나뉜 두 개의 박스로 구성되어
          있으며, 반응형 구조에서도 잘 유지되도록 유연하게 설정되었습니다.
        </li>
        <li>
          <strong>푸터 영역</strong>은 세 부분으로 나눠서 각각 20%, 60%, 20%로
          균형 있게 배치했습니다.
        </li>
      </ul>
      <p>
        이번 유형도 실무에서 많이 쓰이는 레이아웃 구조이니, 반복해서
        연습해보세요! 🙌
      </p>

      <h4>4. 마무리</h4>
      <p>
        이렇게 해서 D-2 유형도 완성되었습니다! 👏 D-1 유형과의 차이를 잘
        비교해가며 작업하셨다면, 실제 구조 설계에 대한 이해가 한층 더 깊어졌을
        거예요.
      </p>
      <p>
        지금처럼 기본기를 차곡차곡 쌓아간다면 어떤 유형이든 충분히 해낼 수
        있습니다. 다음은 D-3 유형으로 넘어가볼까요? 계속해서 도전해봅시다! 💪🔥
      </p>
    </>
  )
}
