import { FormTitles, subFormTitles  } from '.'

export default function Header({page}) {
  return (
    <div className='mb-5'>
        <div className='text-[hsl(213,96%,18%)] text-3xl font-bold'>{FormTitles[page]}</div>
        <div className='text-[hsl(228,100%,84%)] text-sm'>{subFormTitles[page]}</div>
    </div>
  )
}
