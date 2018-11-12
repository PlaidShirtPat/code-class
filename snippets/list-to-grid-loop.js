// Output:
// a(0,0) b(1,0) c(2,0) d(3,0) e(4,0)
// f(0,1) g(1,1) h(2,1) i(3,1) j(4,1)
// k(0,2) l(1,2) m(2,2) n(3,2) o(4,2)
// p(0,3) q(1,3) r(2,3) s(3,3) t(4,3)
// u(0,4) v(1,4) w(2,4) x(3,4) y(4,4)
// z(0,5)


function print(msg) {
  process.stdout.write(msg);
}

let numPerRow = 5;

let items = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
  "u", "v", "w", "x", "y", "z", 
];

for(let i=0; i < items.length; i++) {
  let item = items[i];
  let row = Math.floor(i / numPerRow);
  let col = i % numPerRow;

  print(`${item}(${col},${row})`);

  if(col == numPerRow-1)
    print('\n');
  else
    print(' ');
}

print('\n');
