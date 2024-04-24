"use client";
import React, { useEffect, useState } from "react";
import closeBtn from "@/Assets/closeBtn.svg";
import Image from "next/image";
import { Notification } from "@/databases/models/types";
import { getNotif } from "@/actions/notification";

interface InputModalMotorcyleProps {
  modal2: boolean;
  setModal2: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModalNotifiction({
  modal2,
  setModal2,
}: InputModalMotorcyleProps) {
  const toggleModal = () => {
    setModal2(!modal2);
  };
  const [notif, setNotif] = useState<any>([]);
  async function fetchNotification() {
    const data = await getNotif();
    setNotif(data);
  }
  useEffect(() => {
    fetchNotification();
  }, [modal2]);  
  return (
    <>
      {/* Modal */}
      {modal2 && (
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
                </div>
                {notif && 
                notif?.map((notification: Notification, i:number) => (
                  <p key={i}>{notification.message}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
