import Image from "next/image";
import Link from "next/link";
import house from "../../assets/house.png"
import cute from "../../assets/caut.png"
import pc from "../../assets/pc.png"
import foucol from "../../assets/4 column.png"
import hw from "../../assets/hw.png"
import phr from "../../assets/phar.png"
import tr from "../../assets/8 1 (Traced).png"
import man from "../../assets/man.png"
import { GiLaptop } from "react-icons/gi";
import { IoIosArrowRoundForward } from "react-icons/io";
import two from "../../assets/2.png"
const BusinessPage = () => {
  return (
    <>
     <div className='container mx-auto pt-[97px]'>
        <div className='text-center pb-[52px]'>
        <span className='text-[#FD5631] font-[rubik] text-sm font-normal'>OUR FEATURES</span>
        <h2 className='text-[#1F1B2D] font-[rubik] text-4xl font-semibold'>Solutions for your <br /> Business</h2>
        </div>

        {/* service card  */}
      <div className="service grid sm:grid-rows-1 sm:grid-cols-3 gap-4 mb-20 text-center   ">
        <div className="bg-gray-100 rounded-lg shadow-sm py-6 px-4 hover:bg-gray-200 duration-500 hover:-translate-y-2">
         <h4 className="text-xl font-bold font-poppins mb-4 text-center">Point of Sales</h4>
       <div className="flex items-center justify-center mb-4">
            {/* <GiLaptop className="h-12 w-12 text-[#04AA77]"/> */}
            <Image src={pc} alt="house" className="w-20 "/>
       </div>
     <p className="text-xs text-[#808080] leading-5 mb-4">
     SageBuddy has the capability to deal with these kind of variations and above this inventory remains 100% intact and correct.
    </p>
    <Link href="#" className="block text-[#FD5631] text-sm text- hover:underline">Learn More </Link>
</div>

{/* second card */}
<div className="bg-gray-100 rounded-lg shadow-sm  py-6 px-4 hover:bg-gray-200 duration-500 hover:-translate-y-2">
         <h4 className="text-xl font-bold font-poppins mb-4 text-center">Cold Storage / Warehouse</h4>
       <div className="flex items-center justify-center mb-4">
            {/* <GiLaptop className="h-12 w-12 text-[#04AA77]"/>house */}
            <Image src={house} alt="house" className="w-20 "/>
       </div>
     <p className="text-xs text-[#808080] leading-5 mb-4 ">
     SageBuddy has the capability to deal with these kind of variations and above this inventory remains 100% intact and correct.
    </p>
    <Link href="#" className="block text-[#FD5631] text-sm text- hover:underline">Learn More </Link>
</div>
{/* third card */}
<div className="bg-gray-100 rounded-lg shadow-sm py-6 px-4 hover:bg-gray-200 duration-500 hover:-translate-y-2">
         <h4 className="text-xl font-bold font-poppins mb-4 text-center">Kinno Factory ERP</h4>
       <div className="flex items-center justify-center mb-4">
            {/* <GiLaptop className="h-12 w-12 text-[#04AA77]"/> */}
            <Image src={cute} alt="house" className="w-20 "/>
       </div>
     <p className="text-xs text-[#808080] leading-5 mb-4">
     SageBuddy has the capability to deal with these kind of variations and above this inventory remains 100% intact and correct.
    </p>
    <Link href="#" className="block text-[#FD5631] text-sm text- hover:underline">Learn More </Link>
</div>

{/* second row */}
{/* 4th column */}
<div className="bg-gray-100 rounded-lg shadow-sm py-6 px-4 hover:bg-gray-200 duration-500 hover:-translate-y-2">
         <h4 className="text-xl font-bold font-poppins mb-4 text-center">Tiles / Sanitary Retail Shop</h4>
       <div className="flex items-center justify-center mb-4 relative">
            {/* <GiLaptop className="h-12 w-12 text-[#04AA77]"/> */}
            <Image src={tr} alt="" />
            <Image src={foucol} alt="house" className="w-20 absolute "/>
       </div>
     <p className="text-xs text-[#808080] leading-5 mb-4">
     SageBuddy has the capability to deal with these kind of variations and above this inventory remains 100% intact and correct.
    </p>
    <Link href="#" className="block text-[#FD5631] text-sm text- hover:underline">Learn More </Link>
</div>
{/* 5th column */}
<div className="bg-gray-100 rounded-lg shadow-sm py-6 px-4 hover:bg-gray-200 duration-500 hover:-translate-y-2">
         <h4 className="text-xl font-bold font-poppins mb-4 text-center">Pharmacy Store</h4>
       <div className="flex items-center justify-center mb-4">
            {/* <GiLaptop className="h-12 w-12 text-[#04AA77]"/> */}
            <Image src={phr} alt="house" className="w-20 "/>
       </div>
     <p className="text-xs text-[#808080] leading-5 mb-4">
     SageBuddy has the capability to deal with these kind of variations and above this inventory remains 100% intact and correct.
    </p>
    <Link href="#" className="block text-[#FD5631] text-sm text- hover:underline">Learn More </Link>
</div>
{/* 6th column */}
<div className="bg-gray-100 rounded-lg shadow-sm py-6 px-4 hover:bg-gray-200 duration-500 hover:-translate-y-2">
         <h4 className="text-xl font-bold font-poppins mb-4 text-center">Hardware & Plywood Shop</h4>
       <div className="flex items-center justify-center mb-4 relative">
            {/* <GiLaptop className="h-12 w-12 text-[#04AA77]"/> */}
            <Image src={tr} alt="" />
            <Image src={hw} alt="house" className="w-20 absolute"/>
       </div>
     <p className="text-xs text-[#808080] leading-5 mb-4">
     SageBuddy has the capability to deal with these kind of variations and above this inventory remains 100% intact and correct.
    </p>
    <Link href="#" className="block text-[#FD5631] text-sm text- hover:underline">Learn More </Link>
</div>
         
          
          
        </div>


     </div>
     
  
    <div className="bg-gray-100 my-20 py-10">
  <div className="container mx-auto">
    <div className="grid gap-10 lg:grid-cols-2">
    <Image src={man} alt="man" className="w-[513px] h-[451] m-auto"/>

      <div className="flex flex-col items-center justify-center relative  md:w-[400px] md:h-[400px] text-[#1F1B2D] border-dotted border-4 rounded-full lg:bg-0  w-[300px] h-[300px] m-auto ">
        <h5 className="absolute top-[180px] left-[3px] transform -translate-x-1/2 -translate-y-1/2 font-bold text-3xl">2</h5>
        <span className="absolute left-[-12px] top-[50%] transform -translate-y-1/2 text-xs font-medium">Cities</span>
        <h5 className="absolute left-[50%] top-[-20px] transform -translate-x-1/2 font-bold text-3xl">5+</h5>
        <span className="absolute left-[50%] bottom-[94%] transform translate-x-[-50%] text-xs font-medium">Customers</span>
        <h5 className="absolute top-[] sm:left-[403px] transform -translate-y-1/2 -translate-x-full font-bold text-3xl ">1</h5>
        <span className="absolute left-[93%] top-[50%] transform -translate-y-1/2 text-xs font-medium">Countries</span>
      </div>

    </div>
  </div>
</div>


    </>
  )
}

export default BusinessPage