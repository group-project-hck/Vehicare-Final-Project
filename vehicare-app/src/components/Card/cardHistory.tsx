'use client'

import { useState } from "react";
import DetailHistoryModal from "../Modal/detailHistory";

export default function CardHistory() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }
    return (
        <>
            {/* Tambahkan item list sesuai kebutuhan */}
            {Array.from({ length: 20 }, (_, index) => (
                <button key={index} className="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100 w-full mt-4">
                    <div className="flex h-12 w-12 items-center rounded-lg bg-gray-200 text-black group-hover:bg-green-200">
                        <span className="tag w-full text-center text-2xl font-medium text-gray-700 group-hover:text-green-900">A</span>
                    </div>
                    <div className="flex flex-col items-start justify-between font-light text-gray-600 w-full " onClick={toggleModal}>
                        <div className="flex justify-between w-full">
                            <div className="flex flex-col items-start">
                                <p className="text-[15px]">Name Service</p>
                                <span className="text-xs font-light text-gray-400">Rp.</span>
                            </div>
                            <div className="flex text-black">
                                <span style={{ fontSize: 12 }} className="tag w-full text-center text-lg text-gray-700 group-hover:text-green-900">Date</span>
                            </div>
                        </div>
                    </div>
                </button>
            ))}
            <DetailHistoryModal modal={modal} setModal={setModal} />
        </>

    );
}
