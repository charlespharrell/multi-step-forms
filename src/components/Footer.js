import React from 'react'
import { FormTitles } from '.'

export default function Footer({page, setPage}) {
  return (
    <div className='flex justify-between mt-15 md:mt-6'>
      <button className='text-[hsl(231,11%,63%)] cursor-pointer hover:text-[hsl(243,100%,62%)]'
           disabled = {page === 0}
           onClick={() => setPage((currPage)=>currPage - 1 )}
      
      >Go Back</button>
      <button
          disabled = {page === FormTitles.length - 1}
          onClick={() => setPage((currPage)=>currPage + 1 )}
          className='text-[hsl(206,94%,87%)] cursor-pointer py-1 px-4 rounded-md bg-[hsl(213,96%,18%)]'
          >Next</button>
    </div>
  )
}
