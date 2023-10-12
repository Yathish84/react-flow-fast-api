import { Checkbox ,cn } from '@nextui-org/react'
import React from 'react'

export default function Checkboxx({value }) {
  return (
     <Checkbox
    //   aria-label="hello"
        color='default'
      classNames={{
        base: cn(
          "group inline-flex max-w-full w-full bg-content1 m-0 ",
          "hover:bg-neutral-100  items-center ",
          "cursor-pointer rounded-lg  p-4 border-2 border-transparent",
          "data-[selected=true]:border-neutral-300"
        ),
        icon:'bg-black text-white w-5 h-5 p-1 rounded-md',
        label: "w-full ",

      }}
      value={value}
    >
      <div className="w-full">
       
        <p className='text-neutral-500 group-hover:text-neutral-600'>{value}</p>
      </div>
    </Checkbox>
  )
}
