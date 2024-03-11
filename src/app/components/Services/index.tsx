import React from 'react'
import ServicesCard from './ServicesCard'

const Services = () => {
  return (
    <div className="w-full bg-slate-900 pb-10">
    <div className="grid grid-cols-2 md:grid-cols-4 mx-5 md:mx-40 gap-10 my-20">
              <div className="col-span-2 md:col-span-4">
                  <h1 className='text-5xl text-white tracking-widest pt-10 text-center'>
                      SERVICE SECTION
                  </h1>
                  <p className='text-xl text-white mt-5 tracking-[.25em] text-center'>Hi the is the sub heading section of services</p>
      </div>
      <div className='h-[200px] w-[200px]'><ServicesCard/></div>
        <div className='h-[200px] w-[200px]'><ServicesCard /></div>
        <div className='h-[200px] w-[200px]'><ServicesCard /></div>
        <div className='h-[200px] w-[200px]'><ServicesCard /></div>
    </div>
  </div>
  )
}

export default Services