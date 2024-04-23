"use client";

import bgProfile from "@/Assets/backgroundProfile.svg";
import GetServices from "@/actions/ServiceBooks";
import CardProfile from "@/components/Card/cardProfile";
import { useEffect, useState } from "react";

export default function Profile() {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<any>();
  useEffect(() => {
    const getVehicles = async () => {
      setLoading(true);
      const { data } = await GetServices();
      setUser(data);
      console.log(data);
      setLoading(false);
    };
    getVehicles();
  }, []);
  return (
    <>
      <div
        className="w-full h-screen fixed"
        style={{
          backgroundImage: `url(${bgProfile.src})`,
          backgroundSize: "cover", // Mengatur gambar agar sesuai dengan ukuran layar
          backgroundPosition: "center", // Mengatur posisi gambar di tengah
        }}
      >
        <CardProfile />
      </div>
    </>
  );
}
