
// Special function to read input from stdin
function readLine() {
  return new Promise(resolve => {
    process.stdin.once('readable', () => {
      let chunk = process.stdin.read();
      resolve(chunk.toString().trimEnd());
    });
  });
}

// Our main function. Contains the top-level program logic
async function main() {
  process.stdout.write('type input into the program, hit <ctrl+c> to exit\n\n');

  while (true) {

    process.stdout.write('enter input: ')
    let input = await readLine();
    console.log(`input = "${input}"`);

    switch(input) {
      case 'ping':
        process.stdout.write('pong\n')
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
}

// call our main function
main();
