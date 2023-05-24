var mineflayer = require('mineflayer');

var arguments = process.argv;

const bot = mineflayer.createBot({
  username: arguments[2],
  password: arguments[3],
  auth: 'microsoft',
  version: '1.8.9'
})

bot._client.authflow.mca.getCachedAccessToken().then((value) => {
  console.log("Access token: ", value.data.access_token);
});