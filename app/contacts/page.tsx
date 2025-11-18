import { Facebook, Instagram, Linkedin } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div>
            <div className='bg-black text-white py-20 px-8 w-full min-h-screen'>
      <h1 className='text-7xl font-medium text-center mb-16'>Contact</h1>

      <div className='flex flex-col md:flex-row md:justify-between md:items-start gap-12 max-w-5xl mx-auto'>
        <div className='md:w-1/2'>
          <h2 className='text-3xl font-semibold mb-4'>I'd love to hear from you!</h2>
          <p className='text-gray-300'>
            Whether you have a question, want to collaborate, or just want to say hi, feel free to drop a message.
          </p>
        </div>


        <div className='md:w-1/2'>
          <form className='flex flex-col gap-6'>
            <div className='flex flex-col'>
              <label className='mb-2 text-lg'>Name</label>
              <input 
                type='text' 
                placeholder='Please enter your name' 
                className='p-3 rounded-lg bg-gray-900 text-white  focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>

            <div className='flex flex-col'>
              <label className='mb-2 text-lg'>Email</label>
              <input 
                type='email' 
                placeholder='Please enter your email' 
                className='p-3 rounded-lg  bg-gray-900 text-white  focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>

            <div className='flex flex-col'>
              <label className='mb-2 text-lg'>Description</label>
              <textarea 
                placeholder='Your message...' 
                rows={5}
                className='p-3 rounded-lg text-white  bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>

            <button 
              type='submit' 
              className='bg-green-600 w-[100px] p-2 rounded-2xl font-semibold text-black'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className='flex mt-6 gap-4 justify-center'>
        <div className='h-[100px] w-[400px] rounded-xl bg-gray-800 text-center' >
            <h2 className='font-light text-sm'>EMAIL ME</h2>
            <h1 className='text-xl underline font-sans'>ayush@gmail.com</h1>
        </div>
        <div className='h-[100px] w-[400px] bg-gray-900 rounded-2xl'>
            <h2 className='text-center mb-1 text-sm '>FIND ME</h2>
            <div className='flex gap-3 justify-center items-center'>
                <Linkedin className='bg-green-400 rounded-xl p-1' />
                <Instagram className='bg-green-400 rounded-xl p-1' />
                <Facebook className='bg-green-400 rounded-xl p-1' />
                
            </div>



        </div>
      </div>
      {/* NEXT SECTION */}
      <div>
        <div>
            <h3>FAQ</h3>
            <h1>Questions & Answers</h1>
        </div>
        <div>
            
        </div>
      </div>
    </div>
    </div>
  )
}

export default page