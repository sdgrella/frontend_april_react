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

## JG React Day 3 Live

1. Build the setup for your loader

   In Form.js, add a piece of state for isLoading with its initial state set to false
   In Form.js, in handleClick, set isLoading to true
   In Form.js, in handleClick, add a setTimeout that wraps everything inside
   In the setTimeout, set isLoading to false
   Create a useEffect that console logs isLoading each time it changes

2. Show the button if isLoading is false

   In Form.js, connect the state isLoading to the button

3. Show a loader if isLoading is true

   Create a component for your loader
   Import the loader into Form.js
   Connect the state to the loader and show it when isLoading is true

4. Build the setup for the Alert

   In App.js, create a piece of state for showAlert and set it to false
   Pass the setShowAlert function down as a prop to the form
   Inside the setTimeout, setShowAlert to true

5. Remove alert

   In Form.js, create a useEffect with showAlert in the dependency array
   In the useEffect, add a setTimeout that changes showAlert to false
   Console.log showAlert each time it changes

6. Show the alert

   Add a component for an alert
   Show it when showAlert is true and hide it when false

7. In App.js, add a useEffect

   Inside the useEffect, write a fetch request that on page load requests data from an API
   Save the results to a piece of state

8. Add a loader that shows the page is loading until the fetch request comes back with data

9. Add to your form a fetch request

   When the user submits the form, send out a fetch request to an API
   Add information from the API to your form submimssion
   Use a loader and an alert as part of the user experience lifecycle

10. If time permits, use local storage to store the form entries

    When the app loads, load from storage the saved entries
