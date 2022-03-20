//declai=ring count variable
var count = 0;
// populating the paragraph with coount variable
counterH.textContent = count;

//pulling components from DOM or th HTML file.
decreaseB = document.querySelector("#decrease");
resetB = document.querySelector("#reset");
increaseB = document.querySelector("#increase");

counterH = document.querySelector("#counterH");

//Evennt Listners for the Buttons
decreaseB.addEventListener("click", function () {
  count--;
  counterH.textContent = count;
});
increaseB.addEventListener("click", function () {
  count++;
  counterH.textContent = count;
  setInterval(extraFunction(), 100);
});
resetB.addEventListener("click", function () {
  count = 0;
  counterH.textContent = count;
});

// extra function just for experiment!

function extraFunction() {
  if (count > 100) {
    console.log("you are a legend!");
  } else {
  }
}
