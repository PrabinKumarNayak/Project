import type { LucideIcon } from "lucide-react"

import {
  Heart,
  LayoutGrid,
  ShoppingCart,
  User,
} from "lucide-react"

export interface NavLinkItem {
  path: string
  label: string
  icon: LucideIcon
  showLabel: boolean
}

export const navLinks: NavLinkItem[] = [
  {
    path: "/categories",
    label: "Categories",
    icon: LayoutGrid,
    showLabel: true,
  },

  {
    path: "/wishlist",
    label: "Wishlist",
    icon: Heart,
    showLabel: true,
  },

  {
    path: "/cart",
    label: "Cart",
    icon: ShoppingCart,
    showLabel: false,
  },

  {
    path: "/profile",
    label: "Profile",
    icon: User,
    showLabel: false,
  },
]