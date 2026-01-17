import { picks } from '@/components'

const extractAmount = (price) =>
  Number(price?.replace(/[^0-9]/g, '') || 0)

export default function Finish({ formData, isYearly, setPage }) {

  const planAmount = formData.plan
    ? extractAmount(formData.plan.amount)
    : 0

  const addOnsTotal = picks
    .filter(pick => formData.addOns.includes(pick.id))
    .reduce((total, pick) => {
      const price = isYearly
        ? pick.add_yearly_amount
        : pick.add_monthly_amount

      return total + extractAmount(price)
    }, 0)

  const totalAmount = planAmount + addOnsTotal

  const selectedAddOns = picks.filter(pick =>
    formData.addOns.includes(pick.id)
  )

  
  const {name, amount, billing}=formData.plan
  if (!formData.plan && selectedAddOns){
    return <p className='text-gray-400'>No plan selected</p>
  }

  return (
    <div>
        <div className="flex justify-between items-center bg-[hsl(217,100%,97%)] p-4 rounded-md">
             <div>
                 <div>
                     <p className='font-medium text-sm text-[hsl(213,96%,18%)]'>
                       {name} {billing}
                     </p>
                     <p 
                        onClick={()=>setPage(1)}                      
                        className='text-gray-400 text-xs underline cursor-pointer'>Change
                     </p>
               </div>
                
             </div>       
             <p className='font-medium text-xs text-[hsl(213,96%,18%)]'>{amount}</p>
         
         
         </div>
      {selectedAddOns.length > 0 && (
              <div className="mt-4 space-y-2">
                {selectedAddOns.map(add => (
                  <div key={add.id} className="flex justify-between text-sm">
                    <span className="text-gray-500">{add.addSelect}</span>
                    <span className='font-medium text-xs text-[hsl(213,96%,18%)]'>
                      {isYearly ? add.add_yearly_amount : add.add_monthly_amount}
                    </span>
                  </div>
                ))}
              </div>
            )}




      <div className="flex justify-between mt-6">
          <span className="text-gray-500 text-sm">
            Total (per {isYearly ? 'year' : 'month'})
          </span>
          <span className="text-xs font-bold text-[hsl(243,100%,62%)]">
            ${totalAmount}/{isYearly ? 'yr' : 'mo'}
          </span>
      </div>

    </div>
  )
}
