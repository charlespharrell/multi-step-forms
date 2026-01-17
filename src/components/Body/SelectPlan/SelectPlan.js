import React from 'react'
import PlanCard from './PlanCard'
import Toggle from './Toggle'

import { useState } from 'react'

export default function SelectPlan({isYearly, setIsYearly, handleClick, formData, setFormData, handleDataCLick}) {

   
  
  return (
    <div>
      <PlanCard isYearly={isYearly} 
              setIsYearly={setIsYearly}
               formData={formData}
                setFormData={setFormData}
                handleDataCLick={handleDataCLick}
                // planData={planData}
                />
      <Toggle isYearly={isYearly} setIsYearly={setIsYearly} handleClick={handleClick}/>
    </div>
  )
}
