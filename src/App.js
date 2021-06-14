import React, { useEffect, useState } from "react";
import "./App.css";
import Title from "./components/Title.js";
import Form from "./components/Form.js";
import List from "./components/List.js";

// TO START, SOME THOUGHTS CONNECTING REACT TO VANILLA JS:
// It's important to build upon what you learned in vanilla JS to help understand React
// Thinking back to when you learned about functions and modules . . .

// Functional components are just like functions + modules in vanilla JS
// // You have to define the function before you can call it (that's what each .js
// // functional component file is, a function definition that's exported)
// // You can save the function definition to a variable
// // You can have parameters in your function definitions
// // You can have an explicit return value
// // You can export a function defintion from a file, import it, and call it in another file
// // You can call the function as many times as you want (that's what <List /> is below, calling
// // the List functional component)
// Class components are just like classes + modules in vanilla JS, but that's not our focus for now

// THOUGHTS ON SOME DIFFERENCES ABOUT FUNCTIONAL COMPONENTS AND FUNCTIONS IN VANILLA:
// In React, you export the function definition from its file (like you saw with modules in vanilla JS),
// but in vanilla JS we didn't use modules much yet in practice
// In React, you use React methods to help manage state and lifecycle of your function (component),
// whereas in vanillaJS, we don't really manage a state in function definitions like this
// // Remember, React methods (e.g., useState, useEffect, etc.) are defined inside the React
// //source code, so you've probably never seen the definitions for those; we just call them and
// // don't need to know their code, just need to know their behavior
// In React, you see function definitions (e.g., handleClick, handleChange, etc.) inside the
// functional component definition, whereas in functions in vanilla JS that's not as common to define
// functions inside other function definitions
// In React, you're writing JSX in functional components, whereas in vanilla JS it's just vanilla JS
// In React, your functional component definitions usually have just one parameter (if any), and
// it's called props; props is an object containing all the arguments passed into the functional component
// when it's called; in vanilla JS, you oftentimes see multiple parameters, named whatever
// In React, you'll import third-party packages and rely upon them heavily, whereas in vanilla JS
// we didn't so much do that very much
// In React, we don't use getElementById and other DOM functions -- why?
// In React, you see a lot more && and || (e.g., {user || list && <List />}) -- what?!

// # In-Class Coding Using HOOKS . . .
// 1. Create a parent component that has a piece of state for the title and uses useEffect to set the title on page load
// 2. Create a child component for a title and pass to it as props the title from the parent's state (passing state down)
// 3. Create another child component for a form that has one input and a button; pass down as props to this child the
// setList method from the parent (passing a setState function down as props in order to lift state up from the child
// to the parent -- Google search "React how to lift state up" or something like that)
// // -- When you lift state up, in the child component, you call a function that was passed down as a prop from the parent;
// // although that callback function is called within the child, it's code is actually run in the scope of the parent
// 4. When user clicks the button, update the state and console log it
// 5. Create a third child component for listing the items stored in the list and pass to it as props the list from the parent's state
// 6. Show the list on the page and have it update automatically each time a new date is added

// Things to think about . . .
// How would you store in the state a form entry with more than one input?
// How would you delete an item from the list?
// How would you use state to conditionally render the style (i.e., the value for className)?
// How would you map through an array and call a component each time with a different prop?
// How can you use life cycle methods with fetch to load data to the page from an API?
// How can you use state to hide and show a loader?
// How can you use state to enable and disable a button?
// What is react-router-dom and how can you use it?
// How can you create a private Route to control which types of users see which page?
// How would you use the Link component from react-router-dom in general and to pass state?
// How can you use useLocation to dynamically load page content (e.g., a user's profile)?
// How can you make your app have a global state so that you don't have to pass props so much?

function App() {
  const [formTitle, setFormTitle] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    setFormTitle("frontend web at itc");
  }, []);

  useEffect(() => {
    console.log(list);

    // Note 1:
    // This is a technique to use when developing
    // When you want to see if a piece of state is updating or if you want to see its values after update
    // useEffect with that piece of state in the dependency array will console log the piece of state
    // each time that piece of state updates

    // Note 2:
    // You can also use this technique before setting if / else conditions inside the use effect
    // For instance, if each time a piece of state is updated, first you want to check if it has a value or if
    // its value is equal to something specific; console logging the value in useEffect will help you
    // better understand how things are working so that you can write good conditionals

    // Note 3:
    // Don't call a setState function inside use effect for a piece of state that's
    // in your dependency array -- you'll get an infinite loop! (e.g., don't call setList inside here)
  }, [list]);

  return (
    <div className="page-wrapper">
      {/* Put formTitle in curly braces because in JSX that's how you indicate that it's a JS variable instead of text */}
      <Title title={formTitle} />
      <div className="section-one">
        {/* Calling a component is like calling a function */}
        {/* Props are like parameters for the function */}
        {/* For each prop, the name on the left of the = is what it's known as inside the component */}
        {/* and the name on the right side of the = is the value from the parent that you're assigning to it */}
        <Form setList={setList} />
        <List list={list} />
      </div>
    </div>
  );
}

export default App;
