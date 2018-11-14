/*
 * run this example with:
 *  node process-arguments.js arg1 2 "Another one"
 *
 * This snippet demonstrates how to pass command line arguments to a node process
 * and use those arguments in our program.
 *
 * Arguments are seperated by spaces, if you want to pass an argument that contains spaces, you must put it in quotes
 * EG: node process-arguments.js "Spaces don't count here!"
 *
 * It's important to note that all arguments are passed into your program as STRINGS, so if you have
 * a number, it's important to use parseInt() to get an actual number.
 *
 * See https://nodejs.org/dist/latest-v10.x/docs/api/process.html#process_process_argv
 * for more information
 */


// process is a global object that is always availble to your nodejs code
// argv is short for argument vector. A vector is a collection of values

// process.argv[0] is the full path of the program used to execute our script
// in our case, it will be the full path to the node executable
console.log(`argv[0], our trusty executable: ${process.argv[0]}\n`)

// process.argv[1] is the full path to the script being executed (the file you're reading)
console.log(`argv[1], home is where the ~ is: ${process.argv[1]}\n`)

// we can see how many arguments our program was run with with process.argv.length
console.log(`You've run this script with ${process.argv.length} arguments, that's ${process.argv.length-2} arguments after the script name.\n`)

// here we are making sure the user has run this process with enough arguments!
if(process.argv.length <= 2) {
  console.log('You need to pass arguments to this script, try something like: node process-arguments.js arg1 2 "Another one"\n')
  // this causes our program to (almost) immediately exit. Nothing else in this script will be run.
  process.exit()
}

// here we're going to show the full contents of procss.argv
console.log(`The contents of argv: ${JSON.stringify(process.argv)}\n`)

console.log(`Remember, all arguments are passed as strings, even if you type a number\n`)
// here we're showing the type of each argument, they should all be 'string'
for (let i = 0; i < process.argv.length; i++) {
  // here we're using a new function, typeof(), we'll get into this more later,
  // but for now just know that it returns the type of whatever value is passed (like 'number', 'string', 'object')
  // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof for more information
  console.log(`the type of process.argv[${i}] is ${typeof(process.argv[i])}\n`)
}

console.log(`if you want to pass numbers to your program, be sure to parse them!\n`)
console.log(`'2' !== 2 (${'2' !== 2}), but parseInt('2') === 2 (${parseInt('2') === 2})\n`)
