import React from 'react'

function VanillaPageLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>Vanilla JavaScript To-Do List</title>
                <style>

                </style>
            </head>
            <body>
                <h1>To-Do List</h1>
                <input type="text" id="todoInput" placeholder="Enter a new to-do">
                    <button id="addBtn">Add</button>
                    <ul id="todoList"></ul>

                    <script src="app.js"></script>
            </body>
        </html>
    )
}

export default VanillaPageLayout
