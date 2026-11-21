# JavaScript Counter App

## 📌 Project Introduction

This is my first project in the JavaScript 100 Questions Challenge (Beginner Level).

In this project, I created a simple Counter App using HTML and JavaScript.

The main purpose of this project is to understand JavaScript fundamentals and DOM manipulation.

## 🚀 Features

- Increment counter (+1)
- Decrement counter (-1)
- Reset counter (0)
- Counter cannot go below zero.
- Display updated counter value dynamically.

## 🛠️ Technologies Used

- HTML5
- JavaScript

## 📚 JavaScript Concepts Learned

### 1. Variables (let)

Variables are used to store data.

Example:

```javascript
let counter = 0;
```

### 2. DOM Manipulation

Used `getElementById()` to select HTML elements.

```javascript
let count = document.getElementById("count");
```

### 3. Event Listener

Used `addEventListener()` to perform actions when buttons are clicked.

```javascript
increment.addEventListener("click", function () {
  // Code here
});
```

### 4. Increment Operator (++)

Used to increase the counter by 1.

```javascript
counter++;
```

### 5. Decrement Operator (--)

Used to decrease the counter by 1.

```javascript
counter--;
```

### 6. If Condition

Used an if condition to prevent the counter from going below zero.

```javascript
if (counter > 0) {
  counter--;
}
```

### 7. innerText

Used `innerText` to update the HTML content dynamically.

```javascript
count.innerText = counter;
```

---

## 🧠 Important Learning Notes

### 1. Variable Scope

When a variable is declared outside a function, it can maintain its value between function calls.

Example:

```javascript
let counter = 0;

function incrementCounter() {
  counter++;
}
```

When declared inside a function, a new local variable is created whenever that function executes.

### 2. If Condition Placement

If we put the condition outside the event listener:

```javascript
if (counter > 0) {
  // Code
}
```

It checks the condition during normal script execution, not on every button click.

If we put the condition inside the event listener:

```javascript
decrement.addEventListener("click", function () {
  if (counter > 0) {
    counter--;
  }
});
```

The condition is checked every time the user clicks the button.

### 3. Execution Flow

- JavaScript executes normal code when the script loads.
- Event listeners are registered.
- JavaScript waits for user interaction.
- When a button is clicked, its callback function executes.
- Conditions inside the callback are checked during that execution.

### 4. console.log() Placement

If `console.log()` is inside the event listener, it executes on every click.

If it is outside the event listener, it executes during normal script execution.

---

## 🎯 What I Learned

After completing this project, I understood:

- How to select HTML elements using JavaScript.
- How to handle button click events.
- How to use variables to maintain counter values.
- How increment and decrement operators work.
- How to use if conditions.
- How variable scope works.
- How JavaScript executes event listeners.
- How to update HTML content dynamically.

## 📈 Challenge Progress

**Day 1:** JavaScript Beginner Challenge

**Question:** 01/100

**Project:** Simple Counter App

**Status:** Completed

---

Made with ❤️ while learning JavaScript.
