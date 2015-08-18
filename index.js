var settings = module.exports = {
  env: {
    name: 'dev',
    mode: 'development',
    host: '127.0.0.1',
    port: 3020,
    bindIp: "0.0.0.0",

    NODE_ENV: 'development',
    PORT: 3020,
    BINDIP: "0.0.0.0"
  },

  secretKey: 'quick',

  app: {
    protocol: 'http',
    host: '127.0.0.1',
    port: 3020,
    domain: 'http://ci.bot.bao.nong600.com',
    domainPort: 80,
    context: '/'
  },

  api: {
    url: 'http://ci.bot.bao.nong600.com/api'
  },

  logging: {
    reloadSecs: 0, //INFO: set 0 could let nodeunit tests which use log4js exit properly
    level: 'DEBUG'
  },

  redis:{
    mode:'single',
    host: 'pub-redis-11671.us-east-1-3.6.ec2.redislabs.com',
    port: 11671,
    auth:'',
    sentinel: {
      hosts:[{host: '127.0.0.1', port: 26379}],
      masterName:'mymaster'
    }
  },

  mongo: {
    host: "mongodb://trillers:trillers@ds031883.mongolab.com",
    port: 31883,
    db: "zeus",
    username: 'trillers',
    password: 'trillers'
  },

  session: {
    secretKey: 'quick',
    expires: 60 // minutes
  },

  wechat: {
    appKey: 'wxf93b94a5d4c9beb0',
    appSecret: '108547cde3d34b636d590185a8345a58',
    token: 'trillers',
    encodingAESKey: 'u66H0iFUqhQNCUMV4zAwMpy3fIFDR7a3GLSAm1rVz7d'
  },

  locationServer: {
    host: 'api.map.baidu.com',
    port: 80,
    ak: 'PwCZ3FQOyXeHDQKRQZvsrL8k'
  },

  resources: {
    app: {
      name: "mit"
    }
  }
};
