import React from "react"; // Import React agar bisa menggunakan JSX
import closeBtn from "../../Assets/closeBtn.svg"
import Image from "next/image";
interface InputModalChatProps {
    modal: boolean;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function InputModalChat({ modal, setModal }: InputModalChatProps) {
    const toggleModal = () => {
        setModal(!modal); // Mengubah nilai modal menjadi kebalikan dari nilai saat ini
        console.log(setModal, "<<<<");
    };

    return (
        <>
            {/* Modal */}
            {modal && (
                <div className="fixed inset-0 h-full flex items-end justify-end bg-gray-800 bg-opacity-75">
                    <div className="bg-white w-full mx-4 p-4 rounded-xl md:w-1/2 lg:w-1/3 mb-20 mr-10">
                        {/* Isi Modal */}
                        <div className="flex justify-between items center border-b border-gray-200 py-3 -mt-2">
                            <div className="flex items-center justify-center">
                                <p className="text-xl font-bold text-gray-800">Customer Service</p>
                            </div>
                            <div onClick={toggleModal} className="w-8 h-8 flex items-center justify-center">
                                {/* Memanggil toggleModal saat tombol "x" diklik */}
                                <Image src={closeBtn} alt="Close" className="h-8 w-8 btn-ghost" />
                            </div>
                        </div>
                        {/* Isi Body Modal */}
                        <div className="my-">
                            <div className="bg-white rounded-lg shadow-md p-4">
                                {/* Chat Header */}
                                <div className="flex items-center mb-4">
                                    <div className="ml-3">
                                        <p className="text-xl font-medium">Your AI Assistant</p>
                                        <p className="text-gray-500">Online</p>
                                    </div>
                                </div>
                                {/* Chat Messages */}
                                <div className="space-y-4">
                                    {/* Received Message */}
                                    <div className="flex items-start">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 100 100"
                                            width={100}
                                            height={100}
                                            fill="#009688"
                                            className="w-8 h-8 rounded-full"
                                        >
                                            {/* Robot Face */}
                                            <circle cx={50} cy={50} r={20} fill="#009688" />
                                            <circle cx={50} cy={40} r={2} fill="#fff" />
                                            <rect x={47} y={45} width={6} height={10} fill="#fff" />
                                            <circle cx={50} cy={65} r={3} fill="#009688" />
                                            {/* Robot Eyes */}
                                            <circle cx={45} cy={45} r={3} fill="#fff" />
                                            <circle cx={55} cy={45} r={3} fill="#fff" />
                                            <circle cx={45} cy={45} r={1} fill="#000" />
                                            <circle cx={55} cy={45} r={1} fill="#000" />
                                            {/* Robot Antennas */}
                                            <line
                                                x1={50}
                                                y1={30}
                                                x2={40}
                                                y2={20}
                                                stroke="#009688"
                                                strokeWidth={2}
                                            />
                                            <line
                                                x1={50}
                                                y1={30}
                                                x2={60}
                                                y2={20}
                                                stroke="#009688"
                                                strokeWidth={2}
                                            />
                                        </svg>
                                        <div className="ml-3 bg-gray-100 p-3 rounded-lg">
                                            <p className="text-sm text-gray-800">
                                                Hello! How can I help you today?
                                            </p>
                                        </div>
                                    </div>
                                    {/* Sent Message */}
                                    <div className="flex items-end justify-end">
                                        <div className="p-3 rounded-lg" style={{backgroundColor: "#EB8D00"}}>
                                            <p className="text-sm text-white">Sure, I have a question.</p>
                                        </div>
                                        <img
                                            src="https://pbs.twimg.com/profile_images/1707101905111990272/Z66vixO-_normal.jpg"
                                            alt="Other User Avatar"
                                            className="w-8 h-8 rounded-full ml-3"
                                        />
                                    </div>
                                </div>
                                {/* Chat Input */}
                                <div className="mt-4 flex items-center">
                                    <input
                                        type="text"
                                        placeholder="Type your message..."
                                        className="flex-1 py-2 px-3 rounded-full focus:outline-none -pl-1"
                                    />
                                    <button className="text-white px-4 py-2 rounded-full ml-3 hover:bg-black-200" style={{backgroundColor:"#EB8D00"}}>
                                        Send
                                    </button>
                                </div>
                            </div>
                            {/* Konten Modal */}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
