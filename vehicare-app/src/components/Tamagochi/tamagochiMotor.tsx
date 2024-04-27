"use client";
import { useEffect, useState } from "react";
import LoadingComponent from "../loading";
import { AddStatus, changeGatcha } from "@/actions/status";
import { useRouter } from "next/navigation";
import { Sparepart } from "@/databases/models/types";
import Swal from "sweetalert2";

export default function TamagochiMotor({
  selectedVehicle,
}: {
  selectedVehicle: string;
}) {
  const id = selectedVehicle;
  const [vehicle, setVehicle] = useState<any>({});
  const [loading, setLoading] = useState<any>(false);
  const [status, setStatus] = useState<any>([]);
  const router = useRouter();
  const fetchVehicle = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/vehicle/${id}`,
        {
          cache: "no-store",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const { data } = await response.json();
      console.log(data);

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
    setLoading(true);
    AddStatus(selectedVehicle);
    Swal.fire({
      title: "Giving your vehicle some foods...",
      imageUrl:
        "https://cdn.dribbble.com/users/2330950/screenshots/15536297/media/20e3f3aa250511ba991cd537c6e239b8.jpg?resize=1000x750&vertical=center",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      timer: 4000,
      showConfirmButton: false,
    });
    setTimeout(() => {
      fetchVehicle();
    }, 3500);
    setLoading(false);
  };
  // Cek Status
  const handleGatcha = async () => {
    Swal.fire({
      title: "We will get your reward!",
      text: "Looking for Coins in your vehicle ...",
      imageUrl:
        "https://cdn.dribbble.com/users/207059/screenshots/16573456/media/1ed47de0b2ad5c4fe5903f6eb9387f57.gif",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      timer: 4000,
      showConfirmButton: false,
    });
    const random = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    const newCoin = status[0].cointReward + random;
    const submit = await changeGatcha(selectedVehicle, newCoin);
    if (!submit) {
      Swal.fire({
        title: "Unfortunately, we can't find any coins in your vehicle",
        text: "You already use your gatcha today, please comeback again Tomorrow",
        imageUrl:
          "https://png.pngtree.com/png-clipart/20230501/original/pngtree-mechanical-engineering-project-png-image_9130144.png",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
        timer: 4000,
        showConfirmButton: false,
      });
    } else {
      setTimeout(() => {
        fetchVehicle();
      }, 5000);
      Swal.fire({
        title: "Congratulations!",
        text: `You've earned ${random} Coins from your vehicle, you can use it when you service your vehicle`,
        imageUrl:
          "https://png.pngtree.com/png-vector/20230729/ourmid/pngtree-mechanical-engineering-vector-png-image_7013374.png",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
        timer: 6000,
        showConfirmButton: false,
      });
    }
  };
  let spareParts = [];
  if (vehicle) {
    const { Spareparts }: any = vehicle;
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
              <img src={vehicle?.image} />
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
                    <p className="text-sm" key={index}>
                      |
                    </p>
                  ))}
                </div>
                <p>Daily HP : {status[0]?.dailyHP}%</p>
                <div className="flex">
                  {Array.from({ length: status[0]?.dailyHP }, (_, index) => (
                    <p className="text-sm" key={index}>
                      |
                    </p>
                  ))}
                </div>
              </div>
              <div className="grid gap-1">
                <p className="text-white font-bold">Spareparts :</p>
                {spareParts &&
                  spareParts.map((el: Sparepart, i: string) => (
                    <p className="text-white" key={i}>
                      {el.name} : {new Date(vehicle.Books[0]?.serviceDate).toLocaleString("en-CA", { year: "numeric", month: "numeric", day: "numeric" })}
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
