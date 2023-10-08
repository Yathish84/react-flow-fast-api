import React from 'react';
import { Handle , Position } from 'reactflow';
import {BsFillFileEarmarkCodeFill} from 'react-icons/bs';
import Box from '@/components/Box';
import {Chip ,Code , Accordion, AccordionItem} from "@nextui-org/react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function RootNode({data , isConnectable}) {
  const node = {
    "type": "root",
    "data": {
        "filename": "UploadModel",
        "description": "The `UploadModel` component provides an interface for users to upload JSX files. It makes use of various hooks to manage its state, transitions, and node visualization. It relies on multiple components for dialog presentation, file uploading, and button actions.",
        "libraries": [
            {"name": "useUploadTrigger", "path": "@/hooks/useUploadTrigger"},
            {"name": "React", "path": "react"},
            {"name": "Dialog", "path": "../components/Dialog"},
            {"name": "FileUploder", "path": "../components/FileUploder"},
            {"name": "AiOutlineClose", "path": "react-icons/ai"},
            {"name": "Button", "path": "../components/Button"},
            {"name": "useNodeStore", "path": "@/hooks/useNodeStore"},
            {"name": "getOpenAiRes", "path": "@/Actions/getOpenAiRes"},
            {"name": "uploadFiles", "path": "@/ActionCallers/ServerActions"},
            {"name": "nanoid", "path": "nanoid"}
        ],
        "details": [
            {"name": "useState", "description": "Used for managing local state within the component."},
            {"name": "useTransition", "description": "Used for managing state transitions."},
            {"name": "useUploadTrigger", "description": "Custom hook for triggering uploads."},
            {"name": "useNodeStore", "description": "Custom hook for managing node state."}
        ]
    }
}

const lib = `${data.libraries}`
  
  return (
    <Box className='w-96 h-max  border p-3 shadow-xl nowheel dark:bg-black'>
        <Handle
          type="target"
          position={Position.Left}
          // style={{ background: '#555' }}
          onConnect={(params) => console.log('handle onConnect', params)}
          isConnectable={isConnectable}
          className=' w-2 h-2'
        />
         <div>
          <div className='flex space-x-2 items-center'>
            <BsFillFileEarmarkCodeFill className='text-blue-500 rounded'  size={30}/>
            <p className='text-neutral-500'>{data?.filename}</p>
          </div>
          <div className='overflow-x-scroll'>
            <label htmlFor="" className='text-sm font-medium'>Description</label>
            <p className='text-sm  text-neutral-500 '>{data?.description}</p>
          </div>
          <div className='' >
          <Accordion 
            className='px-0'
            defaultSelectedKeys='all'
            selectionMode="multiple"
          >
            <AccordionItem 
              variant="splitted"
              isCompact 
              key="1" 
              aria-label="Code" 
              title="Imports"
              classNames={{
                base:'hover:bg-neutral-100 rounded-md ',
                title:'text-sm font-medium p-0'
              }}
              // disableAnimation={true}
            >
             
                {data?.libraries?.map((library,i) => (
                  <>
                  <Chip size='sm' key={i} classNames={{base:'m-0.5'}}>{library.name}</Chip> 
                  {/* <Chip size='sm'>{library.path}</Chip> , */}
                  </>
                )
                )}   
             
            </AccordionItem>
            <AccordionItem 
              variant="splitted"
              isCompact 
              key="2" 
              aria-label="Code" 
              title="Hooks"
              // disableAnimation={true}
              // motionProps={
              //   {
              //     initial:'collapsed',
              //     animate:"open",
              //     exit:"collapsed",
              //     variants:{
              //       open: { opacity: 1, height: "auto" },
              //       collapsed: { opacity: 0, height: 0 }
              //     },
              //     transition:{ duration: 0.5 }
              //   }
              // }
              classNames={{
                base:'hover:bg-neutral-100 rounded-md ',
                title:'text-sm font-medium p-0'
              }}
            >
             
                {data?.details?.map((detail , i) => (
                  <>
                  <Chip size='sm' key={i} classNames={{base:'m-0.5'}}>{detail.name}</Chip> 
                  {/* <Chip size='sm'>{library.path}</Chip> , */}
                  </>
                )
                )}   
             
            </AccordionItem>
          </Accordion>
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
