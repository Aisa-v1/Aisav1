import { Client } from 'meowsab';
import { group, access } from "./system/control.js";
import UltraDB from "./system/UltraDB.js";
import sub from './sub.js';

/* =========== Client ========== */
const client = new Client({
  phoneNumber: '201142182793',
  prefix: [".", "/", "!"],
  fromMe: false, 
  owners: [
    { 
      name: "عقاب الاصلي", 
      jid: "201142182793@s.whatsapp.net",
      lid: "52429437595728@lid" 
    }
  ],
  settings: { noWelcome: false },
  commandsPath: './plugins'
});

client.onGroupEvent(group);
client.onCommandAccess(access);

/* =========== Database ========== */
if (!global.db) {
    global.db = new UltraDB();
}

/* =========== Config ========== */
const { config } = client;
config.info = { 
  nameBot: "*(اسيا 🦅 v1)*", 
  nameChannel: "عقاب الاصلي 👑", 
  idChannel: "120363426553571462@newsletter",
  groupLink: "https://chat.whatsapp.com/HFMDkO5G4z175nDviDsZYR",
  urls: {
    repo: "https://github.com/Aisa-v1/Aisav1",
    api: "https://emam-api.web.id",
    channel: "https://whatsapp.com/channel/0029VbD2pIvFXUuVFTTsek0J"
  },
  copyright: { 
    pack: 'اسيا v1', 
    author: 'عقاب الاصلي'
  },
  images: [
    "https://i.pinimg.com/originals/11/26/97/11269786cdb625c60213212aa66273a9.png",
    "https://i.pinimg.com/originals/e2/21/20/e221203f319df949ee65585a657501a2.jpg",
    "https://i.pinimg.com/originals/bb/77/0f/bb770fad66a634a6b3bf93e9c00bf4e5.jpg"
  ]
};

/* =========== Start ========== */
client.start();

setTimeout(async () => {
if (client.commandSystem) { 
sub(client)
  }
}, 2000);

/* =========== Catch Errors ========== */
process.on('uncaughtException', (e) => {
    if (e.message.includes('rate-overlimit')) {}
});

process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err)
});