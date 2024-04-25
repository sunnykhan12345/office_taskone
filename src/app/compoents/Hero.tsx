

// import hero from "../../assets/Hero.png"
import hero from "../../assets/hero.png"
import group from "../../assets/Group 8.png"
import man from "../../assets/man.png"
import { GiLaptop } from "react-icons/gi";
import Image from "next/image"
const Hero = () => {
  return (
   <>
    <div className="bg-gray-100 pb-20" >
        <Image src={hero} alt="hero"/>
      {/* <Image src={hero} alt="hero" />
      <div className="container mx-auto absolute top-[30%] left-[140px] w-[388px] h-[299px]">
         <h6 className="w-[187px] text-[#FD5631] top-[187px] py-3 font-[rubik]">Integral & User Friendly</h6>
         <h1 className="w-[378px] text-white text-[40px] font-[900] font-[rubik] loading-[47px] mb-4 ">Redefine Your Business Approach With Sage Buddy</h1>
         <p className="w-[355px] h-10 text-sm font-[rubik] text-[#ffffff]">Sale and Purchase Items in multiple units, allows great flexibility to deal with measurement unit.</p>
      </div> */}

      <div className="">
      <div className="sm:container mx-auto ">
        <div className=" px-6 mt-20 grid sm:grid-rows-1 sm:grid-cols-2 gap-10 items-center ">
            <Image src={group} alt="img" className="w-[586px] h-[472px] "/>
      
        <div className="space-x-2  ">
            <div className="border bg-red-500 text-red-500 w-[50px] h-1 inline-block"></div>
            <span className="font-[rubik] text-sm text-[#FD5631] font-semibold">A wise Companion</span>
            <h1 className="font-[rubik] text-4xl text-[#1F1B2D] font-semibold">Grow your business with SageBuddy</h1>
            <p className="font-[rubik] text-sm text-[#808080] font-normal  leading-5 py-3 
             ">SageBuddy means "A wise Companion", so having SageBuddy as a part of your business ensures that you got an intelligent friend at your back that will ease your work to your 100% satisfaction.</p>
              <p className="font-[rubik] text-sm  font-normal text-[#808080]  leading-5 py-3 
            ">SageBuddy is a great software for all your needs, no matter if you need it for accountancy, sale/purchase items, keeping inventory, purchase and sale item in any measurement unit, manage human resource and much more.</p>
        </div>
      </div>
      {/* serice card here */}
        
      </div>
      </div>
    
    </div>


   
   </>
  )
}

export default Hero