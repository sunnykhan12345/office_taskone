import Image from "next/image";
import Hero from "./compoents/Hero"
import BusinessPage from "./business_solution/page";
import Customer from "./compoents/Customer.js"
export default function Home() {
  return (
    <>
      <Hero />
      <BusinessPage />
      <Customer />
    </>
  );
}
