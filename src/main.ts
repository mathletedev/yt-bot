import { Client, Message, TextChannel } from "eris";
import { Base } from "eris-sharder";

const PREFIX = "!";

export = class Bot extends Base {
	public constructor(options: { bot: Client; clusterID: number }) {
		super(options);
	}

	public launch() {
		this.bot.on("messageCreate", this.messageHandler);

		this.bot.editStatus("dnd", {
			name: "YouTube",
			type: 0
		});

		console.log("Bot is online!");
	}

	private messageHandler(message: Message) {
		if (!message.guildID || message.author.bot) return;

		let args = message.content.slice(PREFIX.length).toLowerCase().split(" ");
		const command = args.shift();

		if (command === "ping") {
			(message.channel as TextChannel).createMessage("pong!");
		} else if (command === "say") {
			message.channel.createMessage(args.join(" "));
		}
	}
};
