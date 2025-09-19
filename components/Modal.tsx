'use client'
import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'


type Props = {
isOpen: boolean
onClose: () => void
children: React.ReactNode
}


export default function Modal({ isOpen, onClose, children }: Props){
return (
<AnimatePresence>
{isOpen && (
<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
className="fixed inset-0 z-50 flex items-center justify-center p-4"
>
<motion.div
initial={{ scale: 0.97, y: 10 }}
animate={{ scale: 1, y: 0 }}
exit={{ scale: 0.97, y: 10 }}
transition={{ duration: 0.2 }}
className="max-w-xl w-full bg-white rounded-2xl shadow-2xl p-6"
>
<div className="flex justify-end">
<button className="text-slate-500" onClick={onClose}>Close</button>
</div>
<div>{children}</div>
</motion.div>


{/* backdrop */}
<motion.div onClick={onClose} className="absolute inset-0 bg-black/30" />
</motion.div>
)}
</AnimatePresence>
)
}