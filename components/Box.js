import React from 'react'
import { twMerge } from 'tailwind-merge'

export default function Box({children,className}) {
  return (
    <div 
      className={twMerge(
        `
        bg-white 
        rounded-lg 
        h-fit
        w-full   
       
        `, 
        className
      )}>
      {children}
    </div>
  )
}
