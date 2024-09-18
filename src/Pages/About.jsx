import React from 'react'
import { assets } from '../assets/assets-frontend/assets'

function About() {
  return (
    <div className=" text-2xl pt-10 text-gray-500">
      <div>
      <p className='text-center'>About <span className='text-gray-700 font-medium'>US</span></p>
    </div>
    <div className="my-10 flex flex-col md:flex-row gap-12">
      <img src={assets.about_image} alt="" className='w-full md:max-w-[360px]' />
      <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600 ">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae illum vel inventore quis, et, amet reprehenderit illo temporibus esse ducimus quas enim non dolore cumque, quam architecto doloribus voluptates minus!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum nisi rem dolore quos dicta asperiores atque quas ratione reiciendis unde cum, aspernatur soluta, maxime ut sint nobis modi accusantium iure!</p>
        <b className='text-gray-800'>Our Vision</b>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, error magnam ullam autem a sapiente labore minima beatae delectus sequi?
        </p>
      </div>
    </div>
    <div className="text-xl my-4">
      <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
    </div>
    <div className="flex flex-col md:flex-row mb-20">
    <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all  duration-300 text-gray-600 cursor-pointer' >
      <b>Efficience:</b>
      <p>Streamlined appointment scheduling that fits into your busy lofestyle.</p>
    </div>
    <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all  duration-300 text-gray-600 cursor-pointer'>
      <b>Convenience:</b>
      <p>Access to a network of trusted healthcare professionals in your area.</p>
    </div>
    <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all  duration-300 text-gray-600 cursor-pointer'>
      <b>Personalization:</b>
      <p>tailored recommendations and reninders to help you stay on top of your health.</p>
    </div>
    </div>
    </div>
   
  )
}

export default About