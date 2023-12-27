const express = require("express");
const cors = require("cors");
const socket = require("socket.io");

const app = express();
app.use(express.json());
app.use(cors());

const server = app.listen(8080, () => console.log("Connected"));

const io = socket(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`user connected: ${socket.id}`);

  socket.on("join-room", (data) => {
    socket.join(data);
    console.log(`user joined: ${socket.id} to room ${data}`);
  });

  socket.on("send-msg", (data) => {
    socket.to(data.room).emit("onreceive-msg", data);
  });

  socket.on("disconnect", () => {
    console.log(`user disconnected: ${socket.id}`);
  });
});
