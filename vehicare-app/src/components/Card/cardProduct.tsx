"use client"
import { useState } from "react";
import DetailProductModal from "../Modal/detailProduct";

export default function CardProduct() {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }
    return (
        <>
            <div className="flex w-full h-5/6 justify-center items-center rounded pt-5">
                <div className="flex w-full h-full mx-10 shadow-xl rounded-lg border mb-2" style={{ borderColor: "transparent" }}>
                    <div className="flex flex-1 justify-center items-center pl-5" style={{ backgroundColor: 'transparent' }}></div>
                    <div className="flex flex-[3] justify-center items-center pl-5 pr-5 rounded-xl bg-white opacity-80 overflow-auto">
                        <div className="relative p-6 mt-6">
                            <div className="relative mt-32 -mb-6 w-full overflow-x-auto pb-6 flex flex-wrap lg:flex-col lg:max-h-full lg:overflow-y-auto">
                                <ul className="mx-6 sm:mx-6 mt-10 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0">
                                    {Array.from({ length: 12 }, (_, index) => (
                                        <li key={index} className="inline-flex w-64 flex-col text-center lg:w-auto mb-6 lg:mb-0">
                                            <div className="group relative mt-10 mx-auto" onClick={toggleModal}>
                                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
                                                    <img
                                                        src="https://m.media-amazon.com/images/I/61bG3pY7k-L.jpg"
                                                        alt="Black machined steel pen with hexagonal grip and small white logo at top."
                                                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                                                    />
                                                </div>
                                                <div className="mt-6">
                                                    <p className="text-sm text-gray-500">Type Sparepart</p>
                                                    <h3 className="mt-1 font-semibold text-gray-900">
                                                        <a href="#">
                                                            <span className="absolute inset-0" />
                                                            Name Sparepartss
                                                        </a>
                                                    </h3>
                                                    {/* <span className="tracking-[0.03em] text-center text-xs">
                                                    <span className="tracking-[0.03em] text-red-500">
                                                        {(product.price).toLocaleString('id-ID', {
                                                            style: 'currency',
                                                            currency: 'IDR'
                                                        })}
                                                    </span> */}
                                                    {/* </span> */}
                                                    <p className="mt-1 text-gray-900">Rp. </p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 justify-center items-center pl-5" style={{ backgroundColor: "transparent" }}></div>
                </div>
            </div>
            <DetailProductModal modal={modal} setModal={setModal} />
        </>
    );
}
