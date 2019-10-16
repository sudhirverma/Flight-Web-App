import express from "express";
import path from 'path';
import { Request, Response } from "express";

// Create Express server
const app = express();

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));

/**
 * Primary app routes.
 */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/../views/index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname+'/../views/about.html'));
});

export default app;