
const page = () => {
  return (
    <div className="bg-black text-white h-full">
        <h1 className="text-8xl font-medium pt-10 mb-8">PROJECTS</h1>
        <div className="grid grid-cols-3 ">
           <div className="bg-gray-900 h-[400px] w-[400px] border rounded-2xl">
             <div className="flex justify-between items-center p-2">
                <h1 className="font-light text-sm ">Project Name Here</h1> <span>2023</span>
             </div>
             <div className="h-auto w-full">
                <img src="1.jpg" alt="" className="h-full w-full object-fit border rounded-t-2xl"/>
             </div>
           </div>
           <div className="bg-gray-900 h-[400px] w-[400px] border rounded-2xl">
             <div className="flex justify-between items-center p-2">
                <h1 className="font-light text-sm ">Project Name Here</h1> <span>2023</span>
             </div>
             <div className="h-auto w-full">
                <img src="1.jpg" alt="" className="h-full w-full object-fit border rounded-t-2xl"/>
             </div>
           </div>
           <div className="bg-gray-900 h-[400px] w-[400px] border rounded-2xl">
             <div className="flex justify-between items-center p-2">
                <h1 className="font-light text-sm ">Project Name Here</h1> <span>2023</span>
             </div>
             <div className="h-auto w-full">
                <img src="1.jpg" alt="" className="h-full w-full object-fit border rounded-t-2xl"/>
             </div>
           </div>
           <div className="bg-gray-900 h-[400px] w-[400px] border rounded-2xl">
             <div className="flex justify-between items-center p-2">
                <h1 className="font-light text-sm ">Project Name Here</h1> <span>2023</span>
             </div>
             <div className="h-auto w-full">
                <img src="1.jpg" alt="" className="h-full w-full object-fit border rounded-t-2xl"/>
             </div>
           </div>
 
        </div>
        {/* next section  */}
        <div className="bg-white text-black h-[400px] w-full flex">
            <div>
               <p>FAQ</p>
               <h1>Questions and Answer</h1>
            </div>

            <div className="flex">
                <div>
                <h1>What services do you offer </h1>
                <p></p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default page