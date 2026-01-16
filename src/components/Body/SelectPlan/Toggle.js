import React, { useState } from 'react'
import { selects} from '@/components'


export default function Toggle({isYearly, setIsYearly}) {
    
   
  return (
    <div>
        <div className='flex flex-row justify-center gap-5 mt-5
                     bg-[hsl(217,100%,97%)] p-2 rounded-xl'>

            <div className={`text-[hsl(213,96%,18%)] font-medium
                            ${isYearly ? ' text-gray-400' : ' text-[hsl(213,96%,18%)]'}
                `}>Monthly</div>

            <div
                onClick={()=>setIsYearly(prev => !prev)

                }
                className='  transition-transform duration-3000 ease-in-out 
                        bg-[hsl(213,96%,18%)] w-14 h-5 cursor-pointer rounded-full'>
                
                
                <div
                    className={`w-5 h-5 bg-white rounded-full 
                               
                              ${isYearly ? 'ml-auto':''} `}>
                     
                </div>
                                    
            </div>



            <div className={`font-medium ${
            isYearly ? 'text-[hsl(213,96%,18%)]' : 'text-gray-400'
          }`}>Yearly</div>
        </div>
    </div>
  )
}
