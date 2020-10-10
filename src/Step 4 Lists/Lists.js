import React from 'react';
import { useState } from 'react';

// Here we just want to demonstrate how to render a list of items from your state!
function Lists() {
  const [items, setItems] = useState([1, 2, 3, 4, 5])

  return (
    <div>
    {
      items.map(item => <h1>{item}</h1>)
    }
    </div>
  )
}