"use client"
import React, { useMemo, useState } from 'react'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button , DropdownSection , User} from "@nextui-org/react";
import {BsThreeDots , BsPlus , BsCheck} from 'react-icons/bs'
import {Switch} from "@nextui-org/react";
export default function DashboardHeader() {
    const [selectedKeys, setSelectedKeys] = useState();
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
    <div className='bg-white w-full h-14 flex items-center divide-x-1 gap-x-4  px-3'>
         {/* Project name and service Connection */}
        <div className='flex flex-1 items-center justify-between h-full'>
            <p className='text-xl font-medium text-[#8a1a9b]'>Accounts-api-migration</p>
            <div className='flex items-center gap-2'>
                {/* dropdown and dots */}
                <Dropdown
                    
                >
                    <DropdownTrigger>
                        <Button 
                            variant="bordered" 
                            className="capitalize rounded-lg w-64 text-left flex items-center justify-start"
                        >
                        {selectedKeys ? selectedKeys : 'choose service connection'}
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu 
                        disableAnimation
                        aria-label="Single selection example"
                        variant="flat"
                        // disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={selectedKeys}
                        onSelectionChange={setSelectedKeys}
                        className='w-64'
                        itemClasses={{
                            base: [
                                "rounded-md",
                                "text-default-500",
                                "transition-opacity",
                                "data-[hover=true]:text-foreground",
                                "data-[hover=true]:bg-default-100",
                                "dark:data-[hover=true]:bg-default-50",
                                "data-[selectable=true]:focus:bg-default-50",
                                "data-[pressed=true]:opacity-70",
                                "data-[focus-visible=true]:ring-default-500",
                            ],
                            }}
                    >
                        <DropdownItem key="Azure-Details">Azure-Details</DropdownItem>
                        <DropdownItem key="AWS-All-Details">AWS-All-Details</DropdownItem>
                        <DropdownItem key="GCP-Connection">GCP-Connection</DropdownItem>
                        <DropdownItem key="Azure-Connection-ip-3">Azure-Connection-ip-3</DropdownItem>
                       
                    </DropdownMenu>
                </Dropdown>
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
                        
                        <Button 
                            variant="solid"
                            disableRipple 
                            className='border-none bg-[#d0a3d7]/30 rounded-md px-2  min-w-fit hover:bg-[#d0a3d7] '>
                                <BsThreeDots className='cursor-pointer text-[#8a1a9b]' size={20}/>
                            </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        aria-label="Custom item styles"
                        disabledKeys={["profile"]}
                        className="p-3"
                        itemClasses={{
                        base: [
                            "rounded-md",
                            "text-default-500",
                            "transition-opacity",
                            "data-[hover=true]:text-foreground",
                            "data-[hover=true]:bg-default-100",
                            "dark:data-[hover=true]:bg-default-50",
                            "data-[selectable=true]:focus:bg-default-50",
                            "data-[pressed=true]:opacity-70",
                            "data-[focus-visible=true]:ring-default-500",
                        ],
                        }}
                    >
                        <DropdownSection aria-label="Profile & Actions" showDivider>
                        <DropdownItem
                            key="new_project"
                            endContent={<BsPlus className="text-large" />}
                        >
                        Service Connection
                        </DropdownItem>
                        <DropdownItem
                            key="new_project"
                            endContent={<Switch color='default' className='p-0 mr-0' classNames={{ wrapper:'mr-0'}}  defaultSelected size="sm" aria-label="Autosave"/>}
                        >
                        Autosave
                        </DropdownItem>
                        </DropdownSection>

                        <DropdownSection aria-label="Preferences" showDivider>
                        <DropdownItem key="quick_search" shortcut="⌘K">
                            Quick search
                        </DropdownItem>
                        <DropdownItem
                            isReadOnly
                            key="theme"
                            className="cursor-default"
                            endContent={
                            <select
                                className="z-10 outline-none w-16 py-0.5 rounded-md text-tiny group-data-[hover=true]:border-default-500 border-small border-default-300 dark:border-default-200 bg-transparent text-default-500"
                                id="theme"
                                name="theme"
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
                        <DropdownItem key="help_and_feedback">
                            Help & Feedback
                        </DropdownItem>
                        </DropdownSection> 
                    </DropdownMenu>
                </Dropdown>
                </div>
            </div>
        </div>
        <div className='flex gap-x-2 items-center pl-3'>
            <div className='bg-green-200 rounded-full p-1'>
                <BsCheck className='text-green-600'/>
            </div>
            <div>
                <p className='text-sm text-default-500'>{formattedDate}</p>
                <p className='text-xs font-normal text-default-500'>Saved</p>
            </div>
        </div>
       
    </div>
  )
}
