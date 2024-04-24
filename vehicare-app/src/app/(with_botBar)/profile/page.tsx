import bgProfile from "@/Assets/backgroundProfile.svg";
import CardProfile from "@/components/Card/cardProfile";

export default function Profile() {

  return (
    <>
      <div
        className="w-full h-screen fixed pt-5 px-10"
        style={{
          backgroundImage: `url(${bgProfile.src})`,
          backgroundSize: "cover", // Mengatur gambar agar sesuai dengan ukuran layar
          backgroundPosition: "center", // Mengatur posisi gambar di tengah
        }}
      >
        <div className="flex w-full h-5/6 rounded-lg">
          <div
            className="flex w-full h-full shadow-xl rounded-lg mb-2 justify-center"
            style={{ borderColor: "transparent" }}
          >
            <CardProfile />
          </div>
        </div>
      </div>
    </>
  );
}
