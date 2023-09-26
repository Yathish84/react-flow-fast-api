"use client"
import React from 'react'

export default function ConnectorBtn({icon:Icon , label}) {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('type', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };
  return (
   <button 
        className='border p-1 rounded-md flex items-center justify-center text-blue-600'
        onDragStart={(event) => onDragStart(event, label)} 
        draggable
   >
        <Icon size={35} color='#0064a5' className=' font-bold' />
   </button>
  )
}
