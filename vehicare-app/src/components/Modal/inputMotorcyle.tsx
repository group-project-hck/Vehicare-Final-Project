"use client";
import React, { useState } from "react";
import closeBtn from "@/Assets/closeBtn.svg";
import Image from "next/image";
import { AddVehicle } from "@/actions/AddVehicle";
import { useRouter } from "next/navigation";

interface InputModalMotorcyleProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  fetchVehicle: any
}

export default function InputModalMotorcyle({
  modal,
  setModal,
  fetchVehicle
}: InputModalMotorcyleProps) {
  const toggleModal = () => {
    setModal(!modal);
  };
  const [input, setInput] = useState({
    name1: "",
    name: "",
    type: "",
  });
  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    AddVehicle(input);
    fetchVehicle()
    toggleModal();
  }
  return (
    <>
      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white w-full mx-4 px-4 rounded-xl md:w-1/2 lg:w-1/2 relative">

            {/* Isi Modal */}
            <div className="py-6">
              <div className="flex w-full h-auto shadow-lg rounded-lg overflow-hidden justify-center relative">
                <div className="w-full rounded-lg shadow-lg">
                  <div className="flex justify-end">
                    <div onClick={toggleModal}>
                      <Image
                        src={closeBtn}
                        alt="Close"
                        className="h-8 w-8 btn-ghost"
                      />
                    </div>
                  </div>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-2 pb-10 px-10">
                    <p className="text-center font-bold text-2xl">Add Your Vehicle</p>
                    <label
                      htmlFor="name1"
                      className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                    >
                      Brand
                    </label>
                    <select onChange={handleChange} name="name1" className="select select-bordered w-full">
                      <option disabled selected>Select Brand</option>
                      <option defaultValue="Honda">Honda</option>
                      <option defaultValue="Suzuki">Suzuki</option>
                      <option defaultValue="Yamaha">Yamaha</option>
                      <option defaultValue="Kawasaki">Kawasaki</option>
                    </select>
                    <label
                      htmlFor="name"
                      className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                    >
                      Name
                    </label>
                    <input onChange={handleChange} name="name" type="text" placeholder="Your Bike" className="input input-bordered w-full" />
                    <label
                      htmlFor="type"
                      className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                    >
                      Type
                    </label>
                    <select onChange={handleChange} name="type" className="select select-bordered w-full">
                      <option disabled selected>Select Type</option>
                      <option defaultValue="Manual">Manual</option>
                      <option defaultValue="Matic">Matic</option>
                    </select>
                    <button
                      type="submit" className="block btn btn-outline mt-4">
                      Let's Go!!!
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
