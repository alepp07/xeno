import { useState } from "react";
import Send from "../assets/send.png";

const ChatInput = ({ sendMessage, waitingForResponse }) => {
  const [message, setMessage] = useState("");

  const onMessageSubmit = (e) => {
    if (message.trim() === "") return;
    e.preventDefault();
    sendMessage(message.trim());
    setMessage("");
  };

  return (
    <div
      style={{
        height: "64px",
        background: "#1E1D1F",
        borderRadius: "150px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "4px solid #1E1D1F",
        width: "100%",
        position: "relative",
      }}
    >
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        autoFocus
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onMessageSubmit(e);
          }
        }}
        style={{
          backgroundColor: "transparent",
          border: "none",
          fontFamily: "Space Grotesk",
          fontWeight: "500",
          fontSize: "15px",
          paddingLeft: "25px",
          width: "100%",
          height: "100%",
          borderRadius: "150px",
          color: "white",
        }}
        disabled={waitingForResponse}
      />
      <button
        onClick={(e) => onMessageSubmit(e)}
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          right: "0px",
          bottom: "0px",
          backgroundColor: "#3A393C",
          color: "#3A393",
          height: "56px",
          width: "56px",
          borderRadius: "50%",
          border: "none",
          padding: "15px",
        }}
        disabled={waitingForResponse}
      >
        <img
          src={Send}
          alt="send"
          style={{
            width: "100%",
            marginLeft: "5px",
          }}
        />
      </button>
    </div>
  );
};

export default ChatInput;
