"use client"
import { useEffect, useState } from "react";
import { Pixelify } from "react-pixelify";
import LoadingComponent from "../loading";

export default function TamagochiMotor({ selectedVehicle }) {
	const [vehicle, setVehicle] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchVehicle = async () => {
			try {
				setLoading(true);
				const response = await fetch(
					`${process.env.NEXT_PUBLIC_BASE_URL}api/vehicle/${selectedVehicle}`,
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

	// CEK STATUS
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
					<div className="flex-1 animate-bounce haloo">
						<div className="flex justify-center">
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
						<p className="text-white">HP : 100</p>
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
