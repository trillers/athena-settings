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
    domain: 'http://case.www.wenode.org',
    domainPort: 80,
    context: '/'
  },

  api: {
    url: 'http://case.www.wenode.org/api'
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

  resources: {
    app: {
      name: "athena"
    }
  }
};
