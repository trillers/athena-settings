var settings = module.exports = {
  env: {
    name: 'dev',
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
    host: '121.42.61.180',
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
    db: "wenode-dev",
    username: 'wenode-dev',
    password: 'wenode-dev'
  },

  session: {
    secretKey: 'quick',
    expires: 60 // minutes
  },

  wechat: {
    appKey: 'wx23f1709f7727051f',
    appSecret: '977f6080e128d465b673deb79e3d31b8',
    token: 'trillers',
    encodingAESKey: '9zYRktc6N1WPyqH6hXq38tJC2CVDaLjHIkxRpihzmx3',
    siteId: 'gh_afc333104d2a',
    siteName: '错题本'
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

  platform: {
    name: '跟谁学',
    desc: '跟谁学'
  },

  resources: {
    app: {
      name: "mit"
    }
  }
};
