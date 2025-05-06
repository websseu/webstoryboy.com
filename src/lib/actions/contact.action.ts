'use server'

import { connectToDatabase } from '@/lib/db'
import { IContactInput } from '../types'
import Contact from '../db/model/contact.model'
import { revalidatePath } from 'next/cache'

// 문의사항 만들기
export async function createContact(data: IContactInput) {
  try {
    await connectToDatabase()
    await Contact.create(data)

    return {
      success: true,
    }
  } catch (error) {
    return {
      success: false,
      error: JSON.stringify(error),
    }
  }
}

// 문의사항 전체 목록 가져오기
export async function getContacts() {
  try {
    await connectToDatabase()

    const contacts = await Contact.find()
      .sort({ createdAt: -1 }) // 최신순 정렬
      .lean()

    return {
      success: true,
      contacts,
    }
  } catch (error) {
    return {
      success: false,
      error: JSON.stringify(error),
    }
  }
}

// 문의사항 삭제하기
export async function deleteContact(contactId: string) {
  try {
    await connectToDatabase()
    const result = await Contact.findByIdAndDelete(contactId)
    if (!result) throw new Error('해당 문의가 존재하지 않습니다.')

    revalidatePath('/admin/contact')
    return { success: true }
  } catch (error) {
    return { success: false, error: JSON.stringify(error) }
  }
}
