"use client";
import bgProfile from "@/Assets/backgroundProfile.svg";
import CardHistory from "@/components/Card/cardHistory";
import GetServices from "@/actions/ServiceBooks";
import { ServiceBooks } from "@/databases/models/types";
import add from "@/Assets/add.svg"
import Image from "next/image";
import { useEffect, useState } from "react";
import InputModalServieBook from "@/components/Modal/inputServiceBook";

export default function History() {
  // Fetching dari action service books
  const [Books, setBooks] = useState<ServiceBooks[]>([]);
  const getHistory = async () => {
    const { Books }: { Books: ServiceBooks[] } = await GetServices();
    setBooks(Books);
  };
  useEffect(() => {
    getHistory();
  }, []);

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
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
            <div className="flex w-[70%] rounded-xl bg-black bg-opacity-50 overflow-auto">
              <div className="w-full overflow-x-auto flex flex-wrap lg:flex-col lg:max-h-full lg:overflow-y-auto p-5">
                <button className="w-10 h-10" onClick={toggleModal}
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
                </button>
                {/* MAPING CARD HERE */}
                {Books &&
                  Books.map((book, i) => <CardHistory key={i} book={book} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <InputModalServieBook getHistory={getHistory} modal={modal} setModal={setModal} />
    </>
  );
}
