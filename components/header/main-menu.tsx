import * as React from 'react'
import Link from 'next/link'
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import { NavMenuItemType } from '@/lib/types' // ✅ 타입 import

const getRowSpanClass = (rowSpan?: number) => {
  if (rowSpan && rowSpan >= 2) return `nav__link row-span-${rowSpan}` // rowSpan이 2, 3, 4일 경우
  if (rowSpan === 1) return 'nav__hover row-span-1' // rowSpan이 1일 경우
  return '' // rowSpan이 없는 경우 기본값
}

interface MenuItemProps {
  title: string
  items: NavMenuItemType[]
}

export default function MainMenu({ title, items }: MenuItemProps) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className='nav__ul'>
          {items.map((item, index) => (
            <li key={index} className={getRowSpanClass(item.rowSpan)}>
              <NavigationMenuLink asChild>
                <Link href={item.href}>
                  <div>{item.title}</div>
                  <p>{item.description}</p>
                </Link>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}
