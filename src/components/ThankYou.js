import React from 'react'
import Image from 'next/image'

export default function ThankYou() {
  return (
    <div className='flex flex-col  items-center w-[70%] h-full mx-auto my-20 '>
      
      <div className='py-3'>
        <Image src='/icon-thank-you.svg' width={50} height={50}/>
      </div>
      <h1 className='text-2xl font-bold text-[hsl(213,96%,18%)]'>Thank You!</h1>
      <div className='text-sm text-[hsl(228,100%,84%)]'>Thank you for comfirming your subscription! We hope you have fun using 
        our platform. If you ever need support, please 
        feel free to email us at support@loremgamimg.com
      </div>
    </div>
  )
}
