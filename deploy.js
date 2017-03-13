var Rsync = require('rsync');

// Build the command
var rsync = new Rsync()
  .shell('ssh')
  .source('./src/*')
  .destination('thehost.se@ssh.thehost.se:/www/kd');

// Execute the command
rsync.execute(function(error, code, cmd) {
  if (error) {
    console.log(error);
    console.log('code is ', code);
    console.log('command was', cmd);
  } else {
    console.log('SUCCESS!');
  }
  // we're done
});
