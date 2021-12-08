require('dotenv').config();

module.exports = {
  development: {
    host: process.env.HOSTNAME,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    dialect: 'mysql',
  },
  test: {
    host: process.env.HOSTNAME,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    dialect: 'mysql',
  },
  production: {
    host: process.env.HOSTNAME,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'blogs_api',
    dialect: 'mysql',
  },
}; 