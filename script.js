const taskInput = document.querySelector('#task');
const addBtn = document.querySelector('.add-task-btn');

//! ul
const ul = document.querySelector('.unordered-list');

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
