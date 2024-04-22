"use client";
import { useState } from "react";
import DetailProductModal from "../Modal/detailProduct";
import { Sparepart } from "@/databases/models/types";
import { ObjectId } from "mongodb";

export default function CardProduct({
  persparepart,
}: {
  persparepart: Sparepart[];
}) {
  const [modal, setModal] = useState(false);
  const [detail, setDetail] = useState("");
  const toggleModal = (id: ObjectId) => {
    setModal(!modal);
    setDetail(String(id));
  };
  return (
    <>
      <ul className="gap-2 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0">
        {persparepart &&
          persparepart.map((item, index) => {
            return (
              <div className="border rounded-lg">
                <li
                  key={index}
                  className="inline-flex w-64 flex-col text-center lg:w-auto lg:mb-0"
                >
                  <div
                    className="group relative mx-auto hover:cursor-pointer"
                    onClick={() => toggleModal(item._id)}
                  >
                    <div className="h-56 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
                      <img
                        src={item.image}
                        alt="Black machined steel pen with hexagonal grip and small white logo at top."
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <div className="mt-6">
                      <p className="text-sm text-gray-500">{item.type}</p>
                      <h3 className="mt-1 font-semibold text-gray-900">
                        <span className="absolute inset-0" />
                        {item.name}
                      </h3>
                      <p className="mt-1 text-gray-900">
                        {new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(item.price)}
                      </p>
                    </div>
                  </div>
                </li>
              </div>
            );
          })}
      </ul>
      <DetailProductModal modal={modal} setModal={setModal} item={detail} />
    </>
  );
}
