import React from 'react'
import { Handle , Position } from 'reactflow'
import {AiOutlineClose} from 'react-icons/ai'
import Box from '@/components/Box'
export default function JSX({data , isConnectable}) {
  return (
    <Box className='w-48 h-20 border p-1 border-blue-400 '>
        <Handle
          type="target"
          position={Position.Left}
          // style={{ background: '#555' }}
          onConnect={(params) => console.log('handle onConnect', params)}
          isConnectable={isConnectable}
          className=' w-2 h-2'
        />
       <div className='border-blue-500 w-full h-full flex flex-col divide-y-1' >
          <div className='flex w-full items-center justify-between '>
            <p className=' text-md font-semibold truncate'>SQL</p>
            <div>
              <AiOutlineClose size={20} color='red' className='cursor-pointer' />
            </div>
          </div>
          <div className=' cursor-pointer flex-1 h-full '>
            <p>Add Icon</p>
          </div>
          </div>
          <Handle
            type="source"
            position={Position.Right}
            id="a"
            // style={{ background: '#555' }}
            isConnectable={isConnectable}
            className='w-2 h-2'
          />
    
    </Box>
  )
}
