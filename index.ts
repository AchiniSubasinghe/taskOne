console.log("Hello via Bun!");

// port config
const port = process.env.PORT || 3000;

// express config
const express = require("express");
const app = express();

// middleware to read form data
app.use(express.urlencoded({ extended: true }));

// variables
const name = "Achini Subasinghe";
const batch = 24.3;

let userName = "";

// Home Page
app.get("/", (req: any, res: any) => {
    res.send(`
    <html>
    <head>
        <title>Greeting App</title>
        <style>
            body{
                font-family: Arial, sans-serif;
                background:#0f172a;
                color:white;
                display:flex;
                justify-content:center;
                align-items:center;
                height:100vh;
                margin:0;
            }

            .card{
                background:#1e293b;
                padding:40px;
                border-radius:10px;
                text-align:center;
                width:300px;
                box-shadow:0 0 15px rgba(0,0,0,0.3);
            }

            input{
                width:100%;
                padding:10px;
                margin-top:10px;
                border-radius:5px;
                border:none;
                outline:none;
            }

            button{
                margin-top:15px;
                padding:10px 20px;
                background:#3b82f6;
                border:none;
                color:white;
                border-radius:5px;
                cursor:pointer;
                width:100%;
            }

            button:hover{
                background:#2563eb;
            }
        </style>
    </head>

    <body>
        <div class="card">
            <h1>Welcome </h1>
            <p>Enter your name to continue</p>

            <form action="/submit" method="POST">
                <input type="text" name="username" placeholder="Enter your name" required/>
                <button type="submit">Get Greeting</button>
            </form>
        </div>
    </body>
    </html>
    `);
});


// POST request to receive name
app.post("/submit", (req: any, res: any) => {
    userName = req.body.username;
    res.redirect("/hello");
});


// Dashboard / Greeting Page
app.get("/hello", (req: any, res: any) => {
    res.send(`
    <html>
    <head>
        <title>Dashboard</title>
        <style>
            body{
                font-family: Arial, sans-serif;
                background:#0f172a;
                color:white;
                display:flex;
                justify-content:center;
                align-items:center;
                height:100vh;
                margin:0;
            }

            .card{
                background:#1e293b;
                padding:40px;
                border-radius:10px;
                text-align:center;
                width:320px;
                box-shadow:0 0 15px rgba(0,0,0,0.3);
            }

            a{
                display:inline-block;
                margin-top:20px;
                padding:10px 20px;
                background:#3b82f6;
                color:white;
                text-decoration:none;
                border-radius:5px;
            }

            a:hover{
                background:#2563eb;
            }
        </style>
    </head>

    <body>
        <div class="card">
            <h1>Hello, ${userName}! </h1>
            <p>Welcome to your dashboard</p>

            <a href="/">Go Back</a>
        </div>
    </body>
    </html>
    `);
});


// Example API
app.get('/api/Hi', (req: any, res: any) => {
    res.json({ message: "Hello" });
});


// Start server
app.listen(port, () => {
    console.log(`My name is ${name}, I am in batch ${batch}.`);
});