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
    domain: 'http://ci.www.wenode.org',
    domainPort: 80,
    context: '/'
  },

  api: {
    url: 'http://ci.www.wenode.org/api'
  },

  logging: {
    reloadSecs: 0, //INFO: set 0 could let nodeunit tests which use log4js exit properly
    level: 'DEBUG'
  },

  redis:{
    mode:'single',
    host: 'pub-redis-11671.us-east-1-3.6.ec2.redislabs.com',
    port: 11671,
    auth:'trillers',
    sentinel: {
      hosts:[{host: '127.0.0.1', port: 26379}],
      masterName:'mymaster'
    }
  },

  mongo: {
    host: "ds031883.mongolab.com",
    port: 31883,
    db: "trillers",
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
    encodingAESKey: '9zYRktc6N1WPyqH6hXq38tJC2CVDaLjHIkxRpihzmx3'
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
