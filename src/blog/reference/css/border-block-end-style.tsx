import ReferBread from '@/components/refer/refer-bread'

export default function BorderBlockEndStyle() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='border-block-end-style' />
        <h2>border-block-end-style</h2>
        <p>
          border-block-end-style은 CSS의 논리 속성(Logical Property) 중 하나로, 요소의 블록 방향
          끝쪽 테두리(기본적으로 아래쪽)의 선 스타일을 설정하는 속성입니다.
        </p>
      </div>
      {/* side */}
      <div className='side'>
        <div className='sticky top-4 h-[100vh]'>
          <div className='no-scrollbar h-full overflow-auto pb-10'>
            <div className='ad w-[300px] h-[300px] bg-amber-100'></div>
          </div>
        </div>
      </div>
    </>
  )
}
