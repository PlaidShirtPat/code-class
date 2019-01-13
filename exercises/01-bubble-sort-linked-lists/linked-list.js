


function createList() {
  return {
    head: null,
    tail: null
  }
}

function createItem(data) {
  return {
    next: null,
    prev: null,
    data: data
  }
}

/*
 * checks list.head to see if list is empty
 * returns true or false 
 */
function isListEmpty(list) {
  return list.head === null
}


/*
 * prints out a formatted linked list
 * for the list a, b, c, we print:
 * a - b - c
 */
function printList(list) {
  let msg = "list: "
  let item = list.head
  let seperator = ' - '

  while(item !== null) {
    msg += item.data

    // don't add seperator if there is no next item)
    if(item.next !== null)
      msg += seperator

    // set item to next item for next loop
    item = item.next
  }

  console.log(msg)
}

function formatItem(item) {
  let nextString, prevString

  // Check to see if a null item was passed
  if(item === null)
    return "NullItem"

  if(item.prev !== null)
    prevString = item.prev.data
  else
    prevString = 'null'

  if(item.next !== null)
    nextString = item.next.data
  else
    nextString = 'null'

  return `Item: data=${item.data} prev=${prevString} next=${nextString}`

}

/*
 * checks list.head to see if list is empty
 * returns true or false 
 */

function append(list, item) {
  // handle empty list
  if(isListEmpty(list)) {
    list.head = item
    list.tail = item
  } else {
    list.tail.next = item
    item.prev = list.tail
    list.tail = item
  }
}

/*
 * get item from list by it's index
 * returns null if index is invalid
 */
function get(list, index) {
  let currIndex = 0
  let currItem  = list.head
  let item      = null

  while(item === null) {
    // exit if we are at the end of the list
    if(currItem === null)
      break
    
    // have we found the item?
    if(currIndex === index)
      item = currItem

    // set up for next loop
    currIndex++
    currItem = currItem.next
  }

  return item
}



// letters to put into list
let letters = [ 'a', 'b', 'c', 'd', 'e', 'f' ]
let list = createList()

// initialze list
for(let i=0; i < letters.length; i++) {
  let newItem = createItem(letters[i])
  append(list, newItem)
}

// show that append worked
printList(list)

// show that get works
console.log(`item @ index 0:  ${formatItem(get(list, 0))}`)
console.log(`item @ index 3:  ${formatItem(get(list, 3))}`)
console.log(`item @ index 10: ${formatItem(get(list, 10))}`)
