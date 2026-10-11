const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const client = new Client({ authStrategy: new LocalAuth({ dataPath: "/data/wwebjs_auth" }) });
client.on("qr", (qr) => qrcode.generate(qr, { small: true }));
client.on("ready", () => console.log("WhatsApp client prêt"));
client.on("message", (msg) => { if (msg.body === "!ping") msg.reply("Pong! (whatsapp-web.js deployé via Hermes)"); });
client.initialize();
