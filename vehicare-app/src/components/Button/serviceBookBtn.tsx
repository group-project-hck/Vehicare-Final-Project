"use client"
import add from "@/Assets/add.svg"
import Image from "next/image";
import { useState } from "react";
import InputModalServieBook from "../Modal/inputServiceBook";

export default function ServiceBooksBtn({ getHistory }: { getHistory: any }) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      {/* <button className="w-10 h-10 mt-5" onClick={toggleModal}
        style={{
          backgroundSize: "cover", // Mengatur gambar agar sesuai dengan ukuran layar
          backgroundPosition: "center", // Mengatur posisi gambar di tengah
        }}
      >
        <div className="hover:scale-125 transition ease-in-out duration-300 hover:text-white text-transparent">
          <Image
            src={add}
            alt="Logo Home"
            className="bg-orange-600 p-2 bg-opacity-80 rounded-full"
          />
        </div>
      </button> */}
      <InputModalServieBook getHistory={getHistory} modal={modal} setModal={setModal} />
    </>
  );
}
