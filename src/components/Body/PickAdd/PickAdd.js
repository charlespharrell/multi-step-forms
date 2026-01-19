import React, {useState} from 'react'
import { picks } from '@/components'

export default function PickAdd({isYearly, setFormData, formData,}) {

   const togglePick = (id) => {
      setFormData((prev) => ({
          ...prev,
          addOns: prev.addOns.includes(id)
          ? prev.addOns.filter(item => item !== id)
          : [...prev.addOns, id],
      }))
   }
  
  return (
    <div className='flex flex-col gap-2'>
      {
        picks.map((pick) => {
          const isChecked = formData.addOns.includes(pick.id)
         
          return(
              <label key={pick.id} 
                    onClick={() => togglePick(pick.id)}
                  className={`flex p-5 md:p-3 rounded-lg gap-5 border           
                      ${
                        isChecked? 'border-[hsl(243,100%,62%)] bg-[hsl(217,100%,97%)]':
                        'border-gray-300 bg-white'
                      }
                  `}>
                  
                  <div
                      className={`w-5 h-5 rounded border flex items-center justify-center
                        ${
                          isChecked
                            ? 'bg-[hsl(243,100%,62%)] border-[hsl(243,100%,62%)]'
                            : 'border-gray-400'
                        }
                      `}
                  >
                        {isChecked && (
                          <span className="text-white text-sm">✓</span>
                        )}
                  </div>
                  <div className='flex flex-col text-xs'>            
                      <div className='text-[hsl(213,96%,18%)] font-medium'>{pick.addSelect}</div> 
                      <div className='text-[hsl(228,100%,84%)] font-medium'>{pick.addInfo}</div>
                  </div>
                  <div className=' text-[hsl(243,100%,62%)] ml-auto text-xs font-medium'>{isYearly ? pick.add_yearly_amount: pick.add_monthly_amount}</div>           
                
              </label>
          )
})
      }
    </div>
  )
}
