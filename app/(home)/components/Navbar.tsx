import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";


const Navbar = ({className}:{className?:string}) => {
    const socials = [
        {
            link: "https://www.linkedin.com/in/sumona-biswas/",
            label: "Linkedin",
            Icon: FaLinkedin,
        },
        {
            link: "https://github.com/7sumona02",
            label: "Github",
            Icon: FaGithub,
        },
    ]
  return (
    <nav className={cn('py-10 flex justify-between items-center',className)}>
        <h1 className='text-white text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>Sumona 😌</h1>
        <div className='flex items-center gap-5'>
            {socials.map((social, index) => {
                const Icon = social.Icon
                return <Link href={social.link} key={index} aria-label={social.label}>
                    <Icon className='text-white w-5 h-5 hover:scale-125 transition-all' />
                </Link>
            })}
        </div>
    </nav>
  )
}

export default Navbar