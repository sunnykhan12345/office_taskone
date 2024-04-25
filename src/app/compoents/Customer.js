'use client'
import Image from "next/image"
import arr from "../../assets/arrow-right 2.png"
import screen from "../../assets/Screenshot 2022-05-07 at 4.16 1.png"
import arr_right from "../../assets/arrow-right 1.png"
import rec from "../../assets/Rectangle 2146.png"
const Customer = () => {
  return (
<div className='container mx-auto'>
  <div className='flex flex-col items-center text-center'>
    <h6 className='text-[#FD5631] text-sm font-medium py-2 '>REVIEWs</h6>
    <h2 className='sm:text-4xl font-bold text-2xl'>10k Happy Customers</h2>
    <p className=' text-sm font-normal  py-5 px-[40px] lg:px-[235px] text-[#808080] text-justify'>Ashamed no inhabit ferrars it ye besides resolve. Own judgment directly few trifling. Elderly as pursuit at regular do parlors. Rank what has into fond pursuit at regular.</p>
  </div>

  <div className="sm:px-0 px-10 flex justify-center items-center">
    <Image src={arr} alt="arrow"/>
    <Image src={screen} alt="arrow"/>
    <Image src={arr_right} alt="arrow"/>
   
  </div>
  
  <div className="relative flex justify-center items-center flex-col ">
  <Image src={rec} alt="arrow" className="relative"/>
    {/* <span className="absolute bg-[#FD5631] w-10 h-10 rounded-3xl -top-3 left-2"></span> */}
    {/* <span className="bg-black w-3 h-3 absolute left-14 top-20"></span> */}
    <span className="text-base font-medium py-1">Iftikhar Ahmad</span>
    <span className="text-sm font-normal text-[#808080]">Senior Developer</span>
  </div>

</div>

   
  )
}

export default Customer