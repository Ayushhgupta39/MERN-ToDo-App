import Express from "express";
import connection from "./database/db.js";
import cors from "cors";
import Routes from "./routes/route.js"
import bodyParser from "body-parser";

const app = Express();

app.use(cors());

connection();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))


app.use('/', Routes);
app.listen(process.env.SERVER_PORT, () => {
    console.log("Server started on port 8000");
})