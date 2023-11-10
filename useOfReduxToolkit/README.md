### implementation of Redux Toolkit step by step:

# 1. App.jsx

->This is the main entry point of your React application.
->It renders the AddTodo and Todos components.
->It doesn't directly interact with Redux; its role is mainly to structure the layout of your app.

# 2. main.jsx:

->Sets up the Redux store using the Provider from react-redux.
->Wraps the App component with the Provider to make the Redux store accessible to all components in the app.

# 3. todoSlice.js:

->Defines the initial state for the todos and creates a slice using createSlice from Redux Toolkit.
->Provides two reducers: addTodo for adding todos and removeTodo for removing todos.
->Export the actions and reducer for use in other parts of the application.

# 4. store.js:

->Configures the Redux store using configureStore from Redux Toolkit.
->Passes the todoReducer as the reducer to the store.

# 5. AddTodo.jsx:

->Manages local state for the input field and uses useState hook.
->Uses useDispatch to get the dispatch function from Redux.
->Dispatches the addTodo action when the form is submitted.

# 6. Todos.jsx:

->Uses useSelector to get the todos from the Redux store.
->Uses useDispatch to get the dispatch function from Redux.
->Maps through todos and renders each to
do with a remove button.


<h3>Summary of Workflow:</h3>

<h6>Setting up the Redux Store:</h6>
Create a store using configureStore and provide the root reducer (todoRe
ducer in this case).

<h6>Creating a Slice:</h6>
Use createSlice to define a slice of the Redux store that includes reducers and initial state.

<h6>Defining Reducers:</h6>
Create reducers (e.g., addTodo, removeTodo) to specify how the state should change in response to actions.

<h6>Connecting Components to Redux:</h6>
Use useSelector to access the state in functional components.
Use useDispatch to dispatch actions.

<h6>Dispatching Actions:</h6>
Dispatch actions from components to trigger state changes.
