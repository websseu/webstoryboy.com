'use client'

import { useEffect } from 'react'
import { increasePostViews } from '@/lib/actions/post.action'

export default function PostViews({ postId }: { postId: string }) {
  useEffect(() => {
    if (postId) {
      increasePostViews(postId)
    }
  }, [postId])

  return null
}
