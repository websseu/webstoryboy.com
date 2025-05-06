import CodeBlock from '@/components/post/post-code'

export default function Webdesign03() {
  return (
    <>
      <h3>소개</h3>
      <p>
        안녕하세요! 웹스토리보이입니다. 이번에는 A-3 유형 레이아웃을 함께
        만들어보겠습니다.
      </p>
      <p>
        A-3 유형은 A-2 유형과 거의 동일한 구조를 가지고 있으며, 푸터(footer)
        부분만 약간 다른 형태로 구성되어 있습니다. 하단에는 메뉴와 카피라이터
        영역이 추가되는 간단한 구조이기 때문에 전체 레이아웃 흐름을 이해하고
        있다면 어렵지 않게 따라오실 수 있을 거예요.
      </p>
      <p>
        A유형 시리즈는 기본 골격은 같고, 세부적인 부분(특히 푸터 구조)만 조금씩
        달라지는 방식이기 때문에, 한 번 익혀두면 나머지 유형도 금방 습득할 수
        있습니다. 그럼, 바로 시작해볼까요? 😅 렛츠기릿!
      </p>

      <h4>1. 기본 구조 만들기</h4>
      <p className='uline'>
        웹 문서 만들기 : VSCODE를 실행하고 A-3.html파일을 만들겠습니다.
      </p>
      <p>
        !를 치고 tab버튼을 누르면 다음과 같이 나타납니다. lang는 ko로 변경하고
        title은 웹디자인기능사 레이아웃 A-3으로 변경해주겠습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>웹디자인기능사 레이아웃 A-3</title>
</head>
<body>
    
</body>
</html>`}
      />
      <p>
        전체적인 영역을 감싸고 있는 wrap을 만들고, 자식 요소로 header, slider,
        contents, footer를 만들겠습니다. 참고로 main 태그는 사이트에서 한번 밖에
        사용하지 못합니다.
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
        * 표시는 전체 태그를 선택하는 선택자입니다. 여기에 마진과 패딩을 0을
        주는 이유는 모든 태그에는 보이지 않는 여백이 존재합니다. 그 여백이 모든
        브라우저에서 동일하다면 상관없지만 조금씩 틀리기 때문에 모든 요소에
        여백을 초기화 시켜주는 겁니다. 그래서 넣어 줬어요!😝 각 요소에 가로,
        세로, 백그라운드를 넣어주면 영역을 볼 수 있습니다.
      </p>
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
        헤더 영역은 기존과 동일합니다. 로고 영역은 사이트 문서에 있어 가장
        중요한 타이틀 역활을 하기 때문에 h1 태그를 사용할 수 있습니다. 딱
        정해진건 아니지만 대부분에 이렇게 많이 사용합니다. 여러분들도 쓰고
        싶은거 쓰시면 됩니다. 전 h1태그를 사용하겠습니다. 두개의 영역을 나누어
        주기 위해 flex를 사용하였고, 자식 요소에 width에 따라 영역이
        설정되었습니다.
      </p>
      <CodeBlock
        language='html'
        code={`<div id="header">
    <h1 class="logo"></h1>
    <div class="nav"></div>
</div>
<!-- //header -->`}
      />
      <CodeBlock
        language='css'
        code={`#header {
    width: 100%;
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
}`}
      />

      <p>슬라이드 영역은 별거 없으니 표시만 하고 넘어가겠습니다. 슝~~~</p>
      <CodeBlock
        language='html'
        code={`<div id="slider"></div>
<!-- //slider -->`}
      />
      <CodeBlock
        language='css'
        code={`#slider {
    width: 100%;
    height: 300px;
    background-color: #d9d9d9;
}`}
      />

      <p>
        컨텐츠 영역은 총 3개의 섹션으로 구성되어 있습니다. 각 섹션은 독립적인
        의미를 가지기 때문에 이번에는 section 태그를 사용해서 작업했습니다. HTML
        요소를 선택하는 방법에는 여러 가지가 있는데, 여기서는 class를 이용해
        스타일을 적용했습니다.
      </p>
      <p>
        그럼 ID는 왜 쓰고, Class는 왜 쓸까요? ID와 Class는 모두 태그에
        &quot;이름&ldquo;을 부여하는 방법입니다. ID는 &quot;하나&ldquo;의 고유한
        요소를 식별할 때, Class는 &quot;여러 요소&ldquo;를 그룹 지을 때
        사용합니다. 지금은 &quot;이런 게 있구나!&ldquo; 정도로만 가볍게 알고
        넘어가셔도 괜찮습니다. 궁금하면 아래 참고
      </p>
      <p>
        코딩을 계속 반복하다 보면 자연스럽게 상황에 맞는 선택법이 익혀질 거예요.
        처음부터 모든 걸 완벽히 이해하려고 하기보다는, 직접 따라 하면서 몸에
        익히는 것이 훨씬 빠른 학습 방법입니다.
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
    width: 100%;
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
}`}
      />
      <p>
        마지막으로 푸터 영역을 확인해보겠습니다. 이번에 2단으로 나누고 두번째
        영역이 또 2단으로 나누어지는 구조입니다. 어렵지 않습니다. 하나씩 하고 또
        하면 그냥됩니다. 먼저 .footer1과 footer2를 작업하고 footer2-1과
        footer2-2를 작업하면 됩니다.
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
    height: 100px;
    background-color: #b1b1b1;
}
#footer .footer2 {
    width: 80%;
}
#footer .footer2 .footer2-1 {
    width: 100%;
    height: 50px;
    background-color: #a3a3a3;
}
#footer .footer2 .footer2-2 {
    width: 100%;
    height: 50px;
    background-color: #9d9d9d;
}`}
      />

      <h4>3. 정리</h4>
      <h5>✅ ID와 CLASS의 차이점</h5>
      <ul>
        <li>
          <span className='uline'>
            아이디(id)는 페이지 안에서 단 한 번만 사용할 수 있습니다.
          </span>{' '}
          즉, 고유한 식별자 역할을 합니다. 예를 들어, header나 footer처럼
          문서에서 한 번만 등장하는 중요한 영역에 id를 설정합니다. CSS에서는
          #아이디명 형태로 선택해서 스타일을 적용하고, 자바스크립트에서도 특정
          요소를 빠르게 찾을 때 사용합니다.
        </li>
        <li>
          <span className='uline'>
            클래스(class)는 같은 스타일이나 기능을 적용하고 싶은 여러 요소에
            반복해서 사용할 수 있는 이름입니다.
          </span>{' '}
          예를 들어, 여러 개의 메뉴 버튼, 카드, 섹션 등에 같은 클래스를 부여해서
          한번에 스타일을 지정할 수 있습니다. CSS에서는 .클래스명으로 선택하고,
          자바스크립트에서도 같은 클래스를 가진 여러 요소를 다룰 수 있습니다.
        </li>
        <li>
          차이를 한마디로 정리하면 id는{' '}
          <em className='uline'>단 하나, 고유한 대상</em> class는{' '}
          <em className='uline'>여러 개, 공통된 대상</em> 을 위해 사용한다고
          기억하시면 됩니다.
        </li>
        <li>
          스타일을 적용할 때 우선순위를 따지면 id가 class보다 더 강한 힘을
          가집니다. 그래서 특별히 중요한 요소에 스타일을 지정할 때 id를 쓰는
          경우가 많습니다.
        </li>
        <li>
          다만 최근에는 유지보수 편의성과 재사용성을 위해 id보다 class를
          중심으로 스타일링하는 것이 더 권장되는 추세입니다.
        </li>
        <li>
          아직 차이점을 정확히 모르셔도 됩니다. 앞으로 반복 사용하다보면 이해가
          됩니다.
        </li>
      </ul>

      <h4>4. 마무리</h4>
      <p>
        이번 레이아웃을 통해 기본 구조 안에서 섹션을 추가하거나 세부적으로
        나누는 방법을 연습했습니다.
      </p>
      <p>
        여기까지 차근차근 따라오셨다면, 이제 기본 레이아웃 구성 능력이 눈에 띄게
        좋아지고 있을 거예요. 수고 많으셨습니다! 🎉 다음 강의에서 또 만나요!
      </p>
    </>
  )
}
