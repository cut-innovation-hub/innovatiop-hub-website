/* eslint-disable @typescript-eslint/ban-types */
import { Avatar } from '@chakra-ui/react'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import React from 'react'

type Props = {
    name:string,
    position: string
}

const TeamComponent = (props: Props) => {
  return (
    <div className="flex bg-white p-4 mb-4 rounded flex-row items-center space-x-4 shadow-sm">
    <div className="flex">
      <Avatar size={'lg'} />
    </div>
    <div className="flex flex-col flex-1">
      <p className='text-slate-900 font-semibold text-lg'>{props.name}</p>
      <p className='text-slate-500'>{props.position}</p>
    </div>
    <div className="flex self-start flex-row items-center space-x-2">
      <span className='bg-slate-100 text-blue-600 cursor-pointer hover:bg-slate-300 p-2 rounded-full'>
      <PencilIcon height={16} width={16} />
      </span>
      <span className='bg-slate-100 text-red-600 cursor-pointer hover:bg-slate-300 p-2 rounded-full'>
      <TrashIcon height={16} width={16} />
      </span>
    </div>
  </div>
  )
}

export default TeamComponent