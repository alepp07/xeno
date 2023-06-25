const Message = ({ content, author, timestamp }) => {
  return (
    <div
      style={{
        backgroundColor: author === "you" ? "#1C1A1D" : "#9869ED",
        borderRadius:
          author === "you" ? "30px 30px 0 30px" : "30px 30px 30px 0",
        padding: "20px",
        marginLeft: author === "you" ? "auto" : "0",
        marginBottom: "30px",
        width: "90%",
        maxWidth: "600px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "Space Grotesk",
            fontWeight: "700",
            fontSize: "12px",
          }}
        >
          @{author.charAt(0).toUpperCase() + author.slice(1)}
        </span>
        <span
          style={{
            fontFamily: "Space Grotesk",
            fontWeight: "300",
            fontSize: "12px",
          }}
        >
          {timestamp.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
      <div
        style={{
          fontFamily: "Poppins",
          fontWeight: "400",
          fontSize: "14px",
          paddingTop: "12px",
        }}
      >
        {content}
      </div>
    </div>
  );
};

export default Message;
