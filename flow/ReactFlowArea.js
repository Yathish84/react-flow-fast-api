"use client"
import React, { useCallback, useRef, useState } from 'react'
import ReactFlow, { Controls, Background, useNodesState } from 'reactflow';
import 'reactflow/dist/style.css';
import SQLConnector from './nodes/SQLConnector';
import PGSQLConnector from './nodes/PGSQLConnector';
import JSX from './nodes/JSX';

const nodeTypes = { 
    SQL: SQLConnector,
    // PGSQLConnector: PGSQLConnector,
    // javascript: PGSQLConnector,
    jsx: JSX,
    PostgressSQL: PGSQLConnector
    };

 
export default function ReactFlowArea() {
    const reactFlowWrapper = useRef(null);
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);

   
  
    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
      }, []);
    
      const onDrop = useCallback(
        (event) => {
          event.preventDefault();
    
          const reactFlowBounds = reactFlowWrapper?.current?.getBoundingClientRect();
          const type = event.dataTransfer.getData('type');
    
          // check if the dropped element is valid
         
          if(type){
            const position = reactFlowInstance.project({
                x: event.clientX - reactFlowBounds?.left,
                y: event.clientY - reactFlowBounds?.top,
              });
              const newNode = {
                id: Math.random().toString(),
                type,
                position,
                data: { label: `${type} node` },
              };
              
              setNodes((nds) => nds.concat(newNode));
          }
        },
        [reactFlowInstance]
      );
  return (
    <div className='h-full w-screen' ref={reactFlowWrapper}>
        <ReactFlow
            nodes={nodes}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            // fitView
        >
            <Background variant='lines' size={2} gap={30}/>
            <Controls position='top-right'/>
        </ReactFlow>
    </div>
  )
}




