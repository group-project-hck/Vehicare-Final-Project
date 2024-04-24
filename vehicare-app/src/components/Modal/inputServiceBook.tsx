"use client";
import React, { useEffect, useState } from "react";
import { GetSpareparts } from "@/actions/Spareparts";
import { Sparepart, Vehicle } from "@/databases/models/types";
import closeBtn from "../../Assets/closeBtn.svg";
import AddSparepartServiceBook from "../Card/cardAddService";
import LoadingComponent from "../loading";
import GetServices, { AddServiceBook } from "@/actions/ServiceBooks";
import Image from "next/image";

interface InputModalMotorcyleProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  getHistory: any;
}

export default function InputModalServieBook({
  modal,
  setModal,
  getHistory
}: InputModalMotorcyleProps) {
  const toggleModal = () => {
    setModal(!modal);
  };
  const [listspareparts, setlistSpareparts] = useState<Sparepart[]>([]);
  const [items, setItems] = useState<string[]>([]);
  const [price, setPrice] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [input, setInput] = useState({
    serviceName: "",
    VehicleId: "",
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

  function addCart(id: string, harga: number) {
    let newItems = id;
    let found = false;
    const newData = items.map((item) => {
      if (item === newItems) {
        found = true;
        return item;
      }
      return item;
    });
    if (!found) {
      setPrice((prev) => {
        return harga + prev;
      });
      setItems(() => {
        return [...newData, newItems];
      });
    }
  }
  useEffect(() => {
    (async () => {
      const data = await GetSpareparts();
      setlistSpareparts(data.data);
    })();
  }, []);
  useEffect(() => {
    const getVehicles = async () => {
      setLoading(true);
      const { Vehicles }: { Vehicles: Vehicle[] } = await GetServices();
      setVehicles(Vehicles);
      setLoading(false);
    };
    getVehicles();
  }, []);
  function handleCreate(event: React.FormEvent) {
    event.preventDefault();
    const data = {
      serviceName: input.serviceName,
      VehicleId: input.VehicleId,
      SparepartId: items,
      servicePrice: price
    }
    AddServiceBook(data);
    toggleModal()
    getHistory()
  }
  if (loading) {
    return <LoadingComponent />;
  }
  return (
    <>
      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white w-full mx-4 px-4 rounded-xl md:w-1/2 lg:w-1/2 relative border border-black">
            {/* Tombol Close */}
            <div onClick={toggleModal} className="absolute top-0 right-0 m-2 cursor-pointer">
              <Image src={closeBtn} alt="Close" className="h-8 w-8 btn-ghost" />
            </div>

            {/* Isi Modal */}
            <div className="py-14">
              <div className="flex gap-2">
                <form onSubmit={handleCreate} className="mx-2 gap-2">
                  <label htmlFor="serviceName" className="block" >
                    Service Name
                  </label>
                  <input onChange={handleChange} type="text" name="serviceName" placeholder="service name" className="input input-bordered w-full max-w-xs" />
                  <label htmlFor="VehicleId" className="block" >
                    Vehicle
                  </label>
                  <select onChange={handleChange} name="VehicleId" className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Choose One</option>
                    {vehicles &&
                      vehicles.map((vehicle: Vehicle, i: number) => (
                        <option key={i} value={vehicle._id.toString()}>
                          {vehicle.name}
                        </option>
                      ))}
                  </select>
                  <button className="btn btn-outline w-full mt-4" onClick={handleCreate} type="submit">
                    Create Service Book
                  </button>
                </form>
                <div className="w-full overflow-x-auto flex flex-row flex-wrap lg:max-h-full lg:overflow-y-auto">
                  <div className="h-96">
                    <AddSparepartServiceBook
                      addCart={addCart}
                      persparepart={listspareparts}
                    />
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
