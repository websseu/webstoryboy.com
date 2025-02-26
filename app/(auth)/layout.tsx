import Link from 'next/link'

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header className='absolute left-2 top-2'>
        <h1 className='bg-black100 text-white100 font-poppins px-2'>
          <Link href={'/'}>story</Link>
        </h1>
      </header>
      <main className='flex items-center justify-center h-screen'>
        {children}
      </main>
    </>
  )
}
