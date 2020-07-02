const div = document.getElementById("div");
const button = document.querySelector("button");

button.addEventListener('click', (event) => {
  if (div.children[0].style.display != "block") {
    div.children[0].style.display = "block";
    div.children[0].children[0].innerText = button.dataset.title;
    div.children[0].children[1].innerText = button.dataset.content;
    console.log(div.children[0].offsetWidth);
    console.log(button.offsetWidth);

    div.children[0].style.left =  `${button.offsetLeft-((div.children[0].offsetWidth-button.offsetWidth)/2)}px`;
    console.log(button.offsetLeft);
    console.log(div.children[0].style.left);

  } else {
    div.children[0].style.display = "none";
  }
});