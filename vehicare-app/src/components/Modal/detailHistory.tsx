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
    };

    return (
        <>
            {/* Modal */}
            {modal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                    <div className="bg-white w-full mx-4 px-4 rounded-xl md:w-1/2 lg:w-1/4 relative">

                        {/* Isi Modal */}
                        <div className="py-6">
                            <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden justify-end relative">
                                <div
                                    className="w-1/3 bg-cover"
                                    style={{
                                        backgroundImage:
                                            'url("https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80")',
                                    }}
                                ></div>
                                <div className="w-2/3 p-4">
                                    <h1 className="text-gray-900 font-bold text-2xl">Backpack</h1>
                                    {/* Tombol Close */}
                                    <div onClick={toggleModal} className="absolute top-0 right-0 m-2 cursor-pointer">
                                        <Image src={closeBtn} alt="Close" className="h-8 w-8 btn-ghost" />
                                    </div>
                                    <p className="mt-2 text-gray-600 text-sm">
                                        Type
                                    </p>
                                    <p className="mt-2 text-gray-600 text-sm">
                                        Description
                                    </p>
                                    <div className="flex item-center justify-between mt-3">
                                        <h1 className="text-gray-700 font-bold text-xl">Rp.</h1>
                                        <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                                            Add to Card
                                        </button>
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
