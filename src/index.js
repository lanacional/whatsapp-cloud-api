const { createBot } = require('whatsapp-cloud-api');

(async () => {
  try {
      const from = process.env['FROM_PHONE_NUMBER_ID'];
    const token = process.env['ACCESS_TOKEN'];
    const version = process.env['VERSION'];
    const to = process.env['TO'];
    const webhookVerifyToken = process.env['WEBHOOK_VERIFY_TOKEN'];
    // replace the values below from the values you copied above
   // use a random value, e.g. 'bju#hfre@iu!e87328eiekjnfw'

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
