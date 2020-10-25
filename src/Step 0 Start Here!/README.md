# Step 0 - Start Here!

### Learning Points:
- What are we coding in
- What files we're working with
- Changing our first React component

Welcome to the first step of this workshop! Before we dive into making our own components and learning the features of React we have at our disposal, let's get acclimated to our coding environment. This section is a bit longer than others to make sure we're comfortable before getting started.

StackBlitz is an in-browser IDE (integrated development environment) powered by Visual Studio Code (a desktop IDE made by Microsoft). It lets us code and test our apps without having to install any software! (Eventually, though, we would recommend using a desktop IDE as they are more powerful). It keeps running our app while building it, so changes we make to the code will be shown in real-time in the panel on the right!

Now let's take a brief tour of the files we're working with here. If some of these concepts don't make sense yet, worry! We'll go over them in more depth throughout the workshop.

* `index.js`: This is the entry point of our app. In it, we call the `ReactDOM.render`, which we imported from one of the React code libraries. We tell it to render the `App` component in the `div` element with `id='root'` in our `index.html` file above. **All our other code goes in `App.js`, so we don't have to touch this file at all!**
    * Note: you will rarely if ever need to write React code like this. Usually it is auto-generated when you create new React apps
* `style.css`: This is a global stylesheet for your app. Since you import it into `App.js`, any styles you add here will be applied to HTML elements in all our components. So if you want all `<h1>` elements to be purple in your app, add the following code to this file:
```
    h1 {
       color: purple; 
    }
```
* `App.js`: Since we told React to render our `App` component in `index.js`, the `App` component in this file is what our application will show. Therefore, to make changes to what our app looks like, we should edit this file and the components we will put in this file.

So let's make a change to our `App.js` file to see it in our app! 

1. In `App.js`, change the text "Hello Oasis" to "Hello YOURNAME", replacing YOURNAME with, well, you know. 
2. See it update on the right!
3. After the second `<p>` tag, add another `<p>` tag that says whatever you want!
4. Let's get a bit crazy here...we're going to change some styles on this page. Go to style.css and change the color of `h1` tags from black to your favorite color. A list of all built-in colors is linked in the file.
5. As much as time allows, play around adding HTML elements and CSS styles