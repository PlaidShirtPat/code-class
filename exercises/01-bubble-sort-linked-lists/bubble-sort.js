const TEXT_CODES = {
  // format/style codes
  reset:      "\u001B[0m",
  bright:     "\u001B[1m",
  dim:        "\u001B[2m",
  underscore: "\u001B[4m",
  blink:      "\u001B[5m",
  reverse:    "\u001B[7m",
  hidden:     "\u001B[8m",

  // color codes
  fgBlack:    "\u001B[30m",
  fgRed:      "\u001B[31m",
  fgGreen:    "\u001B[32m",
  fgYellow:   "\u001B[33m",
  fgBlue:     "\u001B[34m",
  fgMagenta:  "\u001B[35m",
  fgCyan:     "\u001B[36m",
  fgWhite:    "\u001B[37m",
  bgBlack:    "\u001B[40m",
  bgRed:      "\u001B[41m",
  bgGreen:    "\u001B[42m",
  bgYellow:   "\u001B[43m",
  bgBlue:     "\u001B[44m",
  bgMagenta:  "\u001B[45m",
  bgCyan:     "\u001B[46m",
}



/**
 *
 * @brief Swaps two items in an array based on their indexes
 *
 * @arg {Array}   list    array containing items being swapped
 * @arg {number}  index1  index of first item being swapped
 * @arg {number}  index2  index of second item being swapped
 */
function swap(list, index1, index2) {
  let tmp = list[index1]
  list[index1] = list[index2]
  list[index2] = tmp
  printListSwap(list, index1, index2)
}

/**
 * @brief helper function that prints list to console 
 *
 * @arg {Array}   list    - the array to print
 */
function printList(list) {
  console.log(`list = ${JSON.stringify(list)}`)
}

/**
 * @brief use ANSI escape codes to make str bright red
 *
 * @arg {string}  str    - string to format
 */
function formatRed(str) {
  return `${TEXT_CODES.bright}${TEXT_CODES.fgRed}${str}${TEXT_CODES.reset}`
}

/**
 * @brief use ANSI escape codes to make str bright blue
 *
 * @arg {string}  str    - string to format
 */
function formatBlue(str) {
  return `${TEXT_CODES.bright}${TEXT_CODES.fgBlue}${str}${TEXT_CODES.reset}`
}

/**
 * @brief helper function that prints a color coded list to indicate a swap
 *        red for the first item, blue for the second
 *
 * @arg {Array} list - the array to print
 * @arg {number}  index1  - index of first item being swapped
 * @arg {number}  index2  - index of second item being swapped
 */
function printListSwap(list, index1, index2) {
  let msg = `swapped ${formatRed(index1)}<->${formatBlue(index2)}: [`

  // add items in array
  for(let i=0; i < list.length; i++) {
    // add item w/ format
    if(i === index1)
      msg += formatRed(list[i])
    else if(i === index2)
      msg += formatBlue(list[i])
    else
      msg += list[i]

    // add comma between items
    msg += ','
  }

  // add ending bracket
  msg += ']'
  console.log(`list = ${msg}`)
}


/**
 * @brief sorts list in acending order, does not handle large lists well
 *
 * @arg {Array} list - array to sort
 *
 * @return {Array} - the sorted list
 */
function bubbleSort(list) {
  let i, j
  for(i = 0; i < list.length; i++) {
    for(j = 0; j < list.length-i-1; j++) {
      let index1 = j
      let index2 = j+1

      if(list[index1] > list[index2])
        swap(list, index1, index2)
    }

    printList(list)
  }
  return list
}


// main logic
let numbers = [6, 9, 10, 4, 3, 1, 4, 8, 3, 9]

console.log('the unsorted list:')
printList(numbers)

bubbleSort(numbers)

console.log('the sorted list:')
printList(numbers)


