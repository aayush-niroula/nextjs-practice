import React from 'react'

const page = () => {
  return (
    <>
<div className='w-full min-h-screen py-10' style={{backgroundImage:"url('https://wallpaperaccess.com/full/5652035.jpg')"}}>
  <div className='flex items-center mb-16 pt-30'>
    <hr className='flex-grow border-t border-black'/>
    <h1 className='px-4 text-2xl font-light border rounded-2xl'>about</h1>
    <hr className='flex-grow border-t border-black'/>
  </div>

  <div className='flex justify-center gap-60 items-center'>
    <div className='w-[400px] h-[400px] p-4  border rounded-2xl '>
      <h1 className='text-4xl text-center font-medium mb-16'>My Experience</h1>
      <p className='tracking-wide text-pretty pl-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur eveniet libero laudantium sapiente voluptate alias harum, animi deserunt veritatis nam. Veniam corporis dolore eveniet, nihil odit commodi ab laborum quasi!</p>

    </div>
    <div className='flex flex-col'>
    <div className='w-[200px] h-[200px] object-fill border-8 border-black '>
      <img src="about.jpg" alt="" className='h-full w-full rounded-2xl' />
    </div>
    <div className='flex flex-col gap-4 mt-4 font-medium'>
      <h1 className='text-center font-bold text-xl'>Basic info</h1>
       <p className=''><span>DOB:</span> 2003</p>
       <p><span>Gender:</span> Male</p>
       <p><span>Languages:</span> English,Nepali,Hindi</p>
       <p><span>Availabilty:</span> Free for Freeelancing</p>
      
      
    </div>

    </div>
    
  </div>
</div>



</>

  )
}

export default page