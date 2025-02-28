import Link from 'next/link'
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { MenuItem } from '@/lib/types'
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'

interface AdminMenuItemProps {
  menu: MenuItem
}

export default function AdminMenu({ menu }: AdminMenuItemProps) {
  return (
    <NavigationMenuItem>
      <Link href={menu.href} legacyBehavior passHref className='font-light'>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          {menu.name}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  )
}
