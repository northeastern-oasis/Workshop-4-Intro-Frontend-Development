// This line is necessary for every file you make with React components!
// It tells the compiler you are creating React components here!
import React from 'react'

// An example component--you can base your own component on this!
function Test() {
  return <p>Testing</p>
}

// TODO: 
// 1. Create a new component called "HelloWorld"
// Hint: it should also be a function--that's how we'll make our components!
// 2. Have it return a <p> tag containing the text "Hello World!"
// 3. Change our default export below to export HelloWorld instead of Test
// 4. We can't see it yet, because we'll need to render this component in App.js. 
// 5. Go to App.js and notice how HelloWorld.js is already imported. We can just go ahead and add it to our rendered code like another HTML tag: <HelloWorld></HelloWorld> (you can also just write <HelloWorld />, this is shorthand for tags without anything inside)
// 6. If time allows, create another component and add it to App.js! You will just need to create a new file in this folder and then import it to App.js

// This is saying that when we *import* this file from another file,
// we want to import Foo
export default Test;