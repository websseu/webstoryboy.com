import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'

export default function MenuTest() {
  return (
    <div className='nav'>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='nav__ul'>
                <li className='row-span-4 nav__link'>
                  <NavigationMenuLink asChild>
                    <Link href={'/'}>
                      <div>webstoryboy</div>
                      <p>
                        웹스토리보이는 최신 웹 기술을 연구하고 공유하는 개발
                        블로그입니다.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li className='row-span-1 nav__hover'>
                  <NavigationMenuLink asChild>
                    <Link href={'/'}>
                      <div>튜토리얼</div>
                      <p>CSS와 GSAP 강의가 준비되어 있습니다.</p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li className='row-span-1 nav__hover'>
                  <NavigationMenuLink asChild>
                    <Link href={'/'}>
                      <div>튜토리얼</div>
                      <p>CSS와 GSAP 강의가 준비되어 있습니다.</p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li className='row-span-1 nav__hover'>
                  <NavigationMenuLink asChild>
                    <Link href={'/'}>
                      <div>튜토리얼</div>
                      <p>CSS와 GSAP 강의가 준비되어 있습니다.</p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li className='row-span-1 nav__hover'>
                  <NavigationMenuLink asChild>
                    <Link href={'/'}>
                      <div>튜토리얼</div>
                      <p>CSS와 GSAP 강의가 준비되어 있습니다.</p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Tutorial</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='nav__ul'>
                <li className='row-span-2 nav__link'>
                  <NavigationMenuLink asChild>
                    <Link href={'/'}>
                      <div>Tutorial</div>
                      <p>
                        웹 개발을 처음 시작하는 분들을 위한 기초부터 실전까지의
                        튜토리얼 제공
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li className='row-span-1 nav__hover'>
                  <NavigationMenuLink asChild>
                    <Link href={'/uiux-design'}>
                      <div>UI/UX CSS Design</div>
                      <p>CSS와 GSAP을 활용한 UI/UX 디자인 강의</p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li className='row-span-1 nav__hover'>
                  <NavigationMenuLink asChild>
                    <Link href={'/gsap-animation'}>
                      <div>GSAP Interactive Animation</div>
                      <p>웹 애니메이션과 인터랙티브 UI 개발</p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Tutorial</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='nav__ul'>
                <li className='row-span-3 nav__link'>
                  <NavigationMenuLink asChild>
                    <Link href={'/'}>
                      <div>Reference</div>
                      <p>
                        HTML, CSS, JavaScript 등의 핵심 개념과 실전 예제 제공
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li className='row-span-1 nav__hover'>
                  <NavigationMenuLink asChild>
                    <Link href={'/uiux-design'}>
                      <div>HTML 레퍼런스</div>
                      <p>CSS와 GSAP을 활용한 UI/UX 디자인 강의</p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li className='row-span-1 nav__hover'>
                  <NavigationMenuLink asChild>
                    <Link href={'/gsap-animation'}>
                      <div>CSS 레퍼런스</div>
                      <p>웹 애니메이션과 인터랙티브 UI 개발</p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li className='row-span-1 nav__hover'>
                  <NavigationMenuLink asChild>
                    <Link href={'/gsap-animation'}>
                      <div>JavaScript 레퍼런스</div>
                      <p>웹 애니메이션과 인터랙티브 UI 개발</p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
