# Step 1: JSX + First Component

### Learning Points:

- What is JSX?
- What is a component?
- How to make a component
- How to use our component

Before, we were making changes to a React component that was already made. Now, it's time to create our own! First though, we need to learn about two important concepts: JSX, and what a component even is. 

### JSX

JSX (which stands for JavaScript XML, but that's not too important right now) lets us write **HTML** code in our **JavaScript** files. You may have noticed from the last step that we were writing our HTML code **within** JavaScript functions--that's not normal!! This is a feature that React gives us--a syntax extension, actually--to make it easier to create components. Bascially, JSX is just HTML, but we're writing it in JavaScript files instead of dedicated HTML files. Our components will be returning JSX code, which will define what the component actually looks like (since HTML is how we render stuff to the page)

**See slides for more info**

### Components

Components are reusable blocks we can use to build our app. One way we can start building applications is to imagine them split up into modular pieces which in turn are composed of smaller pieces. Components are those pieces we will be using to make our React apps. Most of the workshop is focused on how we create components. 

So how do we create components? They are actually **JavaScript functions** which return a React element--that is, JSX code. That's basically it! For example, the following is a React component that displays a simple greeting
~~~
function Greeting() {
    return (
        <h1>How are you?</h1>
    )
}
~~~
For basic components like this, there's not much to it--we're just returning JSX code--HTML within our JavaScript--and don't really need a component to do that. But of course there's a **lot** more we can do with components, which we'll learn about shortly. 

**See slides for more info**

### TODO:

See `HelloWorld.js` for instructions on how to proceed