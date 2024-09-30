import React from 'react'
import "./app.css"

export default function VanillaTodoPage() {
    return (

        <html lang="en">
            <head>
                <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Vanilla JavaScript To-Do List</title>
                        <style>
                            body {
                                font - family: Arial, sans-serif;
                            margin: 50px;
    }
                            input {
                                padding: 10px;
                            font-size: 16px;
    }
                            button {
                                padding: 10px;
                            font-size: 16px;
                            margin-left: 5px;
    }
                            ul {
                                list - style - type: none;
                            padding: 0;
    }
                            li {
                                padding: 10px;
                            font-size: 18px;
                            background-color: #f4f4f4;
                            margin-bottom: 10px;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
    }
                            li.completed {
                                text - decoration: line-through;
    }
                            li button {
                                background - color: red;
                            color: white;
                            border: none;
                            padding: 5px 10px;
                            cursor: pointer;
    }
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
