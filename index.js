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
    domain: 'http://www.wenode.org',
    domainPort: 80,
    context: '/'
  },

  api: {
    url: 'http://www.wenode.org/api'
  },

  logging: {
    reloadSecs: 0, //INFO: set 0 could let nodeunit tests which use log4js exit properly
    level: 'DEBUG'
  },

  redis:{
    mode:'single',
    host: '127.0.0.1',
    port: 6379,
    auth:'trillers'
  },

  mongo: {
    host: "127.0.0.1",
    port: 27017,
    db: "wenode",
    username: 'wenode',
    password: 'wenode'
  },

  session: {
    secretKey: 'quick',
    expires: 60 // minutes
  },

  wechat: {
    appKey: 'wx8ecd17a4beabe76a',
    appSecret: '74ad148c79ac88f844ad98b72d59de96',
    token: 'trillers',
    encodingAESKey: '9zYRktc6N1WPyqH6hXq38tJC2CVDaLjHIkxRpihzmx3',
    siteId: 'gh_76ea74206101',
    siteName: '跟谁学西安'
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
