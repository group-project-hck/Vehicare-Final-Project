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
  function handleChange (e: React.ChangeEvent<HTMLSelectElement>) {
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
  if(loading){
    return <LoadingComponent />
  }
  return (
    <>
      <div
        className="w-full h-screen fixed"
        style={{
          backgroundImage: `url(${bgHome.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex w-full h-5/6 justify-center items-center rounded pt-5">
          <div
            className="flex w-full h-full mx-10 shadow-xl rounded-lg border mb-2"
            style={{ borderColor: "transparent" }}
          >
            <div
              className="flex flex-1 justify-center items-center pl-5 border-r "
              style={{
                backgroundColor: "white",
                opacity: 0.4,
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
              }}
            >
              <select
                id="type"
                name="name1"
                autoComplete="type"
                className="block w-full p-3 mt-2 text-gray-700 bg-white appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner rounded"
                required
                onChange={handleChange}
              >
                {vehicles &&
                  vehicles.map((vehicle: Vehicle, i: number) => (
                    <option key={i} value={vehicle._id.toString()}>
                      {vehicle.name}
                    </option>
                  ))
                }
              </select>
              <img src="" alt="Motor" className="h-10 btn-ghost" />
            </div>
            <TamagochiMotor selectedVehicle={selectedVehicle} />
            <div
              className="flex flex-1 justify-center items-center pl-5 border-r"
              style={{
                backgroundColor: "white",
                opacity: 0.4,
                borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
            >
              <h1>Desc Motor</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
