const apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMatch: null = null;
let nothing: undefined = undefined;

// built in object
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'bule'];
let myNumbers: number[] = [1, 2, 3, 4];
let turths: boolean[] = [true, false];

// classes

class Cart {}

let cart: Cart = new Cart();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
// 最初の(i: number) => void が annotation
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use animations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line
// and initialize it later

let words = ['red', 'green', 'blue'];
let foundWord = false;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be infferred correctly
// Not recommended, but sometimes it might need
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  numberAboveZero = numbers[i];
}
