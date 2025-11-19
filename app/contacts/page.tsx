import { Facebook, Instagram, Linkedin, Mail, Phone, Pin, Twitter } from 'lucide-react'


const page = () => {
  return (
    <div className='min-h-screen w-full text-white bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: "url('/mail.jpg')",}}>
      <div className='absolute inset-0 bg-black/10'>
      <h1 className='text-5xl text-black font-bold text-center pt-15'>Get in touch </h1>
      <p className='text-center font-light text-sm pt-4 pb-4 text-black'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, eum id, dolor debitis error repudiandae autem animi voluptatum rem porro saepe dolorem ea laboriosam dicta impedit hic eos assumenda distinctio?</p>

<div className='flex justify-evenly  gap-90 pt-10 text-white'>
        {/* Message wala section start */}
<div className=' text-white p-6 rounded-2xl backdrop-blur-[2px] '>
  <h1 className="text-3xl mb-6 text-center">Message Me</h1>

  <form action="" className="flex flex-col gap-6 w-full max-w-md">
    <div className="grid grid-cols-3 items-center gap-3">
      <label className="font-medium">Name</label>
      <input
        type="text"
        placeholder="Your name"
        className="border rounded-2xl p-2 col-span-2"
      />
    </div>
    <div className="grid grid-cols-3 items-center gap-3">
      <label className="font-medium">Email</label>
      <input
        type="text"
        placeholder="Email here..."
        className="border rounded-2xl p-2 col-span-2"
      />
    </div>
    <div className="grid grid-cols-3 items-start gap-3">
      <label className="font-medium mt-2">Message</label>
      <textarea
        placeholder="Your message"
        className="border rounded-2xl p-2 col-span-2 h-28"
      />
    </div>

    <button type='submit' className='border rounded p-1  w-[100px] bg-blue-800 text-white'>Send Message</button>

  </form>
</div>
      <div className='w-[300px] bg-gradient-to-br from-purple-700 to-purple-900  flex flex-col p-6 border rounded-2xl justify-center gap-6 '>
        <h1 className='text-center font-medium text-2xl'>Contact information</h1>
        <p className='font-light text-center text-sm '>Email me or call me fron the given contact information</p>

        <div className='flex flex-col gap-6'>
          <div className='flex gap-8 items-center'>
           <span><Phone/></span>
          <p>9827027881</p>
          </div>
          <div className='flex gap-8 items-center'>
           <span><Mail/></span>
          <p>ayushniroula644@gmail.com</p>
          </div>
          <div className='flex gap-8 items-center'>
           <span><Pin/></span>
          <p>Letang, Morang</p>
          </div>


          <div className='flex gap-3 pt-10'>
           <p className='border rounded-full p-1'><Twitter size={20}/></p>
           <p className='border rounded-full p-1'><Facebook size={20}/></p>
           <p className='border rounded-full p-1'><Instagram size={20}/></p>
           <p className='border rounded-full p-1'><Linkedin size={20}/></p>
          </div>
        
        </div>
      </div>

</div>

    </div>
      </div>
  )
}

export default page