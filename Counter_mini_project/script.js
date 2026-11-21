let increment = document.getElementById("increment");

let counter = 0;

//   increment counter logic

increment.addEventListener("click", function () {
  let count = document.getElementById("count");

  counter++;
  //  count.innerText="";
  count.innerText = counter;
});

// this is Decrement Counter Logic

let decrement = document.getElementById("decrement");

decrement.addEventListener("click", function () {
  let count = document.getElementById("count");
  if (counter > 0) {
    counter--;
    count.innerText = counter;
  }

  //  count.innerText="";
});

//  reset button logic

let reset = document.getElementById("reset");

reset.addEventListener("click", function () {
  let count = document.getElementById("count");

  counter = 0;

  count.innerText = counter;
});
