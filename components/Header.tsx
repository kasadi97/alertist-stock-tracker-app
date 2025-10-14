import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import NavItems from './NavItems'
import UserDropdown from './UserDropdown'

const header = () => {
  return (
    <header className='sticky top-0 header'>
      <div className = "container header-wrapper">
        <Link href="/"> <Image src="/assets/icons/logo.svg" alt="Alarmist logo" 
          width={140} height={32} className='h-8 w-auto cursor-pointer'/>
        </Link>
        <nav className='hidden sm:block'>
          <NavItems />
        </nav>
        <UserDropdown />
      </div>
    </header>
  )
}

export default header