import Express from "express";
import connection from "./database/db.js";

const app = Express();

connection();


app.listen(process.env.SERVER_PORT, () => {
    console.log("Server started on port 8000");
})