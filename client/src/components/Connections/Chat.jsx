import { io } from "socket.io-client";
import { useState } from "react";
import Message from "./Message";

const socket = io("http://localhost:8080"); //io.connect(host) can also be used
console.log(socket);

const Chat = () => {
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");

  const handleRoom = (event) => {
    event.preventDefault();
    console.log(name);
    socket.emit("join-room", room);
  };
  return (
    <div>
      <form onSubmit={handleRoom}>
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="RoomID"
          onChange={(event) => setRoom(event.target.value)}
        />
        <button type="submit">Join Room</button>
      </form>
      {/*There wont be any http request while doing these socket things thats the beauty*/}
      <Message socket={socket} name={name} room={room} />
    </div>
  );
};

export default Chat;
