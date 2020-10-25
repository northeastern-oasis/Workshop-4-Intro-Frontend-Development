# Step 2: React State

### Learning Points:

- What is state
- Creating state
- Updating state

At this point we've created some components, but they don't do much beyond render some HTML code. But one of the most powerful features of components is their ability to keep track of a local state that we can update and access throughout their lifecycle--so let's add that!

### State

State is where you store property values that belong to a component. State is different than just a variable--React keeps track of it behind-the-scenes when you create it for a component. You can add as many values to the state as you want, and the state can hold any type of value: numbers, strings, booleans, objects, arrays, even other components!

When you update the state, **the component automatically re-renders**. This is a huge deal, and part of what makes React so useful! For example, imagine you have a timer component that keeps track of the time in the state. All you have to do is update the state to change the current time at certain intervals, and if your JSX displays the time value it will automatially show it. Doing this in plain HTML/JavaScript would be a ton more work--you would need to manually check when the value updates, grab the element that needs updating in the HTML file, and change its inner HTML every time. *Tedious*

**See slides for more info**

## Creating State

As mentioned, you can add as many values to state as you wish. State is created easily in React using a function React provides, `useState`.

First, you must import `useState` to your file: 

`import { useState } from 'react';`

It can then be called in your component to add a value to the state:

`const [name, setName] = useState("")`

useState takes one argument, which is the default value of the state. It returns an array with the value of the state and a function that resets that state value, which by convention is deconstructed using the above syntax. You can now use these values to access and change your state!

### Todo:

See `Counter.js for next steps`
