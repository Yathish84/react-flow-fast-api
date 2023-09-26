import React from 'react'
import { Handle , Position } from 'reactflow'
import {AiOutlineClose} from 'react-icons/ai'
import Box from '@/components/Box'
import {BiLogoPostgresql} from 'react-icons/bi'
export default function PGSQLConnector({data , isConnectable}) {
  return (
    <Box className='w-48 h-24 border p-1 border-blue-400 shadow-xl'>
        <Handle
          type="target"
          position={Position.Left}
          // style={{ background: '#555' }}
          onConnect={(params) => console.log('handle onConnect', params)}
          isConnectable={isConnectable}
          className=' w-2 h-2'
        />
       <div className='border-[#0064a5] w-full h-full flex flex-col divide-y-1' >
          <div className='flex w-full items-center justify-between '>
            <p className=' text-md font-medium truncate text-neutral-400'>Postgress SQL</p>
            <div>
              <AiOutlineClose size={20} color='#D22B2B' className='cursor-pointer' />
            </div>
          </div>
          <div className=' cursor-pointer flex-1 flex items-center h-full py-1'>
            <BiLogoPostgresql size={50} className='text-[#0064a5]' />
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
