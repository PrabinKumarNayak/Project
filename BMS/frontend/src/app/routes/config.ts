import type { ComponentType } from "react"

import Cart from "@/pages/Cart/Cart"
import Categories from "@/pages/Categories/Categories"
import Home from "@/pages/Home/Home"
import Profile from "@/pages/Profile/Profile"
import Wishlist from "@/pages/Wishlist/Wishlist"

export interface AppRoute {
  path: string
  element: ComponentType
  label: string
}

export const appRoutes: AppRoute[] = [
  {
    path: "/",
    element: Home,
    label: "Home",
  },

  {
    path: "/categories",
    element: Categories,
    label: "Categories",
  },

  {
    path: "/wishlist",
    element: Wishlist,
    label: "Wishlist",
  },

  {
    path: "/cart",
    element: Cart,
    label: "Cart",
  },

  {
    path: "/profile",
    element: Profile,
    label: "Profile",
  },
]