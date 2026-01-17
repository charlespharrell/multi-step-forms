import React, { useState } from 'react'
import Image from 'next/image'
import { selects } from '@/components'

export default function PlanCard({
        isYearly,         
        formData,
        setFormData, 
      
      }) {
    const [selectedIndex, setSelectedIndex]= useState(null)

    const handleSelect = (select, index) =>{
      setSelectedIndex(index)

      const planData = {
      name: select.plantype,
      amount: isYearly ? select.yearly_amount : select.monthly_amount,
      billing: isYearly ? 'yearly' : 'monthly',
    }

      setFormData((prev) =>({
        ...prev,
        plan: planData,
      }))
      
    }

  return (
    <div className='flex flex-col p-0 sm:flex-row justify-center w-full gap-2 '>
      {
        selects.map((select, index)=>{
            const isSelected = selectedIndex === index

            return (
            <div key={index}
                   onClick={()=>handleSelect(select, index)} 
                        className={` w-full  sm:w-[30%] h-17.5 sm:h-40 rounded-md
                            flex flex-row sm:flex-col gap-3 sm:justify-center items-center
                            sm:items-start p-3 cursor-pointer
                            transition-all duration-200
                            border
                            ${isSelected ? 'border-[hsl(243,100%,62%)] bg-[hsl(217,100%,97%)]'
                        : 'border-[hsl(228,100%,84%)] bg-white'}
                            `}
                            >
            
                <div className='sm:mb-10'>
                    <Image src={select.image} width={30} height={20}/>
                </div>
                <div>
                    <div className='text-[hsl(213,96%,18%)] font-bold text-md sm:text-xs  '>{select.plantype}</div>
                    <div className='text-[hsl(228,100%,84%)] text-xs'>{ isYearly ? select.yearly_amount:select.monthly_amount}</div>
                    <div className='text-[hsl(213,96%,18%)] font-medium text-xs'>{ isYearly ?'2 months free' : ''}</div>
                </div>
            </div>
            )           
})
      }
    </div>
  )
}
