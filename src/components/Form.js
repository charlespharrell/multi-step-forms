"use client"
import { useState } from 'react'
import Image from 'next/image'
import Header from './Header'
import Footer from './Footer'
import { initialFormData, PageDisplay } from '.'
import SideBar from './SideBar/SideBar'
import MobileSide from './SideBar/MobileSide'


export default function Form() {

  const [page, setPage]= useState(0)
  const [formData, setFormData] = useState(initialFormData)
  const [isYearly, setIsYearly] = useState(false)

  const handleClick =()=>{
    setIsYearly(prev => !prev)
  }
  const handleDataCLick = (event)=>{
    setFormData({...formData, select_amount: event.target.value})
  }

  return (
    <div className='md:bg-[hsl(0,100%,100%)]
                     w-full
                     md:w-[70%]
                     min-h-screen
                     md:min-h-0
                     bg-[hsl(228,100%,84%)]                     
                     max-w-5xl 
                     md:p-5 lg:p-10 rounded-xl'>
                     
       <div className='lg:gap-10
                       relative                        
                       justify-center  
                       flex
                       md:gap-2
                       flex-col
                       md:flex-row
                                       
                         '>
                          
            <div className='relative 
                        md:w-[50%]
                        hidden md:block
                        lg:w-[35%]                      
                        '>
                          <div>
                            <SideBar page={page}/>                          
                          </div>

                  <Image
                      src='/bg-sidebar-desktop.svg' 
                      alt='Sidebar background'
                      className='object-cover rounded-lg'
                      fill
                      />

            </div>

          <div className=' relative h-[180px] w-full md:hidden block'>

              <div>
                 <MobileSide page={page}/>
              </div>
                          
              <Image
                  src='/bg-sidebar-mobile.svg'
                  alt='Mobile background'
                  fill
                  priority
                  className='object-cover'
                  />
          </div>    

        <div className='relative mx-auto
                         bg-white
                         min-h-[60vh]   
                         md:h-[70vh]                    
                          w-[90%]
                         p-6 rounded-xl
                         shadow-lg   
                           mt-[-75] 
                           md:mt-[0]               
                         md:w-[100%]'>

            <Header page={page} />

            <div className='h-57'>
                <PageDisplay
                      page={page}
                      setPage={setPage}
                      formData={formData}
                      setFormData={setFormData}
                      isYearly={isYearly}
                      setIsYearly={setIsYearly}
                      handleClick={handleClick}
                      handleDataCLick={handleDataCLick}
                      />
                      
            </div>
                      

            <Footer page={page} setPage={setPage}/>
        </div>

       </div>
    </div>
  )
}
