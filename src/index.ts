import "dotenv-safe/config";
import { Master } from "eris-sharder";

const _ = new Master(process.env.BOT_TOKEN!, "/dist/main.js", {
	name: "yt-bot",
	stats: true,
	clientOptions: {}
});

console.log("hi");
