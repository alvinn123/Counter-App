let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

//increment function adds 1 the counter on the website
function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  console.log(count);
}

function reset() {
  count = 0;
  countEl.textContent = 0;
}
