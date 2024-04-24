"use client";
import { useEffect, useState } from "react";
import GetServices from "@/actions/ServiceBooks";
import LoadingComponent from "../loading";
import ProfilePictureModal from "../Modal/profile-picture";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import { Vehicle } from "@/databases/models/types";

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
  return (
    <div className="overflow-y-scroll">
      <div
        className="flex flex-1 justify-center items-center pl-5"
        style={{ backgroundColor: "transparent" }}
      ></div>
      <div className="flex flex-[3] justify-center items-center pl-5 pr-5 rounded-xl bg-black ">
        <div className="p-5">
          <img
            className="w-32 h-32 rounded-full mx-auto"
            src={user?.image}
            alt="Profile picture"
            onClick={toggleModal}
          />
          <h2 className="text-center text-2xl font-semibold mt-3">
            {user?.name}
          </h2>
          <p className="text-center text-gray-600 mt-1">{user?.email}</p>
          <div className="grid grid-cols-2">
            {vehicle?.length > 0 &&
              vehicle.map((item, i) => (
                <CardContainer key={i} className="inter-var">
                  <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border  ">
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
                        target="__blank"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                      >
                        {item.type}
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              ))}
          </div>
        </div>
      </div>
      <div
        className="flex flex-1 justify-center items-center pl-5"
        style={{ backgroundColor: "transparent" }}
      ></div>
      <ProfilePictureModal modal={modal} setModal={setModal} item={user} />
    </div>
  );
}
