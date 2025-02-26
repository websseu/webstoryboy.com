import Link from 'next/link'

interface PaginationProps {
  currentPage: number
  totalPages: number
  baseUrl: string
}

export default function Pagination({
  currentPage,
  totalPages,
  baseUrl,
}: PaginationProps) {
  return (
    <>
      {totalPages > 1 && (
        <div className='flex items-center mt-4 font-nanum text-sm'>
          {/* 이전 페이지 버튼 */}
          {currentPage > 1 ? (
            <Link
              href={`${baseUrl}?page=${currentPage - 1}`}
              className='px-3 py-2 border rounded'
            >
              이전
            </Link>
          ) : (
            <span className='px-3 py-2 border rounded opacity-50 cursor-not-allowed'>
              이전
            </span>
          )}

          <span className='mx-2 text-black200'>
            {currentPage} / {totalPages}
          </span>

          {/* 다음 페이지 버튼 */}
          {currentPage < totalPages ? (
            <Link
              href={`${baseUrl}?page=${currentPage + 1}`}
              className='px-3 py-2 border rounded'
            >
              다음
            </Link>
          ) : (
            <span className='px-3 py-2 border rounded opacity-50 cursor-not-allowed'>
              다음
            </span>
          )}
        </div>
      )}
    </>
  )
}
