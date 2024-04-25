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
      <ul className="gap-4 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0">
        {persparepart &&
          persparepart.map((item, index) => {
            return (
              <div key={index} className="shadow-xl rounded-lg hover:cursor-pointer transform transition-transform duration-300 border border-orange-200">
                <li
                  className="inline-flex w-full flex-col text-center"
                >
                  <div
                    className="group hover:cursor-pointer"
                    onClick={() => toggleModal(item._id)}
                  >
                    <div className="h-56 aspect-w-1 w-full overflow-hidden rounded-md">
                      <img
                        src={item.image}
                        alt="sparepart logo"
                        className="h-full w-full object-cover object-center opacity-70 group-hover:opacity-100"
                      />
                    </div>
                    <div className="text-white py-1">
                      <p className="text-sm">{item.type}</p>
                      <h3 className="mt-1 font-semibold">
                        <span className="absolute inset-0" />
                        {item.name}
                      </h3>
                      <p className="mt-1">
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
