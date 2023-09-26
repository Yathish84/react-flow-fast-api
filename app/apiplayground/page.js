import DashboardHeader from '@/components/DashboardHeader'
import SideBar from '@/components/SideBar'
import ReactFlowArea from '@/flow/ReactFlowArea'
import React from 'react'

export default function page() {
  return (
    <div className='min-h-screen flex divide-x-1'>
        <SideBar />
        <main className='w-full h-screen flex flex-col gap-x-2 divide-y-1 '>
            <DashboardHeader />
            <ReactFlowArea />
        </main>
    </div>
  )
}
