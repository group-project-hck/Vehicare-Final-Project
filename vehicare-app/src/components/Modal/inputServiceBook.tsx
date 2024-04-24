"use client";
import React, { useEffect, useState } from "react";
import { GetSpareparts } from "@/actions/Spareparts";
import { Sparepart, Vehicle } from "@/databases/models/types";
import bgSparepart from "@/Assets/backgroundSparepart.svg";
import { Checkbox } from "@nextui-org/react";
import AddSparepartServiceBook from "../Card/cardAddService";
import { set } from "zod";
import LoadingComponent from "../loading";
import GetServices, { AddServiceBook } from "@/actions/ServiceBooks";

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
    VehicleId : "",
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
    setLoading(true);
    event.preventDefault();
    const data = {
      serviceName : input.serviceName,
      VehicleId : input.VehicleId,
      SparepartId : items,
      servicePrice : price
    }
    AddServiceBook(data);
    getHistory()
    setLoading(false);
  }
  if (loading) {
    return <LoadingComponent />;
  }
  return (
    <>
      {/* Modal */}
      {modal && (
        <div
          className="w-full h-screen fixed"
          style={{
            backgroundImage: `url(${bgSparepart.src})`,
            backgroundSize: "cover", // Mengatur gambar agar sesuai dengan ukuran layar
            backgroundPosition: "center", // Mengatur posisi gambar di tengah
          }}
        >
          <div className="flex justify-center w-full h-5/6 shadow-xl rounded-lg mb-2 pt-5">
            <div className="flex w-[60%] rounded-xl bg-white opacity-90 overflow-auto">
              <div className="w-full overflow-x-auto flex flex-wrap lg:flex-col lg:max-h-full lg:overflow-y-auto p-5">
                <AddSparepartServiceBook
                  addCart={addCart}
                  persparepart={listspareparts}
                />
                <form onSubmit={handleCreate}>
                  <label
                    htmlFor="serviceName"
                    className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                  >
                    Service Name
                  </label>
                  <input
                    id="serviceName"
                    type="text"
                    name="serviceName"
                    placeholder="Your Bike..."
                    autoComplete="name"
                    className="block w-full p-3 mt-2 text-gray-700 bg-white appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner rounded"
                    required
                    onChange={handleChange}
                  />
                  <select
                    onChange={handleChange}
                    id="type"
                    name="VehicleId"
                    autoComplete="type"
                    className="h-10 w-80 absolute"
                    required
                  >
                    {/* CHECK LIST VEHICLE */}
                    {vehicles &&
                      vehicles.map((vehicle: Vehicle, i: number) => (
                        <option key={i} value={vehicle._id.toString()}>
                          {vehicle.name}
                        </option>
                      ))}
                  </select>
                  <button className="btn" onClick={handleCreate} type="submit">
                    Create Service Book
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
