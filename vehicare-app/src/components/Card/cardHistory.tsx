export default function CardHistory() {
    return (
        <div className="flex w-full h-5/6 justify-center items-center rounded pt-5">
            <div className="flex w-full h-full mx-10 shadow-xl rounded-lg border mb-2" style={{ borderColor: "transparent" }}>
                <div className="flex flex-1 justify-center items-center pl-5" style={{ backgroundColor: 'transparent' }}></div>
                <div className="flex flex-[3] justify-center items-center pl-5 pr-5 rounded-xl bg-white opacity-70 overflow-auto">
                    <div className="mt-20 w-full">
                        <div className="flex w-full flex-col items-center mt-8 mb-4">
                            {/* Item list menggunakan w-full */}
                            <button className="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100 w-full">
                                {/* Isi item list */}
                            </button>
                            {/* Tambahkan item list sesuai kebutuhan */}
                            {Array.from({ length: 20 }, (_, index) => (
                                <button key={index} className="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100 w-full mt-4">
                                    <div className="flex h-12 w-12 items-center rounded-lg bg-gray-200 text-black group-hover:bg-green-200">
                                        <span className="tag w-full text-center text-2xl font-medium text-gray-700 group-hover:text-green-900">A</span>
                                    </div>
                                    <div className="flex flex-col items-start justify-between font-light text-gray-600 w-full">
                                        <div className="flex justify-between w-full">
                                            <div className="flex flex-col items-start">
                                                <p className="text-[15px]">Name Service</p>
                                                <span className="text-xs font-light text-gray-400">Rp.</span>
                                            </div>
                                            <div className="flex text-black">
                                                <span style={{fontSize:12}} className="tag w-full text-center text-lg text-gray-700 group-hover:text-green-900">Date</span>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 justify-center items-center pl-5" style={{ backgroundColor: "transparent" }}></div>
            </div>
        </div>
    );
}
