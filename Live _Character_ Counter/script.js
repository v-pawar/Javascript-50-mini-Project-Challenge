//  select total
let total = document.getElementById("total");

//  Maximum lenght set

const maxCharacters = 100;

//  select remaining
let remaining = document.getElementById("remaining");

//  select textarea

let message = document.getElementById("message");

message.maxLength = maxCharacters;

// Custom Popup Box

let popup = document.getElementById("popup");

// closePopup

let Closepopup = document.getElementById("closePopup");

Closepopup.addEventListener("click", function () {
  console.log("Close button clicked!");
  popup.style.display = "none";
  location.reload(); // used for refresh web
});

message.addEventListener("input", function () {
  total.textContent = message.value.length;

  let totalCharacters = message.value.length;

  if (totalCharacters === maxCharacters) {
    console.log("Character Limit Reached ! ");
    popup.style.display = "block";
  }

  let remainingCharacters = maxCharacters - totalCharacters;

  remaining.textContent = remainingCharacters;
});
