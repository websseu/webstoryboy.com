import { z } from 'zod'
import {
  PostInputSchema,
  PostUpdateSchema,
  UserInputSchema,
  UserNameSchema,
  UserSignInSchema,
  UserSignUpSchema,
} from './validator'

export type MenuItem = {
  name: string
  href: string
}

export type subject = {
  title: string
  href: string
}

export type TitleItem = {
  title: string
  category: string
  text: string
  desc: string
  subjects: subject[]
}

// 메뉴 데이터 타입 (네비게이션)
export type NavMenuItemType = {
  title: string
  description: string
  href: string
  isMain?: boolean
  rowSpan?: number
}

// 네비게이션 섹션 타입
export type NavItem = {
  title: string
  items: NavMenuItemType[]
}

export type subItem = {
  label: string
  value: string
}

export type CateItme = {
  label: string
  value: string
  subCategories: subItem[]
}

export type Data = {
  adminMenus: MenuItem[]
  menuData: NavItem[]
  categories: CateItme[]
}

// 가상 데이터
export type InputData = {
  posts: IPostInput[]
  users: IUserInput[]
}

// 회원가입 및 로그인
export type IUserInput = z.infer<typeof UserInputSchema>
export type IUserSignIn = z.infer<typeof UserSignInSchema>
export type IUserSignUp = z.infer<typeof UserSignUpSchema>
export type IUserName = z.infer<typeof UserNameSchema>

// 글 목록
export type IPostInput = z.infer<typeof PostInputSchema>
export type IPostUpdate = z.infer<typeof PostUpdateSchema>
