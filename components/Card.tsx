'use client'
import React from 'react'
import { motion } from 'framer-motion'


type CardProps = {
  title?: string
  children?: React.ReactNode
  asLink?: string
}


export default function Card({ title, children }: CardProps){
return (
  <motion.article
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.35 }}
    className="bg-white text-black p-4 rounded-2xl shadow-sm border border-slate-100"
    >
    {title && <h3 className="text-sm font-medium mb-2">{title}</h3>}
    <div className="text-sm">{children}</div>
  </motion.article>
  )
}