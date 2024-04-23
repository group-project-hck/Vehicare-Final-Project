import TamagochiMotor from "@/components/Tamagochi/tamagochiMotor";
import bgHome from '@/Assets/backgroundHome.svg'

export default function Home() {
  return (
    <>
      <div className="w-full h-screen fixed" style={{
        backgroundImage: `url(${bgHome.src})`,
        backgroundSize: 'cover', // Mengatur gambar agar sesuai dengan ukuran layar
        backgroundPosition: 'center', // Mengatur posisi gambar di tengah
      }}>
        <TamagochiMotor />
      </div>
    </>
  );
}
