/* eslint-disable @typescript-eslint/ban-types */
import React from 'react'
import DashboardLayout from '../layouts/DashboardLayout'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <DashboardLayout>
      <div className=" w-full h-full grid min-h-screen items-center content-center justify-center">
        <p className='text-slate-700 text-center text-4xl font-semibold'>Dashboard</p>
        <p className='text-sm text-center text-slate-400'>The dashboard is still under developement</p>
      </div>
    </DashboardLayout>
  )
}

export default Dashboard