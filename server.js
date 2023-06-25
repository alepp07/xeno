const express = require("express");
const app = express();
const http = require("http");

const { getRandomFallback, findMatchingQuestion } = require("./helpers.js");
const {
  conversations,
  softFallbacks,
  hardFallbacks,
} = require("./utterances-responses.json");

app.use(express.static("public"));

const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // for local development
    methods: ["GET", "POST"],
  },
});

io.on("connection", function (socket) {
  console.log(`connect ${socket.id}`);

  socket.on("question", function (message) {
    if (message) {
      const matchingQA = findMatchingQuestion(message, conversations);
      console.log("matchingQA", matchingQA);
      if (matchingQA) {
        socket.emit("response", matchingQA.answer);
      } else {
        const fallbackMessage = getRandomFallback(softFallbacks);
        socket.emit("response", fallbackMessage);
      }
    } else {
      const fallbackMessage = getRandomFallback(softFallbacks);
      socket.emit("response", fallbackMessage);
    }

    console.log("message: " + message + " from " + socket.id);

    socket.on("disconnect", (reason) => {
      console.log(`disconnect ${socket.id} due to ${reason}`);
    });
  });
});

const port = process.env.PORT || 5000;
server.listen(port, function () {
  console.log("Xeno started on port " + port);
});
