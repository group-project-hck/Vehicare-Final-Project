"use client";
import TamagochiMotor from "@/components/Tamagochi/tamagochiMotor";
import bgHome from "@/Assets/backgroundHome.svg";
import { Vehicle } from "@/databases/models/types";
import GetServices from "@/actions/ServiceBooks";
import { useEffect, useState } from "react";
import LoadingComponent from "@/components/loading";
import InputModalMotorcyle from "@/components/Modal/inputMotorcyle";
import logo from "@/Assets/logo.svg"
import Image from "next/image";

export default function Home() {
  // use State
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [selectedVehicle, setSelectedVehicle] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [modal, setModal] = useState(false);

  // Function Modal
  const toggleModal = () => {
    setModal(!modal);
  };

  // Function handler
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const vehicleId = e.target.value;
    setSelectedVehicle(vehicleId.toString());
  }
  // fetching for useState
  const fetchVehicle = async () => {
    setLoading(true);
    const { Vehicles }: { Vehicles: Vehicle[] } = await GetServices();
    setVehicles(Vehicles);
    if (Vehicles.length > 0) {
      setSelectedVehicle(Vehicles[0]._id.toString());
    } else {
      setModal(true);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchVehicle()
  }, []);

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <>
      {/* THEME */}
      <div
        className="w-full h-screen fixed"
        style={{
          backgroundImage: `url(${bgHome.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* CHECK LIST VEHICLE */}
        <select onChange={handleChange} id="type" name="name1" autoComplete="type" className="select select-warning w-full max-w-xs absolute top-10 left-16 z-10" required>
          {vehicles &&
            vehicles.map((vehicle: Vehicle, i: number) => (
              <option key={i} value={vehicle._id.toString()}>
                {vehicle.name}
              </option>
            ))
          }
        </select>
        {/* LOGO */}
        <Image
          src={logo}
          className="h-24 absolute w-full top-6"
          alt="Logo"
        />
        {/* SCREEN */}
        <div className="flex w-full h-5/6 justify-center items-center rounded pt-5">
          <div className="flex w-full h-full mx-10 shadow-xl rounded-lg mb-2 bg-black bg-opacity-50">
            {/* DETAIL VEHICLE */}
            <TamagochiMotor selectedVehicle={selectedVehicle} />
          </div>
        </div>
      </div>
      {modal && <InputModalMotorcyle fetchVehicle={fetchVehicle} modal={modal} setModal={setModal} />}
    </>
  );
}
