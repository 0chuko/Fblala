const axios = require('axios');

exports.handler = async (event) => {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    try {
        const data = JSON.parse(event.body);
        
        // YOUR NEW CLEAN TOKEN
        const token = "8360358347:AAFrKvrcoHDh6Q9deoqtaVhW8EuTWUmXcXQ";
        // YOUR CHAT ID (Make sure this is correct)
        const chatid = "5901396648"; 
        
        await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
            chat_id: chatid,
            text: data.message,
            parse_mode: "HTML"
        });

        return { statusCode: 200, body: "Data Sent" };
    } catch (e) {
        return { statusCode: 500, body: "Error" };
    }
};
