import React, { useEffect, useState } from "react";
import closeBtn from "../../Assets/closeBtn.svg";
import Image from "next/image";
import { ObjectId } from "mongodb";
import { Sparepart } from "@/databases/models/types";

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

  if (loading) {
    return (
      <div role="status">
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
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
