import * as React from 'react'
import Link from 'next/link'
import { NavMenuItemType } from '@/lib/types'
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'

const getRowSpanClass = (rowSpan?: number) => {
  if (rowSpan && rowSpan >= 2) return `nav__link row-span-${rowSpan}`
  if (rowSpan === 1) return 'nav__hover row-span-1'
  return ''
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
