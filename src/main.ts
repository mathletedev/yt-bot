import { Client } from "eris";
import { Base } from "eris-sharder";

export = class Bot extends Base {
	public constructor(options: { bot: Client; clusterID: number }) {
		super(options);
	}

	public launch() {
		console.log("Bot is online!");
	}
};
