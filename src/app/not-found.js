
import errorimg from "../assets/not_found.jpg"
import Image from "next/image"
const PageNotFound = () => {
  return (
    <>
     <div>
        <Image src={errorimg} alt="errro" className="w-full" style={{objectFit:"cover"}}/>
     </div>
    </>
  )
}

export default PageNotFound
