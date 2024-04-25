import Link from "next/link"
import login_logo from "../../assets/logo.png"
import Image from "next/image"

const SignIn = () => {
  return (
    <div className="pic">
    <div className='container mx-auto'>
   
  <div className=""> 
  <Image src={login_logo} alt="login" className="text-white mx-auto mb-0 w-[140px] h-[46px] "/>
  </div>
       <div className='flex justify-center m-auto  w-[535px] h-[645px] mt-5 signin'>
        
         <div className='border  w-[520px] h-[607px] mt-0'>
            <div className="text-center">
            <h1 className=" pt-8 pb-2 font-medium text-[26px] ">Sign In</h1>
           <h6 className="text-sm text-[#808080]">Don't have an account yet?<span className="font-bold text-red-600 hover:underline cursor-pointer">Sign up</span> </h6>
            </div>
            <form action="" className="pt-11">
              <div className="w-[440px] h-[82px]  m-auto">
              <label className="block font-normal text-sm py-3 text[#1F1B2D]">Your Email</label>
              <input type="text"  name="email" placeholder="sunny@gmail.com" className="cursor-pointer  w-[440px] h-[54px] border rounded-sm px-4 text-sm focus:outline-none focus:border-2 focus:border-blue-500" />
              </div>

              <div className="w-[440px] h-[82px]  m-auto py-7 my-3">
              <label className="block font-normal text-sm  text[#1F1B2D] py-3">Your Password</label>
              <input type="password"  name="email" placeholder="***********" className="cursor-pointer w-[440px] h-[54px] border rounded-sm px-4 text-sm focus:outline-none focus:border-2 focus:border-blue-500" />
              </div>
            

              <div className="w-[440px] h-[82px]  m-auto mt-14 flex justify-between items-center ">
              <div> <input type="checkbox"className="" /><span className="pl-2 font-sm text-[#808080] font-normal">Remember me</span></div>
               <p className="text-[#04AA77] text-sm font-normal hover:underline cursor-pointer">forget password?</p>
              </div>

              <div className="w-[440px] h-[82px]  m-auto ">
              <Link href={"/signin"}>
              <button className="bg-[#04AA77] w-full h-[54px] text-white uppercase text-xs font-semibold hover:opacity-70 duration-500">SignIn</button>
              </Link>
              </div>
            </form>
         </div>
       </div>
   </div>
    </div>
  )
}

export default SignIn

