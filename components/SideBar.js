"use client"

import React from 'react'
import {Accordion, AccordionItem, Avatar} from "@nextui-org/react";
import {BsDatabaseAdd , BsArrowDownUp , BsCloudy} from 'react-icons/bs'
import {FaRegHandshake} from 'react-icons/fa'
import {CiServer} from 'react-icons/ci'
import {PiSignOut} from 'react-icons/pi'
import Image from 'next/image';
import {User} from "@nextui-org/react";
import {BiLogoPostgresql} from 'react-icons/bi'
import ConnectorBtn from '@/flow/ConnectorBtn';
export default function SideBar() {
    const itemClasses = {
        base: "py-0 w-full ",
        title: "font-medium text-medium text-black ",
        trigger: "px-2 py-0 hover:bg-white rounded-lg h-14 flex items-center",
        indicator: "text-medium",
        content: "text-small px-2 bg-white ",
      };

    const connectors = [
        {
            id:1,
            icon:BiLogoPostgresql,
            label: 'PostgressSQL',
            tooltip: 'PostgreSQL'
            
        }
    ]
  return (
    <div className='bg-white w-72 h-screen flex flex-col py-5'>
        {/* Logo  */}
      
        <div className="w-full flex justify-center py-10 
        before:block before:translate-x-14 before:translate-y-10 before:absolute before:-inset-1 before:w-14 before:h-14 before:blur-2xl before:bg-[#8a1a9b] relative 
        ">
            <Image src='/next.svg' className='z-20' width={230} height={20}/>
        </div>
       
        {/* Accordians */}
        <div className=' h-full flex-1 overflow-y-auto   '>
        <Accordion 
                // variant='shadow'
                selectionMode="multiple" 
                itemClasses={itemClasses}
                className='h-full overflow-y-scroll'
                // selectedKeys={['1', '2', '3', '4','5']}
            >
                {/* Database */}
                <AccordionItem
                key="1"
                aria-label="Connectors"
                startContent={
                <BsDatabaseAdd  className='text-black' size={26}/>
                }
                title="Connectors"
                className='text-neutral-400 '
                >
                    {connectors?.map((connector)=>(
                        <ConnectorBtn key={connector.id} {...connector} />
                    ))}
                </AccordionItem>


                {/* Methods */}


                <AccordionItem
                key="2"
                aria-label="Methods"
                startContent={
                <BsArrowDownUp  className='text-black' size={26}/>
                }
                title="Methods"
                className='text-neutral-400'
                >
                    <p>Welcome</p>
                </AccordionItem>

                {/* Clouds */}

                <AccordionItem
                key="3"
                aria-label="Clouds"
                startContent={
                <BsCloudy  className='text-black' size={26}/>
                }
                title="Clouds"
                className='text-neutral-400'
                >
                    <p>Welcome</p>
                </AccordionItem>
                {/* Integartions */}
                <AccordionItem
                key="4"
                aria-label="Integartions"
                startContent={
                <FaRegHandshake className='text-black' size={26}/>
                }
                title="Integartions"
                className='text-neutral-400'
                >
                    <p>Welcome</p>
                </AccordionItem>
                {/* Identity Server */}
                <AccordionItem
                key="5"
                aria-label="Identity Server"
                startContent={
                <CiServer className='text-black' size={26}/>
                }
                title="Identity Server"
                className='text-neutral-400'
                >
                    <p>Welcome</p>
                </AccordionItem>
                
            </Accordion>
        </div>
        {/* Accounts footer */}
        <div className='flex flex-col px-5 gap-3'>
            {/* <div className='flex items-center gap-3'>
                <Avatar
                isBordered
                radius="lg"
                name='Api'
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                />
                <p className='text-md font-medium '>Alex </p>
            </div> */}
             <User   
                name={<p className=" text-base ">Jane Doe</p>}
                // description="Product Designer"
                className='flex items-center justify-start text-xl font-medium'
                avatarProps={{
                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                }}
            />
            <PiSignOut className='text-black cursor-pointer ' size={26}/>
        </div>
    </div>
  )
}
