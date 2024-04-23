"use client";
import TamagochiMotor from "@/components/Tamagochi/tamagochiMotor";
import bgHome from "@/Assets/backgroundHome.svg";
import { Vehicle } from "@/databases/models/types";
import GetServices from "@/actions/ServiceBooks";
import { useEffect, useState } from "react";
import LoadingComponent from "@/components/loading";

export default function Home() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [selectedVehicle, setSelectedVehicle] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const vehicleId = e.target.value;
    setSelectedVehicle(vehicleId.toString())
  }
  useEffect(() => {
    const getVehicles = async () => {
      setLoading(true)
      const { Vehicles }: { Vehicles: Vehicle[] } = await GetServices();
      setVehicles(Vehicles);
      if (Vehicles.length > 0) {
        setSelectedVehicle(Vehicles[0]._id.toString());
      }
      setLoading(false);
    };
    getVehicles();
  }, []);
  if (loading) {
    return <LoadingComponent />
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
        {/* SCREEN */}
        <div className="flex w-full h-5/6 justify-center items-center rounded pt-5">
          <div className="flex w-full h-full mx-10 shadow-xl rounded-lg mb-2 bg-black bg-opacity-50">
            <select onChange={handleChange} id="type" name="name1" autoComplete="type" className="h-10 w-80 absolute" required>
              {/* CHECK LIST VEHICLE */}
              {vehicles &&
                vehicles.map((vehicle: Vehicle, i: number) => (
                  <option key={i} value={vehicle._id.toString()}>
                    {vehicle.name}
                  </option>
                ))
              }
            </select>
            {/* DETAIL VEHICLE */}
            <TamagochiMotor selectedVehicle={selectedVehicle} />
          </div>
        </div>
      </div>
    </>
  );
}
