// It's necessary we import React in each file we use React
import React from "react";
import "./style.css";

// The below lines import components we'll be making from other files. When you add new component files, you'll need to import them before using them
import HelloWorld from './Step 1 JSX + First Component/HelloWorld.js'
import Counter from './Step 2 React State/Counter.js';

// This is what our app actually renders (as we defined in index.js)!
export default function App() {
  return (
    <div>
      <h1>Hello Oasis!</h1>
      <p>Welcome to Workshop 4: Intro to Frontend Development!</p>
      
      <p>Add more HTML code or components below!</p>
      

    </div>
  );
}
