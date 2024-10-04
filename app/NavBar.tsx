'use client';

import Link from 'next/link'
import Image from 'next/image';
import logo from '../images/logo.png'
import React from 'react'
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

const NavBar = () => {
    const currentPath = usePathname();

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
                    // Color of the text changes based on whether it's current page or not.
                    // 900 for current page, 500 for not current page, 800 for hovering 
                    // using the classNames method from classnames to make it cleaner -> it takes
                    // a key-value pair but checks value == true for when to use key
                    className={classNames({
                        'text-zinc-900' : link.href === currentPath,
                        'text-zinc-500' : link.href !== currentPath,
                        'hover:text-zinc-800 transition-colors' : true,
                    })} 
                    // non classNames version
                    // `${link.href === currentPath ? 'text-zinc-900' : 'text-zinc-500'} 
                    // hover:text-zinc-800 transition-colors` 
                    href={link.href}>{link.label}</Link>)}
            </ul>
        </nav>
    )
}

export default NavBar
