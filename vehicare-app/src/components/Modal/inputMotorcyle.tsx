"use client";
import React, { useState } from "react";
import closeBtn from "@/Assets/closeBtn.svg";
import Image from "next/image";
import { AddVehicle } from "@/actions/AddVehicle";

interface InputModalMotorcyleProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function InputModalMotorcyle({
  modal,
  setModal,
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
  function handleSubmit(e : React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    AddVehicle(input);
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
              <div className="flex w-full h-96 bg-white shadow-lg rounded-lg overflow-hidden justify-center relative">
                <div className="w-full p-4 bg-black rounded-lg shadow-lg">
                  <div className="flex flex-row">
                    <h1 className="text-xl flex-1 font-semibold text-white">
                      Hi name/username !{" "}
                      <span className="font-normal">
                        Please fill in your bike to continue.
                      </span>
                    </h1>
                    <div onClick={toggleModal}>
                      <Image
                        src={closeBtn}
                        alt="Close"
                        className="h-8 w-8 btn-ghost"
                      />
                    </div>
                  </div>
                  <form className="mt-6" onSubmit={handleSubmit}>
                    <select
                      id="type"
                      name="name1"
                      autoComplete="type"
                      className="block w-full p-3 mt-2 text-gray-700 bg-white appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner rounded"
                      required
                      onChange={handleChange}
                    >
                      <option defaultValue="" disabled selected>
                        Select Merk
                      </option>
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
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Your Bike..."
                      autoComplete="name"
                      className="block w-full p-3 mt-2 text-gray-700 bg-white appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner rounded"
                      required
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="type"
                      className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                    >
                      Type
                    </label>
                    <select
                      id="type"
                      name="type"
                      autoComplete="type"
                      className="block w-full p-3 mt-2 text-gray-700 bg-white appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner rounded"
                      required
                      onChange={handleChange}
                    >
                      <option defaultValue="" disabled selected>
                        Select Type
                      </option>
                      <option defaultValue="Manual">Manual</option>
                      <option defaultValue="Matic">Matic</option>
                    </select>
                    <button
                      type="submit"
                      className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-#EB8D00 shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none rounded"
                    >
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
