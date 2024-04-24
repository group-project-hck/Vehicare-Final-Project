'use client'
import closeBtn from "../../Assets/closeBtn.svg";
import Image from "next/image";
import { DetailService } from "@/actions/ServiceBooks";
import { useEffect, useState } from "react";
import { Sparepart } from "@/databases/models/types";
import logo from "../../Assets/logo.svg"

export default function DetailHistoryModal({ serviceId, modal, setModal }: { serviceId: string, modal: boolean, setModal: React.Dispatch<React.SetStateAction<boolean>> }) {
    // OPEN MODAL
    const toggleModal = () => {
        setModal(!modal);
    };
    // FETCH DATA DETAIL
    const [detail, setDetail] = useState() as any | undefined
    useEffect(() => {
        (async () => {
            const data = await DetailService(serviceId)
            setDetail(data)
        })()
    }, [])

    let SpareParts
    if (detail) {
        const { Spareparts }: { Spareparts: Sparepart[] | undefined } = detail
        SpareParts = Spareparts
    }

    return (
        <>
            {/* Modal */}
            {modal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                    <div className="bg-white w-full mx-4 px-4 rounded-xl md:w-1/2 lg:w-1/2 relative border border-black">

                        {/* Isi Modal */}
                        <div className="py-6">
                            <div className="flex w-full bg-white shadow-lg rounded-lg overflow-hidden justify-end relative border">
                                <div className="w-full p-4">
                                    <h1 className="text-gray-900 font-bold text-2xl">Service Book</h1>
                                    <div className="divider">Details</div>
                                    {/* Tombol Close */}
                                    <div onClick={toggleModal} className="absolute top-0 right-0 m-2 cursor-pointer">
                                        <Image src={closeBtn} alt="Close" className="h-8 w-8 btn-ghost" />
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <p className="mt-2 text-gray-600 text-sm">
                                            Service ID : {detail?._id}
                                        </p>
                                        <p className="mt-2 text-gray-600 text-sm">
                                            Vehicle : {detail?.Vehicle[0].name}
                                        </p>
                                        <p className="mt-2 text-gray-600 text-sm">
                                            Services Name : {detail?.serviceName}
                                        </p>
                                        <table className="table w-full mt-2 border">
                                            <thead className="bg-base-200">
                                                <tr>
                                                    <th className="border">No</th>
                                                    <th className="border">Spareparts</th>
                                                    <th className="border">Price</th>
                                                </tr>
                                            </thead>
                                            <tbody className="border">
                                                {SpareParts && SpareParts?.map((item, i) => (
                                                    <tr className="border text-sm" key={i}>
                                                        <td className="border">{i + 1}</td>
                                                        <td className="border">{item.name}</td>
                                                        <td className="border">
                                                            {item.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        <p className="text-gray-600 text-sm mt-6 font-bold">Total Price : {SpareParts && SpareParts?.reduce((acc, item) => {
                                            return acc + item.price
                                        }, 0).toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</p>

                                    </div>
                                    <div className="flex justify-end">
                                        <div className="w-fit px-10 text-sm">
                                            <p className="text-gray-600 mt-2">
                                                Jakarta, {new Date(detail?.serviceDate)
                                                    .toLocaleString('id-ID', { dateStyle: 'long' })
                                                }
                                            </p>
                                            <p className="mb-20">Hormat Kami</p>
                                            <Image
                                                src={logo}
                                                className="h-28 w-28 absolute opacity-50 bottom-7"
                                                alt="Logo"
                                            />
                                            <p>Vehicare</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}