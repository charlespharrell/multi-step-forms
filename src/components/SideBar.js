import React from 'react'
import { steps } from '.'

export default function SideBar() {
  return (
    <div className='z-50 flex flex-col relative  m-5'>
      {
        steps.map((step) => (
            <div className='flex flex-row '> 
                <div className='w-5 h-5 flex items-center bg-amber-300 rounded-full'>
                    <div className='w-5 h-5 bg-amber-300 rounded-full flex items-center justify-center'>{step.number}</div>
                </div>
                <div>
                    <div>{step.stepNum}</div>
                    <div>{step.stepInfo}</div>
                </div>
            </div>
        ))
      }
    </div>
  )
}
