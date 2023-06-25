import XenoLogo from "../assets/xeno logo.png";
import XenoText from "../assets/xeno text.png";

const ChatHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        top: "-15px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#9869ED",
          borderRadius: "50%",
          width: "72px",
          height: "72px",
          padding: "10px",
          position: "relative",
          bottom: "-36px",
        }}
      >
        <img src={XenoLogo} alt="xeno logo" style={{ width: "100%" }} />
      </div>
      <div
        style={{
          width: "100%",
          background: "#1C1A1D",
          borderRadius: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: "46px",
        }}
      >
        <img src={XenoText} alt="xeno text" style={{ height: "16px" }} />
        <p
          style={{
            marginTop: "5px",
            fontSize: "14px",
            fontFamily: "Space Grotesk",
            fontWeight: "300",
          }}
        >
          Deggendorf Institute of Technology’s Bot{" "}
        </p>
      </div>
    </div>
  );
};

export default ChatHeader;
