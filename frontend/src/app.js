import { useEffect, useState } from "react";
import "./app.css";
import BlurEffect from "./assets/blur effect.png";
import IntroPage from "./pages/intro";
import ChatPage from "./pages/chat";

import { io } from "socket.io-client";

const App = () => {
  const [appState, setAppState] = useState({
    route: "intro",
  });

  const socket = io(process.env.REACT_APP_API_URL || "");

  const onRouteChange = (route) => {
    setAppState({ route: route });
  };

  useEffect(() => {
    socket.on("connection", () => {
      console.log(socket.connected);
    });

    socket.on("disconnect", () => {
      console.log(socket.connected);
    });

    return () => {
      socket.off("connection");
      socket.off("disconnect");
    };
  }, [socket]);

  return (
    <div className="app">
      <div className="effects">
        <img
          src={BlurEffect}
          alt="blur effects"
          style={{
            top: 0,
            left: 0,
            rotate: "180deg",
          }}
        />
        <img src={BlurEffect} alt="blur effects" />
      </div>
      {appState.route === "chat" ? (
        <ChatPage socket={socket} />
      ) : (
        <IntroPage onRouteChange={onRouteChange} />
      )}
    </div>
  );
};

export default App;
