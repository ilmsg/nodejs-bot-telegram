const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv');
dotenv.config();

const run = async () => {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const bot = new TelegramBot(token, { polling: true });

    bot.on('message', async (msg) => {
        const chatId = msg.chat.id;
        console.log(`chatId: ${chatId}`);
        console.log(`msg:`, JSON.stringify(msg));

        await bot.sendMessage(chatId, 'Received your message');
    });

    // Matches "/echo [whatever]"
    bot.onText(/\/echo (.+)/, async (msg, match) => {
        const chatId = msg.chat.id;
        const resp = match[1];

        console.log(`chatId: ${chatId}`);
        console.log(`msg:`, JSON.stringify(msg));
        await bot.sendMessage(chatId, resp);
    });

    const chatId = 6970357468;
    const textMessage = "keep moving...";
    await bot.sendMessage(chatId, textMessage);

};

run().catch(e => console.error)

// const msg = {
//     "message_id": 7,
//     "from": {
//         "id": 6970357468,
//         "is_bot": false,
//         "first_name": "ilmsg",
//         "username": "ilmsg",
//         "language_code": "en"
//     },
//     "chat": {
//         "id": 6970357468,
//         "first_name": "ilmsg",
//         "username": "ilmsg",
//         "type": "private"
//     },
//     "date": 1729419267,
//     "text": "/echo hi",
//     "entities": [
//         {
//             "offset": 0,
//             "length": 5,
//             "type": "bot_command"
//         }
//     ]
// }
