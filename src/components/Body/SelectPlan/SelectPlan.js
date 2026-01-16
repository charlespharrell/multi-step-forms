import React from 'react'
import PlanCard from './PlanCard'
import Toggle from './Toggle'
import { useState } from 'react'

export default function SelectPlan() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <div>
      <PlanCard isYearly={isYearly} setIsYearly={setIsYearly}/>
      <Toggle isYearly={isYearly} setIsYearly={setIsYearly}/>
    </div>
  )
}
