const argv = require('yargs').argv;

exports.MONGODB = {
	uri: `mongodb://127.0.0.1:${argv.dbport || '27017'}/fanblog`,
	username: argv.db_username || 'root',
	password: argv.db_password || 'CHAOfan123'
}

exports.AUTH = {
  data: argv.auth_data || { user: 'root' },
  jwtTokenSecret: argv.auth_key || 'fanblog',
  defaultPassword: argv.auth_default_password || 'root'
}

exports.APP = {
  ROOT_PATH: __dirname,
  LIMIT: 10,
  PORT: 8000
}

exports.INFO = {
  name: 'NodePress',
  version: '1.0.0',
  author: 'fanchao',
  powered: ['Vue2', 'Nuxt.js', 'React', 'Angular4', 'Bootstrap4', 'jQuery', 'Video.js', 'Node.js', 'MongoDB', 'Express', 'Nginx']
}