export default function TamagochiMotor() {
    return (
        <>
            <div className="flex w-full h-5/6 mt-5 mb-6 rounded">
                <div className="flex w-full h-full mx-10 shadow-xl rounded-lg border" style={{borderColor:"transparent"}}>
                    <div className="flex flex-1 justify-center items-center pl-5 border-r " style={{ backgroundColor: 'white', opacity: 0.2, borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px'}}>
                        <img src="logo.png" alt="Motor" className="h-10 btn-ghost" />
                    </div>
                    <div className="flex flex-1 items-center pl-5" style={{ backgroundColor: 'white', opacity: 0.3 }}>
                        <h1>Desc Motor</h1>
                    </div>
                    <div className="flex flex-1 items-center pl-5 border-r" style={{ backgroundColor: 'white', opacity: 0.4, borderTopRightRadius:"10px", borderBottomRightRadius:"10px" }}>
                        <h1>Desc Motor</h1>
                    </div>
                </div>
            </div>
        </>
    )
}