"use client"
import CardProduct from "@/components/Card/cardProduct";
import { useEffect, useState } from "react";
import { Sparepart } from "@/databases/models/types";
import { GetSpareparts } from "@/actions/Spareparts";
import bgSparepart from "@/Assets/backgroundSparepart.svg"

export default function Profile() {
  // Fetching dari action spareparts
  const [listspareparts, setlistSpareparts] = useState<Sparepart[]>([]);
  useEffect(() => {
    (async () => {
      const data = await GetSpareparts()
      setlistSpareparts(data.data)
    })()
  }, []);
  
  return (
    <>
      <div className="w-full h-screen fixed" style={{
        backgroundImage: `url(${bgSparepart.src})`,
        backgroundSize: 'cover', // Mengatur gambar agar sesuai dengan ukuran layar
        backgroundPosition: 'center', // Mengatur posisi gambar di tengah
      }}>
        <div className="flex justify-center w-full h-5/6 shadow-xl rounded-lg mb-2 pt-5">
          <div className="flex w-[60%] rounded-xl bg-white opacity-90 overflow-auto">
            <div className="w-full overflow-x-auto flex flex-wrap lg:flex-col lg:max-h-full lg:overflow-y-auto p-5">
              <CardProduct persparepart={listspareparts} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}