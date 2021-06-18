import { Client, TextChannel } from "eris";
import { Base } from "eris-sharder";

export = class Bot extends Base {
	public constructor(options: { bot: Client; clusterID: number }) {
		super(options);
	}

	public launch() {
		this.bot.on("messageCreate", (msg) => {
			if (!msg.guildID) return;

			if (msg.content === "!ping") {
				(msg.channel as TextChannel).createMessage("pong!");
			}
		});

		this.bot.editStatus("dnd", {
			name: "YouTube",
			type: 0
		});

		console.log("Bot is online!");
	}
};
