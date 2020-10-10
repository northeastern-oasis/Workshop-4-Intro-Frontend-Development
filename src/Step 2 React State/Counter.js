// This line is so important! But next time you'll need to add it yourself :)
import React from 'react';
import { useState } from 'react';

// This is another component...but this time we have state!
function NameDisplay() {
  // This creates a new state variable. Let's break it down
  // This useState() function takes one argument: the default value of the state
  // So, the default value of name is the empty string
  // It returns an array with two elements: the value of the state (name), and a function to change it (setName)
  // The [name, setName] syntax is shorthand to deconstruct this array and save these values in variables. So we get back two values: name and setName
  // We'll use name when we want the value of the state. We'll use setName when we want to change it! We DON'T change our state variable manually though (like name = "Bob"--this is not allowed!)
  const [name, setName] = useState("");

  // Yes, this is a function within a function. That's allowed in JavaScript
  function changeName() {
    // The prompt function displays a popup dialog asking for text. It's not React-specific, it's built-in to JavaScript
    const newName = prompt("What's your name?")
    // This calls our setName function to update name!
    setName(newName);
  }

  // Our returned element. We can display a JavaScript variable in our HTML code by putting it in {curly brackets}. So the code below will substitute {name} for the actual value of the name variable.
  // Our button can call functions upon click by setting the onClick value to the name of the function we want to call. Note we don't need to call the function here, just give its name (so we use onClick={changeName}, not onClick={changeName()})
  return (
    <div>
      <button onClick={changeName}>What's your name?</button>
      <p>Hello {name}!</p>
    </div>
  )
}

// TODO
// 1. Finish creating this Counter component, which displays its value and updates by one whenever you click its button
// 2. Change the export at the bottom so you export Counter, not NameDisplay

// Now you'll add some state yourself!
function Counter() {
  // TODO: create a new state variable and state setter here to hold counter value
  // default value should be 0
  

  function addCount() {
    // TODO: set the count to whatever it was before + 1

  }

  // TODO: Update the count when this button is clicked. Display the value of the count inside the <p> tag below
  return (
    <div>
      <button onClick={}>This button should call function to update count when clicked</button>
      <p>
        DISPLAY CURRENT COUNT HERE
      </p>
    </div>
  )
}

export default NameDisplay;