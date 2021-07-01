import { useContext } from "react";
import { SocketContext } from "../../contexts/Servercontex";
import "./SideChat.css";
import SendIcon from "@material-ui/icons/Send";
import { Button } from "@material-ui/core";

const SideChat = () => {
  const { message, setMessage, sendMessage, chat, me, scrollRef } =
    useContext(SocketContext);

  return (
    <div className="center">
      <div className="chat" ref={scrollRef}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Chat Box</h1>
        </div>
        <div className="messages" id="chat">
          {chat.map((payload, index) => {
            if (payload.id === me) {
              return <div className="message parker">{payload.message}</div>;
            } else {
              return <div className="message stark">{payload.message}</div>;
            }
          })}
        </div>
        <div className="input" style={{ width: "100%" }}>
          <form
            onSubmit={sendMessage}
            style={{ display: "flex", width: "100%" }}
          >
            <input
              style={{ width: "100%", fontSize: "12px" }}
              placeholder="Type your message here!"
              type="text"
              name="message"
              value={message}
              required
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button type="submit" startIcon={<SendIcon />}></Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SideChat;
