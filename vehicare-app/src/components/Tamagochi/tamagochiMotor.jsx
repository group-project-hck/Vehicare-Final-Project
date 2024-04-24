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

	return (
		<>
			<div className="flex justify-center">
				<div className="flex w-full justify-center items-center">
					<div className="flex-1 haloo">
						<div className="flex animate-bounce justify-center">
							<Pixelify
								src={vehicle?.image}
								fillTransparencyColor={"transparent"}
								pixelSize={12}
								centered={true}
							/>
						</div>
					</div>
					<div className="flex-1 h-full border">
						<p className="text-white">Status :</p>
						<p className="text-white">HP : {status[0]?.HP}</p>
						<p className="text-white">Daily HP : {status[0]?.dailyHP}</p>
						<br />
						<p className="text-white">Spareparts :</p>
						<p className="text-white">Rantai : 100</p>
						<p className="text-white">Busi : 100</p>
						<br />
						<p className="text-white">HIT SERVICE</p>
						<p className="text-white">HIT GATCHA</p>
					</div>
				</div>
			</div>
		</>
	);
}
