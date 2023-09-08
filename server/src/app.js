import express from "express";
import path from "path";
import logger from "morgan";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import "./boot.js";
import configuration from "./config.js";
import addMiddlewares from "./middlewares/addMiddlewares.js";
import rootRouter from "./routes/rootRouter.js";
import { Server } from "socket.io"
import { createServer } from "http"
import Message  from "../src/models/Message.js"


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
import hbsMiddleware from "express-handlebars";
app.set("views", path.join(__dirname, "../views"));
app.engine(
  "hbs",
  hbsMiddleware({
    defaultLayout: "default",
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
addMiddlewares(app);
app.use(rootRouter);

const server = createServer(app);

const io = new Server(server)

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", async (userId, data) => {
    const {chatId, text , time } = data
    await Message.query().insertAndFetch({ text, time, userId, chatId })
    socket.to(data.chatId).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(configuration.web.port, configuration.web.host, () => {
  console.log(`Server is listening on port ${configuration.web.port}`);
});


export default app;
