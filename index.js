const minimist = require('minimist')
module.exports = () => {
  const args = minimist(process.argv.slice(2))
  // console.log('args', args);
  // -a -b -c or -abc => { a: true, b: true, c: true }
  // --x => args.x: true
  // args { _: [ 'today' ], help: true }
  const info = args._
  let cmd = args._[0] || 'help'
  if (args.version || args.v) {
    cmd = 'version'
  }
  if (args.help || args.h) {
    cmd = 'help'
  }
  switch (cmd) {
    case 'today':
      require('./cmds/today')(args)
      break;
    case 'help':
      require('./cmds/help')(args)
      break
    case 'version':
      require('./cmds/version')(args)
      break
    case 'forecast':
      require('./cmds/forecast')(args)
      break;    
    default:
      error(`"${cmd}" is not a valid command!`, true)
      break  
    }
}