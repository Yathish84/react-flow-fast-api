"use client"
import React, { useCallback, useEffect, useRef, useState } from 'react'
import ReactFlow, { Controls, Background, useNodesState } from 'reactflow';
import 'reactflow/dist/style.css';
import JavaScriptNode from './nodes/JavaScriptNode';
import JSX from './nodes/RootNode';
import useNodeStore from '@/hooks/useNodeStore';
import { nanoid } from 'nanoid';

const nodeTypes = { 


    javascript: JavaScriptNode,
    root: JSX,
    // PostgressSQL: PGSQLConnector
    };

 
export default function ReactFlowArea() {
    const {nodes , edges , onNodesChange, setNodes , onEdgesChange , onConnect} = useNodeStore()
    const reactFlowWrapper = useRef(null);
    // useEffect(()=>{
    //   const node = {
    //     "type": "javascript",
    //     "data": {
    //         "functionName": "handleFileSelect",
    //         "description": "Function to handle file selection and set file data.",
    //         "code": "const handleFileSelect = (name, data) => {\n    console.log(name);\n    setFileData({\n        name,\n        data\n    });\n}",
    //         "dependencies": ["setFileData"],
    //         "optimizations": [
    //           {"description": "Remove `console.log` statements before moving to a production environment."},
    //           {"description": "Consider adding error handling or feedback for the user in case file selection fails."}
    //       ],
    //         "trigger": {
    //             "component": "FileUploder",
    //             "description": "File uploader component.",
    //             "jsx": "<FileUploder onFileSelect={handleFileSelect} />",
    //             "dependencies": ["handleFileSelect"]
    //         }
    //     }
    // }
    // node.id = nanoid(); // You can replace "some_id" with any desired value for id
    // node.position = { x: 200, y: 300 }
    // setNodes(node)
    // },[])
    
    
     
  return (
    <div className='h-full w-screen' ref={reactFlowWrapper}>
        <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            // zoomOnScroll={false}

            // fitView
        >
            <Background variant='lines' size={2} gap={30}/>
            <Controls position='top-right'/>
        </ReactFlow>
    </div>
  )
}




