/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-empty-pattern */
import React, { ReactNode, useState } from 'react'
import DashboardNavbar from '../components/navigation/DashboardNavbar'
import DashboardSidebar from '../components/navigation/DashboardSidebar'

type Props = {
    children:ReactNode
}

function DashboardLayout({children}: Props) {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  return (
    <main className="flex flex-col h-screen">
    <div className="flex flex-1 overflow-hidden bg-slate-100">
      <div className="flex">
        <DashboardSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex w-full flex-col">
          <DashboardNavbar setSidebarOpen={setSidebarOpen} />
        </div>
        <div className="flex flex-1 bg-slate-100 overflow-y-auto paragraph px-4">
          {children}
        </div>
      </div>
    </div>
  </main>
  )
}

export default DashboardLayout