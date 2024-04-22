import React, { useEffect, useState } from "react";
import closeBtn from "../../Assets/closeBtn.svg";
import Image from "next/image";
import { Sparepart } from "@/databases/models/types";
import LoadingComponent from "../loading";

interface InputModalChatProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  item: string;
}

export default function DetailProductModal({
  modal,
  setModal,
  item,
}: InputModalChatProps) {
  const toggleModal = () => {
    setModal(!modal);
  };
  const [sparepart, setsparepart] = useState<Sparepart | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  async function fetchData() {
    setLoading(true);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}api/spareparts/${item}`,
      {
        cache: "no-store",
      }
    );
    const data = await response.json();
    setsparepart(data.data);
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, [item]);

  // Loading Effect
  if (loading) {
    return <LoadingComponent />
  }

  return (
    <>
      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white w-full mx-4 px-4 rounded-xl md:w-1/2 lg:w-1/2 relative">
            {/* Isi Modal */}
            <div className="py-6">
              <div className="flex w-full h-96 bg-white shadow-lg rounded-lg overflow-hidden justify-end relative">
                <div
                  className="w-1/3 bg-cover"
                  style={{
                    backgroundImage: `url(${sparepart?.image})`,
                  }}
                ></div>
                <div className="w-2/3 p-4">
                  <h1 className="text-gray-900 font-bold text-2xl">
                    {sparepart?.name}
                  </h1>
                  {/* Tombol Close */}
                  <div
                    onClick={toggleModal}
                    className="absolute top-0 right-0 m-2 cursor-pointer"
                  >
                    <Image
                      src={closeBtn}
                      alt="Close"
                      className="h-8 w-8 btn-ghost"
                    />
                  </div>
                  <p className="mt-2 text-gray-600 text-sm">
                    {sparepart?.type}
                  </p>
                  <p className="mt-2 text-gray-600 text-sm">
                    {sparepart?.description}
                  </p>
                  <div className="flex item-center justify-between mt-3">
                    <h1 className="text-gray-700 font-bold text-xl">
                      {sparepart?.price
                        ? new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(sparepart.price)
                        : 0}
                    </h1>
                    <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                      Add to Card
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
