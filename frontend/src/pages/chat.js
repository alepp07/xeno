import { useState, useEffect } from "react";
import ChatHeader from "../components/chat-header";
import ChatInput from "../components/chat-input";
import Message from "../components/message";
import MessageLoader from "../components/message-loader";
import "./chat.css";

const ChatPage = ({ socket }) => {
  const [waitingForResponse, setWaitingForResponse] = useState(false);
  const [messages, setMessages] = useState([]);

  const sendMessage = (message) => {
    const newMessage = {
      content: message,
      author: "you",
      timestamp: new Date(),
    };
    let messageArray = [...messages];
    messageArray.unshift(newMessage);
    setMessages(messageArray);
    setWaitingForResponse(true);

    setTimeout(() => {
      socket.emit("question", message);
    }, 1700);
  };

  useEffect(() => {
    socket.on("response", (message) => {
      const newMessage = {
        content: message,
        author: "xeno",
        timestamp: new Date(),
      };
      let messageArray = [...messages];
      messageArray.unshift(newMessage);
      setMessages(messageArray);
      setWaitingForResponse(false);
    });

    return () => {
      socket.off("response");
    };
  });

  useEffect(() => {
    setWaitingForResponse(true);
    setTimeout(() => {
      const newMessage = {
          content:
            "Hello, i am the Internet Technologies Chatbot, how can i help you?",
          author: "xeno",
          timestamp: new Date(),
        },
        messageArray = [];
      messageArray.unshift(newMessage);
      setMessages(messageArray);
      setWaitingForResponse(false);
    }, 1500);
  }, []);

  return (
    <div className="chat-page">
      <ChatHeader />
      <div className="chat-messages">
        {waitingForResponse && <MessageLoader className="message-loader" />}
        {messages.map((message, index) => (
          <Message
            content={message.content}
            key={index}
            author={message.author}
            timestamp={message.timestamp}
          />
        ))}
      </div>
      <ChatInput sendMessage={sendMessage} disabled={waitingForResponse} />
    </div>
  );
};

export default ChatPage;
