const MessageLoader = ({ className }) => {
  return (
    <div className={className}>
      <div className="message-loader-animation">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default MessageLoader;
