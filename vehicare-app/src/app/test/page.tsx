"use client";
import { useEffect, useState } from "react";
import GetServices from "@/actions/ServiceBooks";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import Link from "next/link";
import { Vehicle } from "@/databases/models/types";
import LoadingComponent from "@/components/loading";
import ProfilePictureModal from "@/components/Modal/profile-picture";

export default function CardProfile() {
  const [loading, setLoading] = useState<boolean>(false);
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState<any>();
  const [vehicle, setVehicle] = useState<Vehicle[]>([]);
  const toggleModal = () => {
    setModal(!modal);
  };
  useEffect(() => {
    const getVehicles = async () => {
      setLoading(true);
      const data = await GetServices();
      setUser(data);
      setVehicle(data.Vehicles);
      setLoading(false);
    };
    getVehicles();
  }, []);
  if (loading) {
    return <LoadingComponent />;
  }
  console.log(vehicle);

  return (
    <>
      <div className="h-screen w-screen grid grid-cols-2">
        {vehicle?.length > 0 &&
          vehicle.map((item, i) => (
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {item.name}
                </CardItem>
               
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={item.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    {item.type}
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Sign up
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
      </div>
    </>
  );
}
