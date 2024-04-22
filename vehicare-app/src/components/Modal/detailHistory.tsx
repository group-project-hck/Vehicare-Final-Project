import React from "react";
import closeBtn from "../../Assets/closeBtn.svg";
import Image from "next/image";

interface InputModalChatProps {
    modal: boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DetailHistoryModal({ modal, setModal }: InputModalChatProps) {
    const toggleModal = () => {
        setModal(!modal);
        console.log(setModal, "<<<<");
    };

    return (
        <>
            {/* Modal */}
            {modal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                    <div className="bg-white w-full mx-4 px-4 rounded-xl md:w-1/2 lg:w-1/2 relative border border-black">

                        {/* Isi Modal */}
                        <div className="py-6">
                            <div className="flex w-full bg-white shadow-lg rounded-lg overflow-hidden justify-end relative border">
                                <div
                                    className="w-1/3 bg-cover"
                                    style={{
                                        backgroundImage:
                                            'url("https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80")',
                                    }}
                                ></div>
                                <div className="w-2/3 p-4">
                                    <h1 className="text-gray-900 font-bold text-2xl">test detail service book</h1>
                                    {/* Tombol Close */}
                                    <div onClick={toggleModal} className="absolute top-0 right-0 m-2 cursor-pointer">
                                        <Image src={closeBtn} alt="Close" className="h-8 w-8 btn-ghost" />
                                    </div>
                                    <p className="mt-2 text-gray-600 text-sm">
                                        Vehicle :
                                    </p>
                                    <p className="mt-2 text-gray-600 text-sm">
                                        Services Name :
                                    </p>
                                    <p className="mt-2 text-gray-600 text-sm">
                                        Sparepart Name :
                                    </p>
                                    <table className=" w-full mt-2 border">
                                        <thead>
                                            <tr>
                                                <th className="border">No</th>
                                                <th className="border">Spareparts</th>
                                                <th  className="border">Price</th>
                                            </tr>
                                        </thead>
                                        <tbody className="border">
                                            <tr  className="border" >
                                                <td  className="border">1</td>
                                                <td className="border">30</td>
                                                <td className="border">New York</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <h1 className="text-gray-900 font-bold text-xl mt-2">Service Price : Rp.</h1>
                                    <p className="mt-2 text-gray-600 text-sm">
                                        Service Date :
                                    </p>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
