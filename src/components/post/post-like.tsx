'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'
import { toast } from 'sonner'
import { likePost } from '@/lib/actions/post.action'

export default function PostLike({
  postId,
  initialLikes,
}: {
  postId: string
  initialLikes?: number
}) {
  const [likes, setLikes] = useState(initialLikes ?? 0)
  const [loading, setLoading] = useState(false)

  const handleLike = async () => {
    if (loading) return
    setLoading(true)

    const res = await likePost(postId)

    if (res.success) {
      setLikes(res.numLikes ?? likes + 1)
      toast.success(res.message)
    } else {
      toast.error(res.message)
    }

    setLoading(false)
  }

  return (
    <button
      onClick={handleLike}
      disabled={loading}
      className='flex items-center gap-1 bg-red-100 px-3 py-1 rounded-2xl text-red-500 hover:text-red-600 text-sm font-poppins'
    >
      <Heart className='w-4 h-4' />
      <span>{likes}</span>
    </button>
  )
}
