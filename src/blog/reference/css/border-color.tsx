import ReferBread from '@/components/refer/refer-bread'

export default function BorderColor() {
  return (
    <>
      {/* cont */}
      <div className='cont'>
        <ReferBread href1='reference' href2='css' title='border-color' />
        <h2>border-color</h2>
        <p></p>
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
