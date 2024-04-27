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
          <div className="bg-white w-full mx-4 px-4 rounded-xl md:w-1/2 lg:w-1/2 pb-5 relative">
            {/* Isi Modal */}
            <div className="flex justify-end py-2">
              <div onClick={toggleModal}>
                <Image
                  src={closeBtn}
                  alt="Close"
                  className="h-8 w-8 btn-ghost"
                />
              </div>
            </div>
            <div className="flex flex-col w-full h-96 overflow-y-scroll bg-white shadow-lg rounded-lg overflow-hidden relative">
              {notif &&
                notif?.map((notification: Notification, i: number) => (
                  <div key={i} className="border bg-slate-300 group dark:text-black flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-red-100 w-full hover:cursor-pointer">
                    <div className="flex h-12 w-12 items-center rounded-lg bg-gray-200 text-black group-hover:bg-red-200">
                      <span className="tag w-full text-center text-2xl font-medium text-gray-700 group-hover:text-red-900">i</span>
                    </div>
                    <p className="text-sm">{notification.message}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )
      }
    </>
  );
}
