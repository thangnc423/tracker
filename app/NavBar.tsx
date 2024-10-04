import Link from 'next/link'
import Image from 'next/image';
import logo from '../images/logo.png'
import React from 'react'

const NavBar = () => {
    const links = [
        {label: 'Dashboard', href: '/'},
        {label: 'Reviews', href: '/reviews'},
    ]

    return (
        <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
            <Link href="/">
                <Image src={logo} alt={"flamechasers"} width={50} height={50}/>
            </Link>
            <ul className='flex space-x-6'>
                {links.map(link => 
                <Link 
                    key={link.href} 
                    className='text-purple-500 hover:text-purple-800 transition-colors' 
                    href={link.href}>{link.label}</Link>)}
            </ul>
        </nav>
    )
}

export default NavBar
