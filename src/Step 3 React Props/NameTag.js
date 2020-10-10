import React from 'react';

function Adder(props) {

  return (
    <p>{props.number1 + props.number2}</p>
  )
}

function DisplayAdder() {
  return (
    <Adder number1={3} number2={10} />
  )
}

// TODO: 
// 1. Create a component NameTag below that accepts props
// 2. It should accept two props: name and bio
// 3. It should then display a fancy card with both of these values