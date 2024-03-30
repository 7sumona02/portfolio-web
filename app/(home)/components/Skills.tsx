"use client"

import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiAdobephotoshop, SiCplusplus, SiFigma, SiGit, SiHtml5, SiJavascript, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiRenpy, SiSupabase, SiSvelte, SiTailwindcss } from 'react-icons/si'

const Skills = () => {
    const skills = [
        {
            text: "React",
            Icon: SiReact,
        },
        {
            text: "Next.js",
            Icon: SiNextdotjs,
        },
        {
            text: "Python",
            Icon: SiPython,
        },
        {
            text: "Tailwind",
            Icon: SiTailwindcss,
        },{
            text: "C++",
            Icon: SiCplusplus,
        },
        {
            text: "Javascript",
            Icon: SiJavascript,
        },
        {
            text: "HTML",
            Icon: SiHtml5,
        },
        {
            text: "Ren'Py",
            Icon: SiRenpy,
        },
        {
            text: "Photoshop",
            Icon: SiAdobephotoshop,
        },
        {
            text: "Figma",
            Icon: SiFigma,
        },
    ]
  return (
    <div className='max-w-5xl mx-auto px-8'>
        <Title text="Skills 🔪" className='flex flex-col items-center justify-center -rotate-6 ' />
        <HoverEffect items={skills} />
    </div>
  )
}

export default Skills