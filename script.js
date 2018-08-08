let body = document.getElementsByTagName('body')[0];

for (let i = 0; i < 81; i++) {
  let squares = document.createElement('div');

  squares.style.float = 'left';
  squares.style.width = '11.1%';
  squares.style.paddingBottom = '11.1%';

  if (i % 2 === 0) {
    squares.style.backgroundColor = 'red';
  } else {
    squares.style.backgroundColor = 'black';
  }

  body.appendChild(squares);
}