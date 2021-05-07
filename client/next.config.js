require('dotenv').config()

module.exports = {
  webpack: (config) => {
    config.node = {
      fs: 'empty',
    }
    return config
  },
  env: {
    STRAPI_API_URL: process.env.STRAPI_API_URL,
    NEXT_PUBLIC_CAPTCHA_SECRET_KEY: process.env.NEXT_PUBLIC_CAPTCHA_SECRET_KEY,
  },
  webpackDevMiddleware: (config) => {
    return config
  },
}

