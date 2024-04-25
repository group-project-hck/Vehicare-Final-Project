"use server";
import { image_search } from "duckduckgo-images-api";
import { v2 as cloudinary } from "cloudinary";
import { cookies } from "next/headers";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

export async function AddVehicle(formData: {
  name1: string;
  name: string;
  type: string;
}): Promise<Response | void> {
  const merk = formData.name1;
  const name = formData.name;
  const vehicleName = `Motor ${merk} ${name}`;
  const imageResult = await image_search({
    query: vehicleName + "png",
    moderate: false,
    iterations: 3,
    retries: 1,
  });
  const imageFiltered = imageResult.filter((item) => !item?.image.includes("pngkit"))
  const image = imageFiltered[0];
  let { secure_url } = await cloudinary.uploader.upload(image.image); // upload to cloudinary
  const rawFormData = {
    name: vehicleName,
    type: formData.type,
    image: secure_url,
  };

  let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/vehicle`, {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: cookies().toString()
    },
    body: JSON.stringify(rawFormData),
  });
  const { data } = await res.json();
  return data;
}
