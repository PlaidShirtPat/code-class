

// write our prompt
function writePrompt() {
  process.stdout.write('enter input: ')
}

// simple example of function that handles a command
function handlePing() {
  process.stdout.write('pong\n')
}

// our event handler for input from stdin
function onData(chunk) {
  //remove whitespace from end of input
  let input = chunk.toString().trimEnd()

  if (input !== null) {
    switch(input) {
      case 'ping':
        handlePing()
        break;

      case 'quit':
      case 'exit':
        process.stdout.write('goodbye\n')
        process.exit(0)
        break;

      default:
        process.stdout.write('unrecognized command, try again.\n')
    }
  }

  writePrompt()
}

// setup code
// set input encoding
process.stdin.setEncoding('utf8')
// add data handler on stdin
process.stdin.on('data', onData)
// open stdin
process.stdin.resume()
// write initial message
process.stdout.write('type input into the program, hit <ctrl+c> to exit\n\n');

// write first input prompt
writePrompt()
