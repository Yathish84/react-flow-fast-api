import React, { useState, useTransition } from 'react'
import Dialog from '../components/Dialog'
import useRefactorTrigger from '@/hooks/useRefactorTrigger'
import {  CheckboxGroup } from '@nextui-org/react'
import Checkboxx from '@/components/Checkbox'
import Button from '@/components/Button'
import { RiCodeBoxFill } from 'react-icons/ri'



export default function  RefactorModel() {
  const [selected, setSelected] = useState();
   const {isOpen , onClose , nodeData} = useRefactorTrigger()
    console.log(selected)
   
  const n ={
    "functionName": "handleOnClose",
    "description": "Function to close the upload and reset the file data.",
    "code": "const handleOnClose = () => {\n    uploadTrigger.onClose();\n    setFileData(initialFormat);\n}",
    "dependencies": [
        "uploadTrigger",
        "setFileData"
    ],
    "optimizations": [
        {
            "description": "Consider making `initialFormat` a constant outside the function scope to avoid creating a new object each time."
        },
        {
            "description": "Consider adding error handling or feedback to indicate if the close action was successful."
        }
    ],
    "trigger": {
        "component": "Dialog",
        "description": "Renders the UploadModel component with its children.",
        "jsx": "<Dialog \n    isOpen={uploadTrigger?.isOpen} \n    title=\"Add File\" \n    desc={'Upload an JSX file'}\n    onClose={()=>{handleOnClose()}}\n>...</Dialog>",
        "dependencies": [
            "handleOnClose",
            "uploadTrigger"
        ]
    }
}
  return (
    <Dialog 
        isOpen={isOpen} 
        title="Optimise Code" 
        desc={'Refactoring function'}
        onClose={()=>{onClose()}}
    >
      <div className='flex flex-col gap-y-2'> 
        <CheckboxGroup
          label={ <div className='flex items-center space-x-1'><RiCodeBoxFill size={25}/> <p>Available Adjustments</p></div>}
          value={selected}
          onValueChange={setSelected}
        > 
        <div className='w-full flex flex-col gap-y-2'>
          {nodeData?.optimizations?.map((optimization , i)=>(
              <Checkboxx  value={optimization?.description}>{optimization?.description}</Checkboxx>
            ))}
        </div>
        
        </CheckboxGroup>
        <Button disabled={selected?.length !== 0 ? false : true}>Optimise</Button>
      </div>
      
    </Dialog>
    
  )
}
