import Link from 'next/link'
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { MenuItem } from '@/lib/types'

interface AdminMenuItemProps {
  menu: MenuItem
}

export default function AdminMenu({ menu }: AdminMenuItemProps) {
  return (
    <NavigationMenuItem>
      <Link href={menu.href} legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          {menu.name}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  )
}
