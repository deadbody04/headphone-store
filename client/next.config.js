require('dotenv').config()

module.exports = {
  webpack: (config) => {
    config.resolve.modules.push(__dirname)
    config.node = {
      fs: 'empty',
    }
    return config
  },
  env: {
    STRAPI_API_URL: 'http://localhost:1337',
    NEXT_PUBLIC_CAPTCHA_SECRET_KEY: process.env.NEXT_PUBLIC_CAPTCHA_SECRET_KEY,
  },
  webpackDevMiddleware: (config) => {
    return config
  },
}
