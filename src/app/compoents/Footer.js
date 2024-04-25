import logo from "../../assets/logo.png"
import Link from "next/link"
import Image from "next/image"
import phone from "../../assets/Phone.png"
// import icons
import { SlEnvolope } from "react-icons/sl";
import { FaPhoneVolume } from "react-icons/fa6";
import { LuFacebook } from "react-icons/lu";
import { LuTwitter } from "react-icons/lu";
import { AiOutlineYoutube } from "react-icons/ai";
import { SlSocialLinkedin } from "react-icons/sl";
import { HiArrowSmallRight } from "react-icons/hi2";
const Footer = () => {
  return (
    <>
      <div className="footer mt-10 sm:mt-16 md:mt-20 lg:mt-24 bg-gray-900 py-6 sm:py-8 md:py-10 lg:py-12 ">
  <div className="sm:container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 px-6">
    
    {/* Footer section 1 */}
    <div className="text-white ">
      <Link href={"/"}><Image src={logo} alt="logo" className="w-24 sm:w-48 h-10 sm:h-12" /></Link>
      <div className="flex items-center space-x-2 pt-4">
        <span><SlEnvolope  className="hover:text-green-200 duration-500"/></span>
        <span className="py-4 text-sm font-medium hover:text-green-200 duration-500 hover:underline cursor-pointer">sunnykhansadda@gmail.com</span>
      </div>
      <div className="flex items-center space-x-2 pt-2">
        <span><FaPhoneVolume className="hover:text-green-200 duration-500 hover:underline cursor-pointer"/></span>
        <span className="text-xs hover:text-green-200 duration-500 hover:underline cursor-pointer">+92 3085342445</span>
      </div>
        {/* Social media links */}
    <div className="flex items-center space-x-2  sm:col-span-2 md:col-span-4 pt-10">
      <Link href={"#"} className="flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full hover:opacity-70">
        <LuFacebook className="w-4 h-4 text-white" />
      </Link>
      <Link href={"#"} className="flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full hover:opacity-70">
        <LuTwitter className="w-4 h-4 text-white" />
      </Link>
      <Link href={"#"} className="flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full hover:opacity-70">
        <AiOutlineYoutube className="w-4 h-4 text-white" />
      </Link>
      <Link href={"#"} className="flex items-center justify-center w-8 h-8 bg-gray-800 rounded-full hover:opacity-70">
        <SlSocialLinkedin className="w-4 h-4 text-white" />
      </Link>
    </div>
    </div>

    {/* footer secton 2nd  */}
    <div className="text-white ">
      <h2 className="text-lg font-medium pb-4 uppercase">Business Solutions</h2>
     <p className="pb-4 text-sm hover:mr-1 hover:text-green-500 hover:translate-x-1 duration-500"><HiArrowSmallRight className="inline hover:"/>  <Link href={"#"} className="text-sm  "> Accounting Software </Link></p>
     <p className="text-sm hover:text-green-500 hover:translate-x-1 duration-500"> <HiArrowSmallRight className="inline hover:"/>  <Link href={"#"} className="text-sm ">  Kinnow Factory ERP   </Link></p>
     <p className="py-4 text-sm hover:text-green-500 hover:translate-x-1 duration-500"> <HiArrowSmallRight className="inline hover:"/>  <Link href={"#"} className="text-sm ">Point of Sales </Link></p>
     <p className="pb-4 text-sm hover:text-green-500 hover:translate-x-1 duration-500"> <HiArrowSmallRight className="inline hover:"/>  <Link href={"#"} className="text-sm ">  Whole Sale </Link></p>
     <p className="text-sm hover:text-green-500 hover:translate-x-1 duration-500"> <HiArrowSmallRight className="inline hover:"/>   <Link href={"#"} className="text-sm "> Online Accounting </Link></p>
      
      {/* <ul className="space-y-3">
        <li className="">
            <Link href={"3"} className="text-sm "> Accounting Software </Link>
        </li>
        <li>
            <Link href={"3"}>Kinnow Factory ERP</Link>
        </li>
        <li className="">
            <Link href={"3"}>Point of Sales</Link>
        </li>
        <li>
            <Link href={"3"}>   Whole Sale</Link>
        </li>
        <li>
            <Link href={"3"}>  Online Accounting</Link>
        </li>
      </ul> */}
      
    </div>
    {/* 3rd footer sec */}
    <div className="text-white">
      <h2 className="text-lg font-medium pb-4 uppercase">Compony</h2>
     <p className="pb-4 text-sm hover:mr-1 hover:text-green-500 hover:translate-x-1 duration-500"><HiArrowSmallRight className="inline hover:"/>  <Link href={"#"} className="text-sm  "> About Us</Link></p>
     <p className="text-sm hover:text-green-500 hover:translate-x-1 duration-500"> <HiArrowSmallRight className="inline hover:"/>  <Link href={"#"} className="text-sm ">  Our Team   </Link></p>
     <p className="py-4 text-sm hover:text-green-500 hover:translate-x-1 duration-500"> <HiArrowSmallRight className="inline hover:"/>  <Link href={"#"} className="text-sm ">Contact Us </Link></p>
    
      </div>
    {/* 4th sec */}
    <div className="text-white">  
      <h2 className="text-lg font-medium pb-4 uppercase">other links</h2>
     <p className="pb-4 text-sm hover:mr-1 hover:text-green-500 hover:translate-x-1 duration-500"><HiArrowSmallRight className="inline hover:"/>  <Link href={"#"} className="text-sm  "> Terms & Conditions</Link></p>
     <p className="text-sm hover:text-green-500 hover:translate-x-1 duration-500"> <HiArrowSmallRight className="inline hover:"/>  <Link href={"#"} className="text-sm ">  Privacy Policy </Link></p>
     <p className="py-4 text-sm hover:text-green-500 hover:translate-x-1 duration-500"> <HiArrowSmallRight className="inline hover:"/>  <Link href={"#"} className="text-sm ">Disclaimer </Link></p>
    
      </div>

    {/* Footer section 2 */}
    {/* Repeat this structure for each section */}

  
  </div>

 
</div>
 {/* copy right ssections */}
 <div className="bg-[#153448] text-center py-5  text-white">
    <p>&copy; 2024- Sana Ullah</p>
  </div>
       
    </>
  )
}

export default Footer
