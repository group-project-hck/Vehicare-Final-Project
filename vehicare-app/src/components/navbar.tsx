import Link from "next/link";

export default function Navbar() {
    return(
        <>
        <div className="flex w-full h-16 ">
        <div className="flex w-full h-full mx-10  rounded-xl shadow-md ">
          <div className="flex flex-1 items-center pl-5">
            <Link href={'/'}>
            <img src="https://media.istockphoto.com/id/1262151681/id/vektor/perlengkapan-sepeda-dengan-huruf-v-awal-dan-sayap.jpg?s=1024x1024&w=is&k=20&c=2j4FQNXEFupj7gd3bg2pRIS3_wf0LBB_lwJVfTf122M=" alt="Logo" className="h-10" />
            </Link>
          </div>
          <div className="flex flex-1 justify-end items-center pr-5">
            <button className="px-4 py-2 bg-white rounded-md btn btn-ghost">Logout</button>
          </div>
        </div>
      </div>
        </>
    )
}