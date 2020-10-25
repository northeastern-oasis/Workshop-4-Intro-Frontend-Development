# Step 5 - The Essential TODO

We can't call this a true introduction to a new web framework without making the quintessential project: a to-do app!

In this folder, you will be implementing a simple to-do tracker that has the following features and file structure:

### Files:

- TodoList.js
- TodoItem.js

### Features:

#### TodoList.js:
- A component called TodoList (of course)
- One value in this component's state-"todos"
    - This will be an array that holds a list of strings which represent todo items
- A function, addTodo(), which displays a `prompt` to add a new todo value
    - Update the state with setTodos(todos.concat(NEWVALUE)) (don't use .push if you're familiar with it, as this mutates state)
- Renders a list of TodoItem which take in their todo value as a prop

#### TodoItem.js
- A component called TodoItem (of course)
- No state, but accepts props (prop value name is "text")
- Renders `props.text` with any fancy styling you want to add


**Good luck, and ask for help if you need it!**