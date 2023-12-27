import { useState, useMemo } from "react";
import PropTypes from "prop-types";

const Message = ({ socket, name, room }) => {
  const [msg, setMsg] = useState("");
  const [msgList, setMsgList] = useState([]);
  // const msgRef = useRef();

  const triggerMsg = async () => {
    if (msg !== "") {
      const metaData = {
        room: room,
        author: name,
        message: msg,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send-msg", metaData);
    }
  };

  // useEffect(() => {
  //   msgRef.current = (data) => {
  //     setMsgList((prev) => [...prev, data]);
  //   };

  //   socket.on("onreceive-msg", msgRef.current);

  //   return () => {
  //     socket.off("onreceive-msg", msgRef.current);
  //   };
  // }, [socket]);

  useMemo(() => {
    socket.on("onreceive-msg", (data) => {
      setMsgList((prev) => [...prev, data]);
    });
  }, [socket]);

  return (
    <div>
      <div className="header">
        <h3>Live Chat Section</h3>
      </div>
      <div className="body">
        {msgList.map((msg) => {
          return <h1 key={msg.author}>{msg.message}</h1>;
        })}
      </div>
      <div className="footer">
        <input
          type="text"
          placeholder="You mean?"
          onChange={(event) => setMsg(event.target.value)}
        />
        <button onClick={triggerMsg}>&#9658;</button>
      </div>
    </div>
  );
};

Message.propTypes = {
  socket: PropTypes.object,
  name: PropTypes.string,
  room: PropTypes.string,
};

export default Message;
