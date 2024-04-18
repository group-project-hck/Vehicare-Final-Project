import Navbar from "@/components/navbar";
import NavbarB from "@/components/navbarB";
import ViewMotor from "@/components/viewMotor";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className=" w-full py-10 ">
        <Navbar />
        <ViewMotor/>
        <NavbarB />
      </div>
    </>
  );
}
