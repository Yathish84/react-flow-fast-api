import useUploadTrigger from '@/hooks/useUploadTrigger'
import React, { useState, useTransition } from 'react'
import Dialog from '../components/Dialog'
import FileUploder from '../components/FileUploder'
import { AiOutlineClose } from 'react-icons/ai'
import Button from '../components/Button'
import useNodeStore from '@/hooks/useNodeStore'
import getOpenAiRes from '@/Actions/getOpenAiRes'
import { uploadFiles } from '@/ActionCallers/ServerActions'
import { nanoid } from 'nanoid'

export default function  UploadModel() {
    const [isPending , startTransition] = useTransition()
    const initialFormat = {
        "name":'',
        'data':''
    }
    const uploadTrigger = useUploadTrigger()
    const nodesStore = useNodeStore()
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
    // const data = await getOpenAiRes()
    
    const upLoadFile = async() =>{
        const data = await uploadFiles();
        let rootNode = data.rootNode;
        rootNode.id = nanoid(); // You can replace "some_id" with any desired value for id
        rootNode.position = { x: 200, y: 200 }
        nodesStore.setNodes(rootNode)
        console.log(rootNode);
        let currentYPosition = 50
        for (let node of data.nodes) {
            
            console.log(currentYPosition)
            const newnode = {
                id: nanoid(),
                type: node.type,
                position:{
                    x:   700, // Place JS nodes on the left, JSX on the right
                    y: currentYPosition
                },
                data: node.data
            }
            nodesStore.setNodes(newnode)
            nodesStore.setEdges(
                {
                    id: `${rootNode.id}-${newnode.id}`,
                    type: 'default',
                    source: `${rootNode.id}`,
                    target: `${newnode.id}`,
                    animated: true,
                    // label: 'edge label'
                  }
            )
            currentYPosition += 200;
        }
       
        uploadTrigger.onClose()
        return data;
        

        // nodesStore?.setNodes(data?.node)
    }
  return (
    <Dialog 
        isOpen={uploadTrigger?.isOpen} 
        title="Add File" 
        desc={'Upload an JSX file'}
        onClose={()=>{handleOnClose()}}
    >
       <FileUploder onFileSelect = {handleFileSelect} />
      {fileData.name && ( <div className='flex justify-between items-center bg-neutral-100 p-1 rounded'>
        <p className='font-medium'>{fileData.name}</p>
        <AiOutlineClose size={18} color='red' className='font-medium cursor-pointer' />
       </div>)}

       <div>
       <Button 
            onClick={()=>{ startTransition(()=>{upLoadFile()})}}
            // onClick={()=>uploadFiles()}
            disabled={fileData?.name ? false : true} type="button">
         { isPending ? 'Uploading...' : 'Upload'}
        </Button>
       </div>
      
    </Dialog>
    
  )
}
