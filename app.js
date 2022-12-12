const numOne = document.querySelector('.input-1');
const numTwo = document.querySelector('.input-2');

let a = '';
let sign = '';
let b = '';
let result = `Результат:`;
document.querySelector('.result').textContent = result;
console.log(a, b, sign, result)

function clearAll() {
  a = '';
  b = '';
  sign = '';
  result = `Результат:`;
  numOne.value = a;
  numTwo.value = b;
  document.getElementById('sign').value = sign;
}

function conclusion() {
  document.querySelector('.result').textContent = result;
  console.log(document.querySelector('.result').textContent)
}
function math() {
  if (document.getElementById('sign').value === 'Sapok') {
    document.querySelector('.scrimer').classList.add('active')
    setTimeout(() => {
      document.querySelector('.scrimer').classList.remove('active')
    }, 500);
  }





  a = numOne.value;
  a = parseInt(a);

  sign = document.getElementById('sign').value;

  b = numTwo.value
  b = parseInt(b);

  if (sign === '+') {
    result = `Результат: ${a + b}`;
  } if (sign === '*') {
    result = `Результат: ${a * b}`;
  } if (sign === '/') {
    result = `Результат: ${a / b}`;
  } if (sign === '-') {
    result = `Результат: ${a - b}`;
  } if (sign === '%') {
    result = `Результат: ${a % b}`;
  } if (sign === '**') {
    result = `Результат: ${a ** b}`;
  } 
  conclusion();
};

document.querySelector('.calcbtn-clear').addEventListener('click', () => {
  clearAll();
  conclusion();
});

document.querySelector('.calcbtn-result').addEventListener('click', () => {
  math();
});

document.querySelector('.helpBarBtn').addEventListener('click', () => {
  if (document.querySelector('.helpBarMenu').classList.contains('active')) {
    document.querySelector('.helpBarMenu').classList.remove('active')
  } else {
    document.querySelector('.helpBarMenu').classList.add('active');
  }
});
