var settings = module.exports = {
  env: {
    name: 'local',
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
    domain: 'http://local.www.wenode.org',
    domainPort: 80,
    context: '/'
  },

  api: {
    url: 'http://local.www.wenode.org/api'
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

  rabbitmq: {
    host: "114.215.91.211",
    port: 5672,
    vhost: 'wenode_dev',
    username: 'wenode',
    password: 'wen0dep@ssw0rd!'
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
