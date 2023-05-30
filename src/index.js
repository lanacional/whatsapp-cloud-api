const { createBot } = require('whatsapp-cloud-api');

(async () => {
  try {
    // replace the values below from the values you copied above
    const from = '118465444587036';
    const token = 'EAARShSCq5ZCcBANyfBuVlgN8kELBEVipBLbWEInP7updhxrfVaKmFbW0pel033l7peZALeiepDeMzTs01uUaUzy8f3xJ4J3pOfRcix2Hij8o7vmDMT8zm2gI96LR4j7cmPQuVuMYCTmRxJ59k3H6GAZBKJ3I6QZCxQ1W4jZAcSq6toHxXO89X8poZCcSb8g0phayp4wW0cSAZDZD';
    const to = '624464627'; // your phone number without the leading '+'
    const webhookVerifyToken = 'NACIONALTOKEN'; // use a random value, e.g. 'bju#hfre@iu!e87328eiekjnfw'

    const bot = createBot(from, token);

    const result = await bot.sendText(to, 'Hello world');

    // Start express server to listen for incoming messages
    await bot.startExpressServer({
      webhookVerifyToken,
    });

    // Listen to ALL incoming messages
    bot.on('message', async (msg) => {
      console.log(msg);

      if (msg.type === 'text') {
        await bot.sendText(msg.from, 'Received your text message!');
      } else if (msg.type === 'image') {
        await bot.sendText(msg.from, 'Received your image!');
      }
    });
  } catch (err) {
    console.log(err);
  }
})();