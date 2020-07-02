const div = document.getElementById('div');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  if (div.children[0].style.display !== 'block') {
    div.children[0].style.display = 'block';
    div.children[0].children[0].innerText = button.dataset.title;
    div.children[0].children[1].innerText = button.dataset.content;
    div.children[0].style.left = `${button.offsetLeft - ((div.children[0].offsetWidth - button.offsetWidth) / 2)}px`;
  } else {
    div.children[0].style.display = 'none';
  }
});
