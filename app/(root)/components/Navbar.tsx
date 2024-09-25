'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'


const Navbar = () => {

    const pathname = usePathname();

    const links = [
        {
            href: '/',
            label: 'Home',
            isActive: pathname === '/'
        },
        {
            href: '/cart',
            label: 'Cart',
            isActive: pathname === '/cart'
        }
    ]
  return (
    <nav className='flex items-center justify-between py-6 border-b mb-12'>
        <Link href={'/'} className='text-2xl'>
            <p>Logo</p>
        </Link>
        <ul className='flex items-center gap-4'>
            {links.map((link) => {
                const { href, label, isActive } = link;
                return (
                    <li key={href}>
                        <Link href={href} className={cn(
                            'text-lg font-semibold',
                            isActive ? 'text-primary' : 'text-muted-foreground'
                        )}>
                            <p>{label}</p>
                        </Link>
                    </li>
                )
            })}
        </ul>
    </nav>
  )
}

export default Navbar