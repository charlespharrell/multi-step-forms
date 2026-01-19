import React from 'react'
import { FormTitles } from '.'

export default function Footer({page, setPage}) {
  return (
    <div className={` ${page === 4 ? 'hidden' : 'flex justify-between mt-20 md:mt-1'}`}>
      <button className='text-[hsl(231,11%,63%)] cursor-pointer hover:text-[hsl(243,100%,62%)]'
           disabled = {page === 0}
           onClick={() => setPage((currPage)=>currPage - 1 )}
      
      >Go Back</button>
      <button
          disabled = {page === FormTitles.length}
          onClick={() => setPage((currPage)=>currPage + 1 )}
          className='text-[hsl(206,94%,87%)] cursor-pointer py-1 px-4 rounded-md bg-[hsl(213,96%,18%)]'
          >{ page === 3 ? 'Confirm':'Next'}</button>
    </div>
  )
}
