import React from 'react'

const page = () => {
  return (
    <>
    <div className='bg-black pb-10 pt-20'>
        <div className='font-semi text-9xl text-white'>ABOUT</div>
        <div className='flex gap-32 text-white'>
            <img src="about.png" alt="" className='w-[300px] h-auto rounded-2xl' />
             <div className='flex flex-col items-baseline-last '>
                <h1 className='text-5xl'>Welcome to my <br/>creative world</h1>
                <p className='text-sm font-light pt-2'>My journey into the world began during my college years,where i was captivated by the intersection of creativity and technology.Inspired by the power of visual storytelling,</p>
                <button className='p-3 border border-transparent bg-green-500 rounded-4xl mt-28'>Download Resume</button>
             </div>
        </div>
    </div>

<div className="flex w-full h-[800px] justify-between pt-28">
  <div className="pl-10">
    <p className="border rounded-xl text-center px-4 py-1">EXPERIENCE</p>
    <h1 className="text-4xl font-semibold mt-3">
      My Work <br /> Experience
    </h1>
  </div>

  <div className="flex flex-col gap-6 w-5xl pr-10">
    <div className="flex justify-between items-start  p-5 h-32">
      <h1 className="text-2xl font-semibold text-slate-600">Product Designer</h1>
      <div className="text-right">
        <span className="text-md text-gray-500 font-mono block">Cool Craft</span>
        <p className="text-sm font-semibold">Nov 2024 - Now</p>
      </div>
    </div>
    <hr/>

    <div className="flex justify-between items-start  p-5 h-32">
      <h1 className="text-2xl font-semibold text-slate-600">Design Specialist</h1>
      <div className="text-right">
        <span className="text-md text-gray-500 font-mono block">Amazing Pixel</span>
        <p className="text-sm font-semibold">Nov 2022 - Nov-2024</p>
      </div>
    </div>

     <hr/>

    <div className="flex justify-between items-start  p-5 h-32">
      <h1 className="text-2xl font-semibold text-slate-600">UX/UI Designer</h1>
      <div className="text-right">
        <span className="text-md text-gray-500 font-mono block">Design Studio</span>
        <p className="text-sm font-semibold">Nov 2021-Nov 2022</p>
      </div>
    </div>
     <hr/>
    <div className="flex justify-between items-start  p-5 h-32">
      <h1 className="text-2xl font-semibold text-slate-600">Web Designer</h1>
      <div className="text-right">
        <span className="text-md text-gray-500 font-mono block">Freelancer</span>
        <p className="text-sm font-semibold">Nov 2018 - Nov 2021</p>
      </div>
    </div>
  </div>
</div>

 {/* another section  */}
 <div className='h-[500px] w-full bg-black text-white text-center pt-8'>
  <p className='border border-1 text-sm rounded-2xl w-18 h-7 mx-auto mb-4'>My world</p>
  <h1 className='mb-8 text-4xl '>When I am not Working <br /> I am Travelling</h1>

  <div className='grid grid-cols-4 gap-4 px-8 w-full'>
    <img 
      src='1.jpg' 
      className='h-[200px] w-full object-cover rounded-lg' 
      alt='Nature 1'
    />
    <img 
      src='https://th.bing.com/th/id/OIP.rzRtChdxySv1hQ3tu2zEyQHaEK?w=272&h=180&c=7&r=0&o=7&pid=1.7&rm=3' 
      className='h-[200px] w-full object-cover rounded-lg' 
      alt='Nature 2'
    />
    <img 
      src='1.jpg' 
      className='h-[200px] w-full object-cover rounded-lg' 
      alt='Nature 3'
    />
    <img 
      src='2.jpg' 
      className='h-[200px] w-full object-cover rounded-lg' 
      alt='Nature 4'
    />
  </div>
</div>
</>

  )
}

export default page