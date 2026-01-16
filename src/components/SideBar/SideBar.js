import { steps } from '..'

export default function SideBar({page}) {   

  return (
    <div className='z-50 flex flex-col relative  m-3'>
      {
        steps.map((step) => (
         
            <div key={step.index} className='flex flex-row gap-4 mb-5'> 
                <div className={`  w-6 h-6 mt-2 flex items-center rounded-full
                                    ${page === step.index ?
                                    'bg-[hsl(228,100%,84%)] text-black':
                                    'border border-gray-400 text-white'}`}>

                    <div className='w-6 h-6 border-gray-400 rounded-full flex items-center justify-center'>{step.number}</div> 
                </div>
              
                <div className=''>
                    <small className='text-xs text-[hsl(228,100%,84%)]'>{step.stepNum.toUpperCase()}</small>
                    <div  className='text-[hsl(231,11%,63%)] font-bold mt-[-3] text-xs'>{step.stepInfo}</div>
                </div>
            </div>
        ))
      }
    </div>
  )
}
