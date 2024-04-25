"use client"
// import env from "../../assets/Vector.png"
import phone from "../../assets/Phone.png"

import logo from "../../assets/logo.png"
import Image from "next/image"
// import icons
import { SlEnvolope } from "react-icons/sl";
import { LuFacebook } from "react-icons/lu";
import { LuTwitter } from "react-icons/lu";
import { AiOutlineYoutube } from "react-icons/ai";
import { SlSocialLinkedin } from "react-icons/sl";
import { TiThMenu } from "react-icons/ti";
import { CiMenuBurger } from "react-icons/ci";
import Link from "next/link"
import { useEffect, useState } from "react";
const Navbar = () => {
    const[open, setOpen] = useState(false)
    // sticky navbar
    const[scrolled, setScrolled] = useState(false)
    const handleScrolled = () => {
        const offset = window.scrollY;
        console.log(offset);

        if (offset > 100) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScrolled);
       
    }, []);
  
  return (
    <>
      <header className={`${scrolled ? "sticky" : ""}`}>
        {/* top navbar  */}
        <div className='border '>
            <div className='sm:container px-3 mx-auto sm:flex  justify-between items-center h-10  '>
                <div className="v_logo flex space-x-2 items-center">
                    <span><SlEnvolope /></span>
                    {/* <Image src={env} alt="v_logo" className="w-3 h-3 text-[#1F1B2D]"/> */}
                    <span className="text-xs tracking-wide font-[Rubik] ">sunnykhansadda@gmail.com</span>
                    <span className="text-xs tracking-wide font-[Rubik] pl-5">
                        <Image src={phone} alt="phone" className="text-white w-[7.0625rem] h-[.875rem]"/>
                      {/* <span>03085342445</span> */}
                    </span>

                </div>
                
           
    <div className="flex justify-center items-center sm:gap-2 gap-1 h-full">
        <Link href={"#"} className="flex items-center justify-center sm:w-[1.375rem]  sm:h-[1.375rem] w-4 h-4 bg-[#04AA77] text-white rounded-[.3125rem] hover:opacity-70">
            <LuFacebook className="w-3 h-3" />
        </Link>

        <Link href={"#"} className="flex items-center justify-center sm:w-[1.375rem] sm:h-[1.375rem] bg-[#04AA77] w-4 h-4 text-white rounded-[.3125rem] hover:opacity-70">
            <LuTwitter className="w-3 h-3" />
        </Link>
        <Link href={"#"} className="flex items-center justify-center sm:w-[1.375rem] sm:h-[1.375rem] w-4 h-4 bg-[#04AA77] text-white rounded-[.3125rem] hover:opacity-70">
            <AiOutlineYoutube className="w-3 h-3" />
        </Link>
        <Link href={"#"} className="flex items-center justify-center sm:w-[1.375rem] sm:h-[1.375rem] w-4 h-4 bg-[#04AA77] text-white rounded-[.3125rem] hover:opacity-70">
            <SlSocialLinkedin className="w-3 h-3" />
        </Link>
    </div>

</div>

            
        </div>

        {/* main navbar */}

         {/* just try */}
          {/* <nav className="sm:container px-3  mx-auto py-5 md:flex md:justify-between md:items-center">
            <div className="flex items-center justify-between">
                <span> */}
                {/* <Link href={"/"}><Image src={logo} alt="logo" className="w-[6.25rem] sm:w-[11.5625rem]  h-11"/></Link>
                </span> */}
              {/* <TiThMenu className="md:hidden" onClick={() => setOpen(!open)}/> */}
             {/* </div>
            
            <ul className="md:flex md:items-center z-[-1] md:z-auto ">
            <li className="my-4 md:my-0  md:mx-0 px-3">
                    <Link href={"/success_story"} className="sm:text-base text-sm font-medium  text-[#1F1B2D] hover:text-blue-500 transition-all duration-500">Success Story </Link>
             </li>
                <li className="my-4 md:my-0 px-3">
                    <Link href={"/business_solutions"} className="sm:text-base text-sm  font-medium  text-[#1F1B2D] hover:text-blue-500 duration-500">Business Solutions</Link>
                </li>
                <li className="my-4 md:my-0 px-3">
                    <Link href={"/contact"} className="sm:text-base text-sm  font-medium  text-[#1F1B2D] hover:text-blue-500 duration-500">Contact us</Link>
                </li>
            </ul>
            <div className="nav_right space-x-4  ">
                <Link href={"/login"} className="sm:text-base text-sm  font-medium   hover:text-red-500 duration-500 hover:underline">login</Link>
                <Link href={"/signup"} className=" md:h-4 md:w-16 text-sm font-normal md:py-3 md:px-4 h-2 w-12 py-2 px-3 gap-2 rounded-md text-white bg-[#FD5631] hover:border hover:border-gray-500 hover:bg-transparent hover:text-black ">sign up</Link>
            </div>
         </nav>  */}
      </header>
    </>
  )
}

export default Navbar
