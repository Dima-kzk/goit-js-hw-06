function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount){
  const temp = [];
  for (let i = 0; i<amount; i++){
    const div = document.createElement("div");
    div.style.width = `${30 + i*10}px`;
    div.style.height = `${30 + i*10}px`;
    div.style.backgroundColor = getRandomHexColor();
    temp.push(div);
  }
  document.getElementById("boxes").append(...temp);
}

const controls = document.getElementById("controls");

controls.firstElementChild.nextElementSibling.addEventListener("click", ()=>{
  const n = controls.firstElementChild.value;
  createBoxes(Number(n));
});

controls.lastElementChild.addEventListener("click", ()=>{
  document.getElementById("boxes").innerHTML = '';
});