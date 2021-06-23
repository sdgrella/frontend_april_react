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

## JG React Day 4 Live

1. Send a POST request to a server

   In the database.js file, write a function for sending a POST request
   The function should take in as an argument the form data that you want to submit
   In the Form.js file, when the user submits the data, wait for a successful response
   before adding the data to the state

2. Refactor Your App.js file

   Create a new component called Home
   Move everything from App.js to Home
   Call the Home component in App to make sure it's working

3. Install react-router-dom

   npm install react-router-dom
   skim through quickstart: https://reactrouter.com/web/guides/quick-start

4. Implement BrowserRouter and one Route to Home

   Import BrowserRouter and Route
   Create setup for Browser

   https://reactrouter.com/web/api/BrowserRouter

5. Add one Route for the Home

   Explore more than one way you can write this route
   Try using the List component as a route component -- does it work?

6. Add a second Route for a Success page

   Connect it a new component
   Add a Link on the success page that sends you back to Home
   Talk about the Link component

7. Add a third Route to the router

   Connect it to a new component
   The component should have in its path a variable
   Refactor your code so that when you click on a message,
   it takes you to that page
   Have the page redirect you to the Home page after 3 seconds

8. In this third component, use useLocation

   Create a useEffect that console logs the path any time the location changes
   Maybe need to do the following in this third component
   Create a piece of state that stores an array of object (just hard code them for now)
   Display the objects on the page
   When a user clicks the object, use the Link to change the location
   Console log the location each time the route changes

9. Add a Private Route

   For now, let's just look at the PrivateRoute code
   After we learn Context, we'll implement the PrivateRoute

## JG React Day 5 Live

1. Strategize about how to show the List on the success page

   Refactor the Form and List so that the list is globally available  
   Add a subfolder in the src folder called context
   Add to the context folder and file called AppContext
   Add code to AppContext

2. Use the List component for the success page

   The List component needs to be able to standalone
   Be able to call it next to the Form within the Home component
   Be able to call it by itself on its own page

3. Add a button to the List page that takes you to the Home page

4. Add a button to the success page that takes you to the Form page

   The Form page should be able to stand alone
   Be able to call it next to the List
   Be able to call it by itself on the form page

5. Add a PrivateRoute

   To the global state, add a piece of state for a user
   When the app loads, fetch a user from the server
   Load the user state with the user object from the server
   Make one of your routes PrivateRoute so that the user can only see if "logged in"

The link below is a good explanation (but note it doesn't use Hooks like we are
but the concepts are well explained and relatively easy to see in the code)

<!-- https://medium.com/@whwrd/reacts-context-api-in-5-minutes-8188d9b507fe -->
