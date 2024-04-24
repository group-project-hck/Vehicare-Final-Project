"use client";
import { useEffect, useState } from "react";
import { Pixelify } from "react-pixelify";
import LoadingComponent from "../loading";
import { Status } from "@/databases/models/types";

export default function TamagochiMotor({ selectedVehicle }) {
	const id = selectedVehicle;
	const [vehicle, setVehicle] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
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
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		};
		if (selectedVehicle) {
			fetchVehicle();
		}
	}, [selectedVehicle]);

	if (loading) {
		return <LoadingComponent />;
	}

	// Cek Status
	let status = {};
	if (vehicle) {
		const { Status } = vehicle;
		if (Status) {
			status = Status;
		}
	}

	let spareParts = [];
	if (vehicle) {
		const { Spareparts } = vehicle;
		if (Spareparts) {
			spareParts = Spareparts;
		}
	}

	return (
		<>
			<div className="flex justify-center">
				<div className="flex w-full justify-center items-center">
					<div className="flex-1 h-full flex justify-center items-end">
						<div className="flex animate-bounce">
							<img
								src={vehicle?.image}
								fillTransparencyColor={"transparent"}
								pixelSize={12}
								centered={true}
							/>
						</div>
					</div>
					<div className="flex-1 h-full border">
						<div className="">
							<p className="text-white">Status :</p>
							<p className="text-white">HP : {status[0]?.HP}</p>
							<p className="text-white">Daily HP : {status[0]?.dailyHP}</p>
							<br />
							<p className="text-white">Spareparts :</p>
							{spareParts.map((el, i) => (
								<p className="text-white" key={i}>
									{el.name} : status health
								</p>
							))}
							<br />
							<p className="text-white">HIT SERVICE</p>
							<p className="text-white">HIT GATCHA</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
