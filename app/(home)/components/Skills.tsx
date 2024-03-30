"use client"

import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiGit, SiJavascript, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiSupabase, SiSvelte, SiTailwindcss } from 'react-icons/si'

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
            text: "Supabase",
            Icon: SiSupabase,
        },
        {
            text: "Tailwind",
            Icon: SiTailwindcss,
        },{
            text: "Git",
            Icon: SiGit,
        },
        {
            text: "Javascript",
            Icon: SiJavascript,
        },
        {
            text: "Node.js",
            Icon: SiNodedotjs,
        },
        {
            text: "Postgresql",
            Icon: SiPostgresql,
        },
        {
            text: "Svelte",
            Icon: SiSvelte,
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