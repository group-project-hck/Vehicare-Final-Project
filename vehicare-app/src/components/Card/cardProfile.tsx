"use client";
import { useEffect, useState } from "react";
import GetServices from "@/actions/ServiceBooks";
import LoadingComponent from "../loading";
import ProfilePictureModal from "../Modal/profile-picture";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Vehicle } from "@/databases/models/types";
import ModalNotifiction from "../Modal/notification";

export default function CardProfile() {
  const [loading, setLoading] = useState<boolean>(false);
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState<any>();
  const [vehicle, setVehicle] = useState<Vehicle[]>([]);
  const toggleModal = () => {
    setModal(!modal);
  };
  const getVehicles = async () => {
    setLoading(true);
    const data = await GetServices();
    setUser(data);
    setVehicle(data.Vehicles);
    setLoading(false);
  };
  useEffect(() => {
    getVehicles();
  }, []);
  if (loading) {
    return <LoadingComponent />;
  }
  return (
    <>
      <div>
        <div className="pt-10 flex flex-col justify-center items-center">
          <div className="hover:cursor-pointer hover:text-slate-200 text-transparent">
            {!user?.image && (
              <>
                <p className="absolute top-[14%] left-[47.6%]">No Profile</p>
                <p className="absolute top-[18%] left-[47.4%]">Picture Yet</p>
              </>
            )}
            {user?.image && (
              <p className="absolute top-[15.5%] left-[46.5%] font-extrabold">Change Picture</p>
            )}
            <img
              className="w-36 h-36 rounded-full mx-auto border-2 p-1 "
              src={user?.image}
              onClick={toggleModal}
            />
          </div>
          <div className="text-white">
            <h2 className="text-center text-2xl font-semibold mt-3 tracking-tight">
              {user?.name}
            </h2>
            <p className="text-center">{user?.email}</p>
          </div>
        </div>
        <div className="divider divider-neutral text-slate-300 px-4">
          Vehicles
        </div>
        <div className="grid grid-cols-2">
          {vehicle?.length > 0 &&
            vehicle.map((item, i) => (
              <CardContainer key={i} className="inter-var">
                <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black bg-opacity-50 border-white/[0.2] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border border-white">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white"
                  >
                    {item.name}
                  </CardItem>

                  <CardItem translateZ="100" className="w-full py-4">
                    <Image
                      src={item.image}
                      height="1000"
                      width="1000"
                      className="h-50 border w-full bg-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center">
                    <CardItem
                      translateZ={20}
                      target="__blank"
                      className="text-xl font-bold text-white"
                    >
                      Transmition <p className="font-light">{item.type}</p>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
        </div>
      </div>
      <ProfilePictureModal
        getVehicles={getVehicles}
        modal={modal}
        setModal={setModal}
        item={user}
      />
    </>
  );
}
