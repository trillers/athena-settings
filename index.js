var settings = module.exports = {
  env: {
    name: 'prd',
    mode: 'production',
    host: '127.0.0.1',
    port: 3020,
    bindIp: "0.0.0.0",

    NODE_ENV: 'production',
    PORT: 3020,
    BINDIP: "0.0.0.0"
  },

  secretKey: 'quick',

  app: {
    protocol: 'http',
    host: '127.0.0.1',
    port: 3020,
    domain: 'http://dev.www.wenode.org',
    domainPort: 80,
    context: '/'
  },

  api: {
    url: 'http://dev.www.wenode.org/api'
  },

  logging: {
    reloadSecs: 0, //INFO: set 0 could let nodeunit tests which use log4js exit properly
    level: 'DEBUG'
  },

  redis:{
    mode:'single',
    host: '127.0.0.1',
    port: 6379,
    auth:'trillers',
    sentinel: {
      hosts:[{host: '127.0.0.1', port: 26379}],
      masterName:'mymaster'
    }
  },

  mongo: {
    host: "114.215.91.211",
    port: 27017,
    db: "wenode-case",
    username: 'wenode-case',
    password: 'wenode-case'
  },

  session: {
    secretKey: 'quick',
    expires: 60 // minutes
  },

  wechat: {
    appKey: 'wx9d66ca536fd64868',
    appSecret: '3ea67717f75b4641b65f600bcb8da3df',
    token: 'trillers',
    encodingAESKey: '9zYRktc6N1WPyqH6hXq38tJC2CVDaLjHIkxRpihzmx3',
    siteId: 'gh_414a400e8dbc',
    siteName: '慧学习'
  },

  locationServer: {
    host: 'api.map.baidu.com',
    port: 80,
    ak: 'PwCZ3FQOyXeHDQKRQZvsrL8k'
  },

  txLocationServer: {
    host: 'http://apis.map.qq.com/ws/geocoder/v1/',
    key: '4WMBZ-5RPWW-A2QR3-RWHLB-O72WV-NPFRS'
  },

  resources: {
    app: {
      name: "athena"
    }
  }
};
