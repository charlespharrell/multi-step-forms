import React from 'react'

export default function PersonalInfo({formData, setFormData}) {
  return (
    <div>
      <div>
        <div className='text-x text-[hsl(213,96%,18%)] mb-1'>Name</div>       
        <div className='w-full mb-2 rounded-md border border-[hsl(228,100%,84%)]'>
            <input 
                className='w-full p-3 md:p-1 rounded-md
                    focus:border-[hsl(243,100%,62%)]
                    focus:ring-1 focus:ring-[hsl(243,100%,62%)]
                    outline-none'
                type='text'   
                placeholder='e.g Stephen King' 
                value={formData.name}
                onChange={(event) => 
                setFormData({...formData, name: event.target.value  })
            }/>
        </div>
      </div>


      <div>
        <div className='text-x text-[hsl(213,96%,18%)] mb-1'>Email</div>       
        <div className='w-full mb-2 rounded-md border border-[hsl(228,100%,84%)]'>
            <input 
                className='w-full p-3 md:p-1 rounded-md
                    focus:border-[hsl(243,100%,62%)]
                    focus:ring-1 focus:ring-[hsl(243,100%,62%)]
                    outline-none'
                type='text'   
                placeholder='e.g stephenking@lorem.com' 
                value={formData.email}
                onChange={(event)=> setFormData({...formData, email: event.target.value})}               
            />
        </div>
      </div>


      <div>
        <div className='text-x text-[hsl(213,96%,18%)] mb-1'>Phone number</div>
            <div className='w-full mb-2 rounded-md border border-[hsl(228,100%,84%)]'>
                <input 
                    className='w-full p-3 md:p-1 rounded-md
                             focus:border-[hsl(243,100%,62%)]
                               focus:ring-1 focus:ring-[hsl(243,100%,62%)]
                               outline-none'
                    type='number'   
                    placeholder='e.g +1 234 567 890' 
                    value={formData.phonenumber}
                    onChange={(event) => 
                    setFormData({...formData, phonenumber: event.target.value})
                }/>
            </div>
      </div>
      
    </div>
  )
}
