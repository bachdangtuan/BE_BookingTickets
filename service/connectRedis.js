const redis = require('redis');

const clientRedis = redis.createClient({
    port: 6379,
    host: '127.0.0.1'
})

exports.module = clientRedis;
