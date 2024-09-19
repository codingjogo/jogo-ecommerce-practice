'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const DashboardNav = () => {

    const pathname = usePathname();

    const links = [
        {
            href: '/dashboard',
            label: 'Overview',
            isActive: pathname === '/dashboard'
        }
    ]
  return (
    <nav className='container md:px-0 py-5'>
        <ul>
        {links.map(link => (
            <li key={link.href}>
                <Link href={link.href} className={cn(
                    'text-lg',
                    link.isActive ? 'text-primary' : 'text-muted-foreground'
                )}>
                    {link.label}
                </Link>
            </li>
        ))}
        </ul>
    </nav>
  )
}

export default DashboardNav