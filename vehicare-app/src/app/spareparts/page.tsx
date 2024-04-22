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
          const data = await response.json();
    setlistSpareparts(data.data);
  }
  useEffect(() => {
    fetchData();
  }, []);
 
    return (
        <> <div className="flex w-full h-5/6 justify-center items-center rounded pt-2">
            <div className="flex w-full h-full mx-10 shadow-xl rounded-lg border mb-2" style={{ borderColor: "transparent" }}>
                <div className="flex flex-1 justify-center items-center pl-5" style={{ backgroundColor: 'transparent' }}></div>
                <div className="flex flex-[3] justify-center items-center pl-5 pr-5 rounded-xl bg-white opacity-80 overflow-auto">
                    <div className="relative p-6 mt-6">
                        <div className="relative mt-32 -mb-6 w-full overflow-x-auto pb-6 flex flex-wrap lg:flex-col lg:max-h-full lg:overflow-y-auto">
                             <CardProduct persparepart={listspareparts} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 justify-center items-center pl-5" style={{ backgroundColor: "transparent" }}></div>
            </div>
        </div>
        </>
    );
