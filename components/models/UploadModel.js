import useUploadTrigger from '@/hooks/useUploadTrigger'
import React, { useState } from 'react'
import Dialog from '../Dialog'
import FileUploder from '../FileUploder'
import { AiOutlineClose } from 'react-icons/ai'
import Button from '../Button'
export default function UploadModel() {
    const initialFormat = {
        "name":'',
        'data':''
    }
    const uploadTrigger = useUploadTrigger()
    const [fileData , setFileData] = useState(initialFormat)
    const handleOnClose = () => {
        uploadTrigger.onClose()
        setFileData(initialFormat)

    }
    const handleFileSelect =(name , data)=>{
        console.log(name)
        setFileData({
            name,
            data
        })
    }
  return (
    <Dialog 
        isOpen={uploadTrigger?.isOpen} 
        title="Add File" 
        desc={'Upload an JSX file'}
        onClose={()=>{handleOnClose()}}
    >
       <FileUploder onFileSelect = {handleFileSelect} />
      {fileData.name && ( <div className='flex justify-between items-center bg-neutral-200 p-1 rounded'>
        <p className='font-medium'>{fileData.name}</p>
        <AiOutlineClose size={18} className='text-red-600 font-medium cursor-pointer' />
       </div>)}

       <div>
       <Button disabled={fileData?.name ? false : true} type="button">
          Upload
        </Button>
       </div>
      
    </Dialog>
    
  )
}
