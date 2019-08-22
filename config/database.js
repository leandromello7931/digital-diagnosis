
// here we have to create configurations for production and test
module.exports = {
  username: 'root',
  password: 'root',
  database: 'digital_diagnosis',
  host: '127.0.0.1',
  dialect: 'mariadb',
  dialectOptions: {
    useUTC: false
  },
  timezone: '-03:00'
}
