if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}
const express = require("express");
const app = express();
var cron = require("node-cron");
const cors = require("cors");
const nodemailer = require("nodemailer");
const notificationModel = require("./db/models/notification");
const serviceBookModel = require("./db/models/servicebook");
const statusModel = require("./db/models/status");
const userModel = require("./db/models/user");
const port = process.env.PORT || 3000;

app.use(cors());

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.MAIL,
		pass: process.env.MAIL_PASS,
	},
});

cron.schedule("*/30 0-59 0-23 1-31 1-12 0-6", async () => {
	const status = await statusModel.findStatus();
	status.map(async (item) => {
		await statusModel.dailyHp(item._id);
	});
});
cron.schedule("0-59 0-23 1-31 1-12 0-6", async () => {
	const serviceBooks = await serviceBookModel.findAll();
	serviceBooks.map(async (item) => {
		const currentTime = Date.now();
		const updatedTime = new Date(item.serviceDate);
		const diff = currentTime - updatedTime;
		const minutes = Math.floor((diff / 1000 / 60) << 0);
		const user = userModel.find(item.vehicleId);
		let message = "";
		let hp = 0;
		if (minutes === 1) {
			message =
				"Halo, ini sudah 15 hari semenjak kamu terakhir kali service motor nih, jangan lupa untuk menjadwalkan service ya untuk tetap menjaga kesehatan motor kamu";
			hp = 100;
		} else if (minutes === 2) {
			message =
				"Halo, ini sudah 30 hari semenjak kamu terakhir kali service motor nih, jangan lupa untuk menjadwalkan service ya untuk tetap menjaga kesehatan motor kamu";
			hp = 75;
		} else if (minutes === 3) {
			message =
				"Halo, ini sudah 45 hari semenjak kamu terakhir kali service motor nih, segera jadwalkan service ya untuk tetap menjaga kesehatan motor kamu";
			hp = 50;
		} else if (minutes === 4) {
			message =
				"Halo, ini sudah 60 hari semenjak kamu terakhir kali service motor nih, kamu harus menjadwalkan service ya untuk tetap menjaga kesehatan motor kamu";
			hp = 25;
		} else if (minutes >= 5) {
			message =
				"Halo, ini sudah lebih dari 60 hari semenjak kamu terakhir kali service motor nih, apakah kamu memiliki kendala untuk melakukan service? segera lakukan service ya agar kesehatan motor kamu tetap terjaga";
			hp = 0;
		}
		await statusModel.updateStatus(item.vehicleId, 0);
		await notificationModel.createNotification(item.vehicleId, message);
		transporter.sendMail({
			from: "vehicarejkt@gmail.com",
			to: user.email,
			subject: `Update Jadwal Service Motor untuk ${user.name}`,
			text: message,
		});
	});
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
