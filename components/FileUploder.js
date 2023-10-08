"use client"
import React, { useState } from 'react'
import { BsFillCloudUploadFill } from 'react-icons/bs'
export default function FileUploder({onFileSelect}) {
    const [dragging , setDragging] = useState(false);
    const dragOver = (event) =>{
        event.preventDefault();
        setDragging(true)
        
    }
    const dragEnter = (event) =>{
        event.preventDefault(true);
        setDragging(true)

    }
    const dragLeave = (event) =>{
        event.preventDefault();
        setDragging(false)

    }
    const fileDrop = (event) =>{
        event.preventDefault();
        setDragging(false)

    }
    const filesSelected = (event) =>{
        if(event.target.files.length){
            handleFiles(event.target.files)
        }

    }
    const fileInput = () =>{

    }
    const handleFiles = (files) => {
        for (let i = 0; i < files.length; i++) {
            const fileExtension = files[i].name.split(".").pop();
    
            if (fileExtension !== 'js' && fileExtension !== 'jsx') {
                // show toast or alert
                console.error("Invalid File Type");
                return;
            }
            
            const reader = new FileReader();
            reader.onload = (e) => {
                onFileSelect(files[0].name , e.target.result );
                console.log(e.target.result);  // For now just console log the result. Implement your logic here.
            }
            reader.readAsText(files[i]);
        }
    }
    
  return (
    <div 
        className="flex items-center justify-center w-full cursor-pointer"
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
        onClick={fileInput}
    >
        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <BsFillCloudUploadFill size={35} className='text-neutral-500' />
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">JS , JSX </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" onChange={filesSelected} accept='.js,.jsx' />
        </label>
    </div> 
  )
}
