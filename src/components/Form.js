"use client"
import { useState } from 'react'
import Image from 'next/image'
import Header from './Header'
import Footer from './Footer'
import { PageDisplay } from '.'
import { initialFormData } from '.'
import SideBar from './SideBar'

export default function Form() {

  const [page, setPage]= useState(0)
  const [formData, setFormData] = useState(initialFormData)

  return (
    <div className='md:bg-[hsl(0,100%,100%)]
                    
                     md:w-[70%]
                     min-h-screen
                     md:min-h-0
                     bg-[hsl(228,100%,84%)]
                     
                     max-w-5xl 
                     md:p-10 rounded-xl'>

       <div className='lg:gap-10
                       relative                        
                       justify-center  
                       flex
                       md:gap-10
                       flex-col
                       md:flex-row
                                       
                         '>
                          
            <div className='relative 
                        md:w-[50%]
                        hidden md:block
                        lg:w-[35%]
                       
                        '>
                          <div>
                            <SideBar/>
                          </div>

                  <Image
                      src='/bg-sidebar-desktop.svg' 
                      alt='Sidebar background'
                      className='object-cover rounded-lg'
                      fill
                      />
            </div>

          <div className=' relative h-[180px] w-full md:hidden'>
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

            <Header page={page}/>

            <div><PageDisplay 
                      page={page}
                      formData={formData}
                      setFormData={setFormData}/></div>

            <Footer page={page} setPage={setPage}/>
        </div>

       </div>
    </div>
  )
}
