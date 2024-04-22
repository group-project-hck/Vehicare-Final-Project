'use server'
import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true
});

export async function POST(req: NextRequest) {
    try {
        const data = await req.formData()
        const file: File | null = data.get("image") as unknown as File // get file

        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes) // convert file to buffer

        let base64Img = buffer.toString("base64"); // format base64
        let imageUrl = `data:${file.type};base64,${base64Img}`; // format Data URL

        let { secure_url } = await cloudinary.uploader.upload(imageUrl); // upload to cloudinary

        // TARO 'secure_url' KE DB 
        return NextResponse.json({ image: secure_url })
    } catch (error) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}