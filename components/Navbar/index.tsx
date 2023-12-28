import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header>
        <div className='flex md:flex-row items-center justify-center gap-8 p-4'>
            <Link href="/" className=''>Home</Link>
            <Link href="/project" className=''>Project</Link>
            <Link href="/showcase" className=''>Archive</Link>
        </div>
    </header>
  )
}

export default Navbar