export default function Footer() {
    return (
        <>
            <footer className="relative bg-blueGray-200 pt-8 pb-6 -mt-36">
                <div className="container mx-auto px-4">
                    <hr className="my-6 border-blueGray-300 mx-auto" style={{opacity:0.6}} />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-blueGray-500 font-semibold py-1" style={{opacity:0.9}}>
                                Copyright © <span id="get-current-year">2024 </span>
                                <span style={{color: "#C15911"}}>
                                    Vehicare Group.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}