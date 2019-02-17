var cron = require('node-cron');
var URL = require('./models/_URL');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/short_url');
cron.schedule('* 23 * * *', async () => {
    console.log('====================');
    console.log('Delete all record...');
    await URL.remove({}).exec();
    var count = await URL.find().count().exec();
    if(count >= 0)
    {
        console.log('Delete all record success');
    }
});