"use client"
import React, { useMemo, useState } from 'react'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button , DropdownSection , User, Switch, Avatar} from "@nextui-org/react";
import {AiOutlineSetting} from 'react-icons/ai'
import { BsPlus } from 'react-icons/bs';
import useUploadTrigger from '@/hooks/useUploadTrigger';
export default function DashboardHeader() {
    const [selectedKeys, setSelectedKeys] = useState();
    const uploadTrigger = useUploadTrigger()

    console.log(selectedKeys)
    const date = new Date();
    const formattedDate = date.toLocaleString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit"
    });


    // const selectedValue = useMemo(
    //     // console.log(selectedKeys)
    //   () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    //   [selectedKeys]
    // );
    // console.log(selectedValue)
  return (
    <div className='bg-white w-full h-14 flex  px-10 items-center justify-between dark:bg-neutral-700'>
        <div className='flex-1'>
            {/* <Image src='/next.svg' className='z-20' width={230} height={20}/> */}
            <h1 className='font-medium text-4xl text-neutral-500 hover:text-black cursor-pointer transition-colors delay-75 ease-out '>Zify</h1>
        </div>
        <div className='flex items-center space-x-5 '>
            {/* <p className='text-xl font-medium text-black'>clone-files</p> */}
            <button onClick={()=>uploadTrigger.onOpen()} className='px-4 bg-black text-white py-1 rounded hover:bg-neutral-600'>
                upload
            </button>
            <div >
                <Dropdown
                    // showArrow
                    radius="sm"
                    classNames={{
                        base: "p-0 border-small border-divider bg-background",
                        arrow: "bg-default-200",
                    }}
                    >
                    <DropdownTrigger>   
                    <Avatar
                        isBordered
                        as="button"
                        className="transition-transform"
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    />
                    </DropdownTrigger>
                    <DropdownMenu
                        aria-label="Custom item styles"
                        disabledKeys={["profile"]}
                        className="p-3"
                      
                    >
                        <DropdownSection aria-label="Profile & Actions" showDivider>
                        <DropdownItem
                            key="new_project"
                            endContent={<BsPlus className="text-large" />}
                            className='text-neutral-500'
                        >
                        Service Connection
                        </DropdownItem>
                        <DropdownItem
                            key="new_project"
                            endContent={<Switch color='default' className='p-0 mr-0' classNames={{ wrapper:'mr-0'}}  defaultSelected size="sm" aria-label="Autosave"/>}
                            className='text-neutral-500'
                        >
                        Autosave
                        </DropdownItem>
                        </DropdownSection>

                        <DropdownSection aria-label="Preferences" showDivider>
                        <DropdownItem key="quick_search" shortcut="⌘K" className='text-neutral-500'>
                            Quick search
                        </DropdownItem>
                        <DropdownItem
                            isReadOnly
                            key="theme"
                            className="cursor-default text-neutral-500"

                            endContent={
                            <select
                                className="z-10 outline-none w-16 py-0.5 rounded-md text-tiny group-data-[hover=true]:border-default-500 border-small border-default-300 dark:border-default-200 bg-transparent text-default-500"
                                id="theme"
                                name="theme"
                                // onChange={(e)=>setTheme(e.target.value)}
                            >
                                <option>System</option>
                                <option>Dark</option>
                                <option>Light</option>
                            </select>
                            }
                        >
                            Theme
                        </DropdownItem>
                        </DropdownSection>  

                        <DropdownSection aria-label="Help & Feedback">
                        <DropdownItem key="help_and_feedback" className='text-neutral-500'>
                            Help & Feedback
                        </DropdownItem>
                        <DropdownItem key="LogOut" className='text-red-500 hover:text-red-400'>
                           Logout 
                        </DropdownItem>
                        </DropdownSection> 
                    </DropdownMenu>
                </Dropdown>
            </div>
           
        </div>
       
    </div>
  )
}
