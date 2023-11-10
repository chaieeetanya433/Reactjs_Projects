<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Todo App</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 2em;
        }

        h1 {
            color: #61dafb;
        }

        h2 {
            color: #333;
        }

        h3 {
            color: #333;
        }

        ul {
            list-style-type: none;
            padding: 0;
        }

        li {
            margin-bottom: 1em;
        }

        code {
            background-color: #f5f5f5;
            padding: 0.2em 0.4em;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-family: monospace;
        }
    </style>
</head>

<body>

    <h1>React Todo App</h1>

    <h2>Introduction</h2>
    <p>
        This is a simple and intuitive Todo application built with React, leveraging the power of the Context API for
        efficient state management. The app empowers users to seamlessly manage tasks, providing functionalities like
        adding, editing, and deleting tasks, along with the ability to mark them as completed. The state persistence in
        local storage ensures a seamless user experience even after page refreshes.
    </p>

    <h2>Features</h2>
    <ul>
        <li><strong>Add Todo:</strong> Easily add new tasks through the input field. Click "Add" or press Enter to
            quickly insert a new todo.</li>
        <li><strong>Edit Todo:</strong> Effortlessly edit tasks by clicking on the pencil icon. Confirm changes by
            pressing the checkmark icon.</li>
        <li><strong>Delete Todo:</strong> Remove unwanted tasks with a simple click on the delete icon.</li>
        <li><strong>Toggle Completion:</strong> Use the checkbox to mark a task as completed or revert it to an
            incomplete state.</li>
    </ul>

    <h2>Tech Stack</h2>
    <ul>
        <li><strong>React:</strong> A declarative and efficient JavaScript library for building user interfaces.</li>
        <li><strong>React Context API:</strong> A mechanism for efficiently sharing state between components.</li>
    </ul>

    <h2>Project Structure</h2>
    <ul>
        <li><strong>components:</strong> Contains React components for TodoForm and TodoItem.</li>
        <li><strong>contexts:</strong> Houses the TodoContext and custom hooks for streamlined access to TodoContext.</li>
        <li><strong>App.jsx:</strong> The central application file, rendering TodoForm and mapping through todos to
            present TodoItem components.</li>
    </ul>

    <h2>How to Use</h2>
    <ol>
        <li><strong>Clone the repository:</strong>
            <pre><code>git clone https://github.com/your-username/todo-app.git</code></pre>
        </li>
        <li><strong>Install dependencies:</strong>
            <pre><code>npm install</code></pre>
        </li>
        <li><strong>Run the app:</strong>
            <pre><code>npm start</code></pre>
        </li>
        <li><strong>Open your browser and go to:</strong> <a href="http://localhost:3000" target="_blank">http://localhost:3000</a></li>
    </ol>

    <h2>Contributing</h2>
    <p>
        Contributions are welcome! If you encounter any issues or have ideas for enhancements, feel free to open issues
        or submit pull requests. Bug reports, feature requests, and suggestions are highly appreciated.
    </p>

    <h2>License</h2>
    <p>This project is licensed under the <a href="LICENSE" target="_blank">MIT License</a>.</p>

</body>

</html>
