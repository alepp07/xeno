const Button = ({ onClick, children, ...props }) => {
  return (
    <button
      onClick={() => onClick()}
      style={{
        width: "100%",
        maxWidth: "400px",
        padding: "0 20px",
        height: "60px",
        background: "#9869ED",
        borderRadius: "100px",
        fontFamily: "Space Grotesk",
        fontWeight: "500",
        fontSize: "18px",
        color: "#FFFFFF",
        border: "1px solid #9869ED",
        cursor: "pointer",
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
