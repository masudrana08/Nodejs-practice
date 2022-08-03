const {EventEmitter} = require('events')
class Logger extends EventEmitter{
    log(){
        console.log('logged')
        this.emit('messagelogged', 'event emit log')
    }
}
module.exports = Logger