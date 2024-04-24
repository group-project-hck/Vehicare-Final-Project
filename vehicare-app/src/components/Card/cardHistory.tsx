'use client'
import { useState } from "react";
import DetailHistoryModal from "../Modal/detailHistory";
import { ServiceBooks } from "@/databases/models/types";

export default function CardHistory({ book }: { book: ServiceBooks }) {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    }

    return (
        <>
            <button onClick={toggleModal} className="animate-fade-up animate-duration-500 border bg-slate-300 group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100 w-full mt-4">
                <div className="flex h-12 w-12 items-center rounded-lg bg-gray-200 text-black group-hover:bg-green-200">
                    <span className="tag w-full text-center text-2xl font-medium text-gray-700 group-hover:text-green-900">P</span>
                </div>
                <div className="flex flex-col items-start justify-between font-light text-gray-600 w-full">
                    <div className="flex justify-between w-full">
                        <div className="flex flex-col items-start">
                            <div className="flex items-center text-sm">
                                <p className="font-bold me-2">Service Name : </p>
                                <p>{book?.serviceName}</p>
                            </div>
                            <div className="flex items-center text-sm">
                                <p className="font-bold me-2">Purchased Sparepart :</p>
                                <p>{book?.SparepartId.length} items</p>
                            </div>
                            <div className="flex items-center text-sm mt-4">
                                <p className="font-bold me-2">Total :</p>
                                <span className="font-light text-gray-400">
                                    {new Intl.NumberFormat("id-ID", {
                                        style: "currency",
                                        currency: "IDR",
                                    }).format(book?.servicePrice)}
                                </span>
                            </div>
                        </div>
                        <div className="flex text-black italic items-center">
                            <span style={{ fontSize: 12 }} className="tag w-full text-center text-lg text-gray-700 group-hover:text-green-900">
                                {new Date(book.serviceDate).toLocaleString('id-ID', { day: "numeric", month: 'long', year: 'numeric' })}
                            </span>
                        </div>
                    </div>
                </div>
                <DetailHistoryModal serviceId={String(book._id)} modal={modal} setModal={setModal} />
            </button>
        </>
    );
}
