"use client"
import bgProfile from "@/Assets/backgroundProfile.svg";
import CardProfile from "@/components/Card/cardProfile";
import { useRouter } from "next/navigation";

export default function Profile() {
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
        <div className="flex w-full h-5/6 justify-center items-center rounded pt-2">
          <div
            className="flex w-full h-full mx-10 shadow-xl rounded-lg border mb-2"
            style={{ borderColor: "transparent" }}
          >
            <CardProfile/>
          </div>
        </div>
      </div>
    </>
  );
}
