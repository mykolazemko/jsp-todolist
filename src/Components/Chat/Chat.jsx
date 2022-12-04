import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage, likeMessage } from "../../Redux/actions/chatAction";
import { Message } from "./Message/Message";
import "./chat.scss";

const Chat = () => {
  const chat = useSelector((state) => state.messages);
  const dispatch = useDispatch();

  useEffect(() => console.log(chat.messages), [chat.messages]);
  const [user, setUser] = useState();
  const [userInputOne, setUserInputOne] = useState("");
  const [userInputTwo, setUserInputTwo] = useState("");

  const date = new Date();
  const now = `${date.getHours()}:${date.getMinutes()}`;

  const ref = useRef(null);

  const onEnterPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      // e.preventDefault();
      send(e.target.id); // this won't be triggered
    }
  };

  const handleInputChange = (e) => {
    e.target.id === "you" ? setUserInputOne(e.target.value) : setUserInputTwo(e.target.value);
    console.log(e.target.id);
    setUser(e.target.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    send(user);
    setUser();
  };  

  const send = (user) => {
    console.log(user);
    dispatch(
      sendMessage({
        id: date.getTime(),
        time: now,
        user: user,
        text: user === "you" ? userInputOne : userInputTwo,
        like: false,
        reaction: "",
      })
    );
    user === "you" ? setUserInputOne("") : setUserInputTwo("");
    // window.HTMLElement.prototype.scrollIntoView = () => {}
    // ref.current.scrollintoview({behavior: "smooth"})
  };

  return (
    <div className="chcat-container">
      <div className="messages-box">
        <Message messages={chat.messages} />
        {/* {chat.messages.map((m) => {
          return (
            <div key={m.id} className={`message ${m.user === "me" ? "me" : "you"} `}>
              <p className="msg-time">{m.time}</p>
              <p className="msg-text">{m.text}</p>
              <span className={`msg-like ${m.like && "like"}`}
              onClick={(e)=>like(m.id)}
              >&#10084;</span>
            </div>
          );
        })} */}
      </div>
      <div className="user-input">
        <form onSubmit={handleSubmit}>
          <textarea name="1" id="you" cols="30" rows="10" value={userInputOne} onChange={(e) => handleInputChange(e)} ></textarea>
          <input type="submit" value="Send"></input>
        </form>
      </div>
      <div className="user-input">
        <form onSubmit={handleSubmit}>
          <textarea name="2" id="me" cols="30" rows="10" value={userInputTwo} onChange={(e) => handleInputChange(e)} onKeyDown={onEnterPress}></textarea>
          <input type="submit" value="Send"></input>
        </form>
      </div>
    </div>
  );
};
export default Chat;
