"use client";
import { useEffect, useState } from "react";
import LoadingComponent from "../loading";
import { AddStatus, changeGatcha } from "@/actions/status";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function TamagochiMotor({ selectedVehicle }) {
  const id = selectedVehicle;
  const [vehicle, setVehicle] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState([]);
  const router = useRouter();
  const fetchVehicle = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}api/vehicle/${id}`,
        {
          cache: "no-store",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const { data } = await response.json();
      setVehicle(data);
      setStatus(data.Status);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (selectedVehicle) {
      fetchVehicle();
    }
  }, [selectedVehicle]);

  if (loading) {
    return <LoadingComponent />;
  }
  const giftFood = async () => {
    AddStatus(selectedVehicle);
    fetchVehicle();
  };
  // Cek Status
  const handleGatcha = async () => {
    if (status[0].gatcha) {
      const random = Math.floor(Math.random() * (10 - 1 + 1) + 1);
      const newCoin = status[0].cointReward + random;
      setTimeout(() => {
        changeGatcha(selectedVehicle, newCoin);
        Swal.fire({
          title: "Sweet!",
          timer: 4500,
          text: `Congratulations You Get Extra ${random} Coin Reward`,
          imageUrl:
            "https://cdn.dribbble.com/users/2406299/screenshots/11373893/media/71641670530f3e0d8df5044ff1700d92.gif",
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
        });
        fetchVehicle();
        router.refresh();
      }, 5000);
    } else if (!status[0].gatcha) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "error",
        title: "You Already Did Your Gatcha Today",
      });
    }
  };
  let spareParts = [];
  if (vehicle) {
    const { Spareparts } = vehicle;
    if (Spareparts) {
      spareParts = Spareparts;
    }
  }

  return (
    <>
      <div className="flex justify-center w-full">
        <div className="flex w-full justify-center items-center">
          <div className="w-1/2 h-full flex justify-center items-end ms-24">
            <div className="flex animate-shake animate-infinite animate-duration-[1500ms]">
              <img
                src={vehicle?.image}
                fillTransparencyColor={"transparent"}
                pixelSize={12}
                centered={true}
              />
            </div>
          </div>
          <div className="w-1/2 h-full flex flex-col justify-end pb-10">
            <div className="ps-24 pe-48 grid gap-7">
              <div className="grid gap-1 text-white">
                <p className="font-bold">Vehicle info :</p>
                <p>Name : {vehicle.name}</p>
                <p>Transmition : {vehicle.type}</p>
              </div>
              <div className="grid gap-1 text-white">
                <p className="font-bold">Status :</p>
                <p>HP : {status[0]?.HP}%</p>
                <div className="flex">
                  {Array.from({ length: status[0]?.HP }, (_, index) => (
                    <p className="text-sm">|</p>
                  ))}
                </div>
                <p>Daily HP : {status[0]?.dailyHP}%</p>
                <div className="flex">
                  {Array.from({ length: status[0]?.dailyHP }, (_, index) => (
                    <p className="text-sm">|</p>
                  ))}
                </div>
              </div>
              <div className="grid gap-1">
                <p className="text-white font-bold">Spareparts :</p>
                {spareParts &&
                  spareParts.map((el, i) => (
                    <p className="text-white" key={i}>
                      {el.name} : {vehicle.Books[0]?.serviceDate}
                    </p>
                  ))}
                <br />
                <div className="flex gap-5">
                  <button
                    className="text-white btn btn-outline w-24"
                    onClick={giftFood}
                  >
                    Gift Food
                  </button>
                  <button
                    className="text-white btn btn-outline w-24"
                    onClick={handleGatcha}
                  >
                    Hit Gatcha
                  </button>
                </div>
                <div className="text-white mt-5">
                  <p className="font-bold">Your Rewards</p>
                  <p>Coint : {status[0]?.cointReward}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
