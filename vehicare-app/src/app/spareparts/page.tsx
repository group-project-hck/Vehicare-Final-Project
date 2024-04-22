"use client"

import Navbar from "@/components/Navbar/navbar";
import NavbarBottom from "@/components/Navbar/navbarBottom";
import bgSparepart from "../../Assets/backgroundSparepart.svg";
import CardProduct from "@/components/Card/cardProduct";
import { useEffect, useState } from "react";
import { Sparepart } from "@/databases/models/types";

export default function Profile() {
  const [listspareparts, setlistSpareparts] = useState<Sparepart[]>([]);
  async function fetchData() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}api/spareparts`,
      {
        cache: "no-store",
      }
    );
    const data = await response.json();
    setlistSpareparts(data.data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <>
      <div
        className="w-full h-screen fixed"
        style={{
          backgroundImage: `url(${bgSparepart.src})`,
          backgroundSize: "cover", // Mengatur gambar agar sesuai dengan ukuran layar
          backgroundPosition: "center", // Mengatur posisi gambar di tengah
        }}
      >
        <Navbar />
        {/* {listspareparts && 
          listspareparts.map((persparepart : Sparepart, index: number) => ( */}
            <CardProduct persparepart={listspareparts} />
        <NavbarBottom />
      </div>
    </>
  );
}
