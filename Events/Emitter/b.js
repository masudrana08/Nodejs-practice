const Logger = require('./a')
const logger = new Logger()

logger.on('messagelogged', data=>console.log(data))

logger.log()
