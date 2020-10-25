# Step 4: React Props

### Learning Points:

- What are props
- Using props

Props are another huge feature of React, but they're easy to wrap your head around. Essentially, they allow us to pass information into our components which they can then display or work with!

### Props

As mentioned, props allow us to pass extra information into our components. Unlike state, we don't need to explicitly "create" props for our component. Instead, components at a higher level that our rendering our child component will pass props into the child. For example, let's say we have a component called `Greeter` that greets somebody. But instead of just greeting the same person every time, we want it to greet somebody new each time! To accomplish this, it will accept a prop called "who" (which we just made up because it works for this purpose) and we'll pass in a prop with **the same name** every time we use it.

### Using Props

Here is how this looks:

```
function Greeter(props) {
    return (
        <h1>Hello {props.who}
    )
}

function App() {
    return (
        <Greeter who="Paws" />
    )
}
```
So notice how Greeter showed the value "props.who" and when we display the component we pass in this value. This is the general syntax for props--go try it out!

### Todo:

See `NameTag.js` for next steps!