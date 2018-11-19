/*
 *
 * https://nodejs.org/dist/latest-v10.x/docs/api/process.html#process_process_stderr
 */

// the same as: console.log('hello world')
process.stdout.write('hello world\n')

// writes 'I am error\n' to stderr
process.stderr.write('I am error\n')


// Examples of equivelent functions defined with:
// // standard function
// function() {}
// // arrow function
// () => {}
//
// function onInput(a, b) {
//   // stuff here
// }
//
// let onInput = (a, b) => {
//   // stuff here
// }

// use utf8 when parsing input bytes
process.stdin.setEncoding('utf8')

// wait until something is readable on stdin
//             function to add event handler
//             |   event name
//             |     |       Define a callback
//             |     |       |
process.stdin.on('readable', () => {
  // read stdin, and place the data into chunk
  // process.stdin.read() may return null, if there is no data
  // https://nodejs.org/dist/latest-v10.x/docs/api/stream.html#stream_readable_read_size
  const chunk = process.stdin.read()

  // quick null check to ensure data was readkc
  if (chunk !== null) {
    // write back out the input
    process.stdout.write(`data: ${chunk}`)
  }
});



