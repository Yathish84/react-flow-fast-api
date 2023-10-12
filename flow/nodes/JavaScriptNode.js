import React from 'react'
import { Handle , Position } from 'reactflow'
import Box from '@/components/Box'
import { RiJavascriptFill} from 'react-icons/ri'
import {Chip ,Code , Accordion, AccordionItem , Badge} from "@nextui-org/react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Button from '@/components/Button'
import { PiWarningFill } from 'react-icons/pi'
import useRefactorTrigger from '@/hooks/useRefactorTrigger'




export default function JavaScriptNode({data , isConnectable}) {
  const {onOpen}= useRefactorTrigger()
  const node = {
    "type": "javascript",
    "data": {
        "functionName": "handleFileSelect",
        "description": "Function to handle file selection and set file data.",
        "code": "const handleFileSelect = (name, data) => {\n    console.log(name);\n    setFileData({\n        name,\n        data\n    });\n}",
        "dependencies": ["setFileData"],
        "optimizations": [
          {"description": "Remove `console.log` statements before moving to a production environment."},
          {"description": "Consider adding error handling or feedback for the user in case file selection fails."}
      ],
        "trigger": {
            "component": "FileUploder",
            "description": "File uploader component.",
            "jsx": "<FileUploder onFileSelect={handleFileSelect} />",
            "dependencies": ["handleFileSelect"]
        }
    }
}

// console.log(typeof data?.code.slice(data?.code.indexOf('`') + 1, data?.code.lastIndexOf('`')).trim())
  return (
    <Box className='w-96 h-max border p-3 shadow-xl nowheel dark:bg-black'>
        <Handle
          type="target"
          position={Position.Left}
          // style={{ background: '#555' }}
          onConnect={(params) => console.log('handle onConnect', params)}
          isConnectable={isConnectable}
          className=' w-2 h-2'
        />
        <div>
          <div className='flex space-x-2 items-center justify-between'>
            <div className='flex w-full space-x-2 items-center'>
            <RiJavascriptFill className='text-yellow-500 rounded '  size={30}/>
            <p className='text-neutral-500'>{data?.functionName}</p>

            </div>
            <div className=' cursor-pointer ' onClick={()=>onOpen(data)}>
                <Badge content={data?.optimizations.length}>
                    <PiWarningFill size={25} className='text-yellow-500 rounded  w-7'/>
                </Badge>
            </div>
          </div>
          <div className='w-full'>
            <label htmlFor="" className='text-sm font-medium'>Description</label>
            <p className='text-sm  text-neutral-500 break-words '>{data?.description}</p>
          </div>
          <div className='' >
          <Accordion className='px-0'>
            <AccordionItem 
              variant="splitted"
              isCompact 
              key="1" 
              aria-label="Code" 
              title="Code"
              classNames={{
                base:'hover:bg-neutral-100 rounded-md',
                title:'text-sm font-medium p-0'
              }}
            >
              <SyntaxHighlighter
                language="javascript"
                style={vs}
                // wrapLines={true}
                // showLineNumbers={true}
                // wrapLongLines={true}
                codeTagProps={{
                  style: { fontFamiily: "times new roman" }
                }}
              >
                {data.code}
              </SyntaxHighlighter>
              {/* <Code className='overflow-scroll break-word flex flex-wrap'>{data?.code}</Code> */}
            </AccordionItem>
          </Accordion>
            {/* <SyntaxHighlighter  className='h-20 overflow-scroll cursor-default ' language="javascript" style={vs}>
                
                {data?.code.slice(data?.code.indexOf('`') + 1, data?.code.lastIndexOf('`')).trim()}
                
            </SyntaxHighlighter> */}
             
        
            </div>
          <div>
            <label htmlFor="" className='text-sm font-medium'>Dependencies : </label>
            <div className='flex flex-wrap space-x-1'>
              {data?.dependencies?.map((dependency , i) => <Chip key={i} size='sm'>{dependency}</Chip>)}

            </div>
          </div>
          {/* <div className='flex items-center justify-end'>
            <Button className='py-1 w-max  bg-black  text-sm h-max mt-1 font-medium '>{data.optimizations.length} Refinements</Button>
          </div> */}
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
