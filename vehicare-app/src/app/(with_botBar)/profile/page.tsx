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
        <div className="flex justify-center w-full h-5/6 shadow-xl rounded-lg mb-2 pt-5 px-10">
          <div className="flex w-full h-full shadow-xl rounded-lg mb-2 justify-center bg-white bg-opacity-10 py-1">
            <div className="flex w-[60%] rounded-xl bg-black bg-opacity-50 overflow-auto">
              <div className="w-full overflow-x-auto flex flex-wrap lg:flex-col lg:max-h-full lg:overflow-y-auto p-5">
                <CardProfile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
