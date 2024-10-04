import Link from 'next/link'
import Image from 'next/image';
import logo from '../images/logo.png'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href="/">
            <Image src={logo} alt={"flamechasers"} width={50} height={50}/>
        </Link>
        <ul className='flex space-x-6'>
            <li><Link href="/">Dashboard</Link></li>
            <li><Link href="/reviews">Reviews</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar
