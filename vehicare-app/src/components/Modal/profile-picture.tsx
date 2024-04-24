"use client";
import React, { useEffect, useState } from "react";
import closeBtn from "../../Assets/closeBtn.svg";
import Image from "next/image";
import { Sparepart } from "@/databases/models/types";
import LoadingComponent from "../loading";
import { useRouter } from "next/navigation";

interface InputModalChatProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  item: {
    _id: string;
    name: string;
    username: string;
    image: string;
    email: string;
    password: string;
    role: string;
  };
  getVehicles : any
}


export default function ProfilePictureModal({
  modal,
  setModal,
  item,
  getVehicles
}: InputModalChatProps) {
  const toggleModal = () => {
    setModal(!modal);
  };
  const [image, setImage] = useState<any>();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setImage(selectedFile);
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("image", image);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}api/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      getVehicles()
    } catch (error) {
      console.log(error);
    }
  };
  const [loading, setLoading] = useState<boolean>(false);
  if (loading) {
    return <LoadingComponent />;
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
                    backgroundImage: `url(${item?.image})`,
                  }}
                ></div>
                <div className="w-2/3 p-4">
                  <h1 className="text-gray-900 font-bold text-xl mt-10">
                    {item?.name}'s Profile Picture
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
                  <form onSubmit={handleSubmit}>
                    <label
                      htmlFor="image-upload"
                      className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                    >
                      Upload Image
                    </label>
                    <input
                      id="image-upload"
                      type="file"
                      name="image"
                      onChange={handleFileChange}
                      className="block w-full p-3 mt-2 text-gray-700 bg-white appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner rounded"
                      required
                    />
                    <button type="submit" className="mt-2 btn">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
