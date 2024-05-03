// for (let i = 0; i < 100; i++) {
//   console.log('hello');
// }

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// const numbers = [1, 22, 23, 62];

// const newNumbers = numbers.map((num) => {
//   return num * 2;
// });

// console.log(newNumbers);

// let words = ['hello', 'world'];

// let upperCase = words.map((word) => word.toUpperCase());

// // console.log(upperCase);

// let users = [
//   {
//     name: 'John',
//     age: 27,
//     lastName: 'tavkhelidze',
//   },
//   {
//     name: 'davit',
//     age: 27,
//     lastName: 'messi',
//   },
// ];

// let res = users.map((user) => {
//   console.log(user);
// });

// let users = [
//   { name: 'Alice', age: 20, isEmployed: true, budget: 100 },
//   { name: 'Bob', age: 25, isEmployed: false, budget: 800 },
//   { name: 'Charlie', age: 30, isEmployed: true, budget: 800 },
//   { name: 'David', age: 15, isEmployed: false, budget: 200 },
//   { name: 'Eva', age: 28, isEmployed: true, budget: 700 },
//   { name: 'Frank', age: 22, isEmployed: false, budget: 300 },
//   { name: 'Grace', age: 18, isEmployed: true, budget: 400 },
//   { name: 'Hannah', age: 27, isEmployed: false, budget: 200 },
//   { name: 'Igor', age: 24, isEmployed: true, budget: 1000 },
//   { name: 'Jack', age: 29, isEmployed: false, budget: 420 },
// ];

// let el = users.find((user) => {
//   return user.name === 'Igor';
// });

// console.log(el);
// let budget = users.reduce(function (acc, user) {
//   return acc + user.budget;
// }, 0);
// console.log(budget);

// let srulwlovani = [];
// let isEmployed = users.map((user) => {
//   if (user.age > 18) {
//     return srulwlovani.push(user);
//   }
// });

// console.log(srulwlovani);

// let employed = users.filter((user) => {
//   return user.isEmployed;
// });

// console.log(employed);

// console.log(users.isEmployed);
// if (!users.isEmployed) {
//   let res = users.map(function (user) {
//     return user;
//   });
//   console.log(res);
// }
const taskInput = document.querySelector('#task');
const addBtn = document.querySelector('.add-task-btn');

//! ul
const ul = document.querySelector('.unordered-list');

// const removeBtn = document.querySelector('.remove-btn');

addBtn.addEventListener('click', () => {
  console.log(':hello');
  let list = document.createElement('li');
  let mainListDiv = document.createElement('div');
  let imageListDiv = document.createElement('div');

  const removeImg = document.createElement('img');
  const doneImg = document.createElement('img');

  let liText = document.createElement('p');
  let inputValue = taskInput.value;

  removeImg.src = './image/svg/removeBtn.svg';
  doneImg.src = './image/svg/doneBtn.svg';

  if (inputValue !== '') {
    //! icons inside image div
    doneImg.classList.add('done-btn');
    removeImg.classList.add('remove-btn');

    imageListDiv.appendChild(doneImg);
    imageListDiv.appendChild(removeImg);

    //! text and icons inside div

    mainListDiv.appendChild(liText);
    mainListDiv.appendChild(imageListDiv);

    //! div inside li

    mainListDiv.classList.add('hidden-li');

    //! li inside ul
    liText.textContent = inputValue.trim();
    liText.classList.add('li-text');
    list.appendChild(mainListDiv);

    //! ul
    ul.classList.add('hidden-images');
    ul.appendChild(list);

    removeImg.addEventListener('click', () => {
      ul.removeChild(list);
    });

    doneImg.addEventListener('click', () => {
      liText.classList.add('task-done');
    });
  }
  taskInput.value = '';
});
