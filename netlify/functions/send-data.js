const axios = require('axios');

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") return { statusCode: 405 };

  try {
    const payload = JSON.parse(event.body);
    // Use a BRAND NEW bot token here (Step 4)
    const botToken = "YOUR_NEW_BOT_TOKEN_HERE"; 
    const chatId = "YOUR_CHAT_ID_HERE";
    
    await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      chat_id: chatId,
      text: payload.message,
      parse_mode: "HTML"
    });

    return { statusCode: 200, body: "Success" };
  } catch (e) {
    return { statusCode: 500, body: e.message };
  }
};
