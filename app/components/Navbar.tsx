"use client";

import { Menu } from "lucide-react";
import Link from "next/link";

import { useState } from "react";




export const Navbar = () => {
const [open,setOpen]=useState(false);
  return (
   
        <nav className="font-medium font-serif h-16 bg-transparent absolute top-0 left-0 w-full z-20">
         <button className="text-white md:hidden absolute right-10" onClick={()=>setOpen(!open)}>{open ? "X" : <Menu/> } </button>
         {
            open && (
                <ul className="flex flex-col justify-center items-center gap-4 text-sm text-white absolute top-16 left-0 w-full bg-black/70 py-54 md:hidden ">
                <li className="border-b-2 cursor-pointer border-transparent hover:border-red-700 transition delay-150 duration-200 ease-in "><Link href={'/'}>HOME</Link></li>
                <li className="border-b-2 cursor-pointer border-transparent hover:border-red-700 transition delay-150 duration-200 ease-in"><Link  href={'/projects'}>PROJECTS</Link></li> 
                <li className="border-b-2 cursor-pointer border-transparent hover:border-red-700 transition delay-150 duration-200 ease-in" ><Link  href={'/about'}>ABOUT</Link></li>
                <li className="border-b-2 cursor-pointer border-transparent hover:border-red-700 transition delay-150 duration-200 ease-in"><Link  href={'/contacts'}>CONTACT</Link></li>
            </ul>
            )

         }
            <ul className=" hidden md:flex justify-center gap-4 text-2xl text-white ">
                <li className="border-b-2 cursor-pointer border-transparent hover:border-red-700 transition delay-150 duration-200 ease-in "><Link href={'/'}>HOME</Link></li>
                <li className="border-b-2 cursor-pointer border-transparent hover:border-red-700 transition delay-150 duration-200 ease-in"><Link  href={'/projects'}>PROJECTS</Link></li> 
                <li className="border-b-2 cursor-pointer border-transparent hover:border-red-700 transition delay-150 duration-200 ease-in" ><Link  href={'/about'}>ABOUT</Link></li>
                <li className="border-b-2 cursor-pointer border-transparent hover:border-red-700 transition delay-150 duration-200 ease-in"><Link  href={'/contacts'}>CONTACT</Link></li>
            </ul>
        </nav>
  )
}
