const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
const btn = document.getElementById("btn");
const mainH = document.querySelector("#mainH");
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  document.body.style.backgroundColor = hexColor;
  mainH.textContent = hexColor;
});

// math.floor is used to truncate the value i.e it just deletes decimarl places. math.floor(1.99999) = 1
//standard syntax of for(statement1 ; statament2 ; statement3) has been used
// refer to MDN web docs and W3Schools
