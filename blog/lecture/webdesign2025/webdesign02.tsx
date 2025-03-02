import CodeBlock from '@/components/post/post-code'

export default function Webdesign02() {
  return (
    <>
      <p>
        안녕하세요!!! 웹스토리보이입니다. 2023버전 웹디자인 기능사 실기시험에
        가장 중요한 레이아웃 연습을 시작하겠습니다. 레이아웃은 2023버전부터
        두개의 레이아웃이 추가되었습니다. 새로운 레이아웃이 조금 어려울 수
        있지만, 실제 사이트 제작에 있어 많이 활용되는 부분이기 때문에 알아두면
        도움이 될 것이라고 생각이 듭니다. 레이아웃은 실제 사이트 제작시 가장
        중요한 부분입니다. 레이아웃이 가장 기본이기 때문에 기본을 완벽하게
        익히면 어떤 유형이 나와도 코딩하는데 문제가 없을겁니다.
      </p>
      <p>
        2023 웹디자인 기능사에서는 크게 5가지 유형의 레이아웃을 제공하고,
        유형별로 4가지 레이아웃을 제공하고 있지만, 비슷비슷하기 때문에 총 5가지
        유형이라고 생각하면 됩니다. 만약 내가 코딩을 조금 해봤고, 첫번째
        레이아웃이 쉽다면 유형별로 하나씩 공부하시면 되고, 모르는 부분은 1~2개
        더 보시면 됩니다. 만약 처음으로 코딩을 한다면, 반복적인 연습이 필요하기
        때문에 20가지 유형을 다 보시는 것을 추천합니다. 코딩이라는 걸 처음
        해보시는 분들은 익숙하지 않아서 어려운 부분이 많을텐데, 그냥 무심코
        20개를 따라하시면, 시험장에 스스로 코딩하는 자신을 발견할 수 있을 겁니다
      </p>
      <CodeBlock
        language='html'
        code={`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>웹디자인기능사 레이아웃 A-1</title>
</head>
<body>
    <div class="wrap">
        <header>헤더</header>
        <section>콘텐츠</section>
        <footer>푸터</footer>
    </div>
</body>
</html>`}
      />
      <p>
        그럼 시작해보겠습니다. 코딩을 하면서 정말 기초적인 부분이나 검색해서 알
        수 있는 부분들은 아래 링크를 걸어두겠습니다. 주의할 점이 있다면, 이해가
        안가도 그냥 하시면 됩니다. 마지막 강의를 볼 때쯤이면 다 이해가 갈거예요.
        그래도 이해가 안가면 댓글 달아주세요!
      </p>
      <h2>1. 기본 구조 만들기</h2>
      <p>
        웹 문서 만들기 : VSCODE를 실행하고 webd2023폴더를 만들고 A-1.html파일을
        만들겠습니다. !를 치고 tab버튼을 누르면 다음과 같이 나타납니다. lang는
        ko로 변경하고 title은 웹디자인기능사 레이아웃 A-1으로 변경해주겠습니다.
        상단에 디자인 보기 버튼을 누르면 전체적인 레이아웃을 한 눈에 볼 수
        있으니 참고해주세요!
      </p>
      <p>
        구조 만들기 : 전체적인 레이아웃을 확인하고 전체적인 구조를 만들어
        보겠습니다. 이 유형은 크게 header, slider, contents, footer로 구성되어
        있으며, 전체적인 영역을 감싸는 wrap으로 구성되어 있습니다. 이 부분은
        body 영역에 아래와 같이 표현하겠습니다. 웹 문서에서 영역을 잡을 때는
        블록구조1 태그를 이용하여 작업합니다.
      </p>
      <p>
        구조 영역 표시하기 : 전체적인 구조를 작업했으니 CSS를 통해 구조가 잘
        잡혔는지 확인해보겠습니다. margin: 0 auto;는 블록구조를 가운데 정렬하기
        위한 속성입니다. 마진은 박스의 바깥쪽 여백을 설정하기 위함이고, 0은
        위아래, auto는 왼쪽, 오른쪽 값을 자동으로 맞추기 위함입니다. 이렇게 하면
        width값이 설정된 박스는 가운데 정렬이 됩니다. 각각의 박스의 width,
        height, background-color을 설정해주면, 브라우저 화면에 표현이 됩니다.
      </p>
    </>
  )
}
