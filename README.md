## JG React Day 2 Live

1. Refactor form: from single-input to multi-input form

   In Form.js, add one more input to the JSX in the return statement
   Connect this input to its own event handler
   Make a piece of state for this input and for the previously existing input
   Add a useEffect with these two pieces of state in the dependency array
   Inside the useEffect, setFormData with the pieces of state as the values for keys
   Add a useEffect with formData in the dependency array
   Inside that useEffect, console log formData

2. Refactor list: from listing array of strings to array of objects

   Just need to change List code to handle objects, not strings

3. Add ability to delete item from list

   In Form.js, to each object add an id (no need for an input, just add an id)
   Can use uuid (https://www.npmjs.com/package/uuid)
   In List.js, to each item in the list, add a delete button
   Connect the delete button to a function (all items connect to the same function)
   For each item in the list, change the key's value to the item's id
   For the delete button inside each item, set an attribute equal to the id
   Inside the item's event function, test it by console logging that item's id
   Inside that same function, replace the console log with code that filters the state array to remote the object that has the id of the clicked element

4. Change styles of button based on whether input has value or not

   In Form.js, add a useEffect with a dependency array containing formData
   In that useEffect, write conditional statements that check whether each key in formData has a value or not
   For now, if all have a value, console log "enable", otherwise console log "disable"
   Add a piece of state called isDisabled
   Inside the useEffect with the conditionals, setIsDisabled(false) if form is complete, otherwise setIsEnabled(true)
   In the styles for the button, add the piece of state to the class name
   In the App.css file, add styles for disabled and enabled
   In the html element, add disabled is equal to the piece of state

5. Clear the formData when it's submitted

   In Form.js, to the button's event function, setFormData({}) and set each piece of state to empty string
   To each input, set it's value equal to the corresponding piece of state
