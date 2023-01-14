import Express from "express";
import connection from "./database/db.js";
import cors from "cors";

const app = Express();

app.use(cors());
connection();


app.listen(process.env.SERVER_PORT, () => {
    console.log("Server started on port 8000");
})