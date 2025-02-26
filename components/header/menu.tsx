'use client'

import data from '@/lib/data'
import { usePathname } from 'next/navigation'
import MainMenu from './main-menu'
import AdminMenu from './admin-menu'
import {
  NavigationMenu,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'

export default function Menu() {
  const pathname = usePathname()
  const isAdmin = pathname.includes('/admin')

  return (
    <div className='nav'>
      <NavigationMenu>
        <NavigationMenuList>
          {isAdmin
            ? data.adminMenus.map((menu, index) => (
                <AdminMenu key={index} menu={menu} />
              ))
            : data.menuData.map((menu, index) => (
                <MainMenu key={index} title={menu.title} items={menu.items} />
              ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
