'use client'

import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { deleteContact } from '@/lib/actions/contact.action'
import { Button } from '@/components/ui/button'

export default function ContactDelete({ contactId }: { contactId: string }) {
  const router = useRouter()
  const handleDelete = async () => {
    if (!confirm('정말 이 문의를 삭제하시겠습니까?')) return
    const res = await deleteContact(contactId)
    if (res.success) {
      toast.success('문의가 삭제되었습니다.')
      router.refresh()
    } else {
      toast.error(res.error || '삭제에 실패했습니다.')
    }
  }

  return (
    <Button
      onClick={handleDelete}
      variant='destructive'
      size='sm'
      className='py-1 px-2 text-xs'
    >
      삭제
    </Button>
  )
}
