import express, {Express} from 'express';
import cors from "cors";
import mongoose from 'mongoose';
import todo from "./server/routes/todo";

const mongoUrl = 'mongodb://localhost:27017/MyTodo';

const connectWithRetry = function () {
  try {
    return mongoose.connect(mongoUrl);
  } catch (e) {
    console.error("Failed to connect to mongo on startup - retrying in 2 sec", e);
    setTimeout(connectWithRetry, 1000);
  }
};
connectWithRetry();

const app: Express = express();
const port: number = 9656;

app.use(cors());
app.use(todo);

app.listen(port, () => console.log("listening on port", port));
