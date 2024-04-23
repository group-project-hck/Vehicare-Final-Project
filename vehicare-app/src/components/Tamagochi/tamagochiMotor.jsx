"use client";

import { useEffect, useState } from "react";
import { Pixelify } from "react-pixelify";
import LoadingComponent from "../loading";

export default function TamagochiMotor({ selectedVehicle }) {
  const [vehicle, setVehicle] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}api/vehicle/${selectedVehicle}`,
          {
            cache: "no-store",
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setVehicle(data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    if (selectedVehicle) {
      fetchVehicle();
    }
  }, [selectedVehicle]);
  if (loading) {
    return <LoadingComponent />;
  }
  return (
    <>
      <div
        className="flex flex-[3] justify-center items-center pl-5 pr-5 haloo"
        style={{ backgroundColor: "red" }}
      >
        <div className="animate-bounce items-center justify-center flex">
          <Pixelify
            src={vehicle?.image}
            fillTransparencyColor={"transparent"}
            pixelSize={12}
            centered={true}
          />
        </div>
      </div>
    </>
  );
}
