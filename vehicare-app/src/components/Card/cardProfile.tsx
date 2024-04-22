export default function CardProfile() {
    return (
        <>
            <div className="flex w-full h-5/6 justify-center items-center rounded pt-2">
                <div className="flex w-full h-full mx-10 shadow-xl rounded-lg border mb-2" style={{ borderColor: "transparent" }}>


                    <div className="flex flex-1 justify-center items-center pl-5" style={{ backgroundColor: 'transparent' }}>
                    </div>
                    <div className="flex flex-[3] justify-center items-center pl-5 pr-5 rounded-xl bg-black opacity-70">
                        <div className="max-w-lg mx-auto my-10 p-5">
                            <img
                                className="w-32 h-32 rounded-full mx-auto"
                                src="https://picsum.photos/200"
                                alt="Profile picture"
                            />
                            <h2 className="text-center text-2xl font-semibold mt-3">John Doe</h2>
                            <p className="text-center text-gray-600 mt-1">Software Engineer</p>
                            
                            <div className="mt-5">
                                <h3 className="text-xl font-semibold">Bio</h3>
                                <p className="text-gray-600 mt-2">
                                    John is a software engineer with over 10 years of experience in developing
                                    web and mobile applications. He is skilled in JavaScript, React, and
                                    Node.js.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 justify-center items-center pl-5" style={{ backgroundColor: "transparent" }}>
                    </div>
                </div>
            </div>
        </>
    )
}