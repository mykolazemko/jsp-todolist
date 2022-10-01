import { useDispatch, useSelector } from "react-redux";
import { sendMessage, likeMessage, toggleLikeMessage } from "../../../Redux/actions/chatAction";
import smile from "../../../Assets/img/smile.png";
import thumbUp from "../../../Assets/img/like.png";
import heart from "../../../Assets/img/heart.png";
import "../chat.scss";

export const Message = ({ messages }) => {
  const dispatch = useDispatch();

  const like = (id, reaction) => {
    dispatch(likeMessage({ id, reaction }));
  };

  const toggleLike = (id, reaction) => {
    dispatch(toggleLikeMessage({ id, reaction }));
  };

  const myImageMap = {
    smile: smile,
    thumbUp: thumbUp,
    heart: heart,
  };

  return (
    <>
      {messages.map((m) => {
        return (
          <div key={m.id} className={`message ${m.user === "me" ? "me" : "you"} `}>
            <p className="msg-time">{m.time}</p>
            <p className="msg-text">{m.text}</p>
            <span className="msg-status">
              <span onClick={(e) => toggleLike(m.id, e.target.alt)}>
                {m.like ? (
                <img className="emoji" src={myImageMap[m.reaction]} />
              ) : (
                <span role="img" className={`msg-like`}>
                  {" "}
                  &#10084;
                </span>
              )}
              </span>
              
              <span className="smile-selector">
                <img className="emoji" src={heart} alt="heart" onClick={(e) => like(m.id, e.target.alt)} />
                <img className="emoji" src={smile} alt="smile" onClick={(e) => like(m.id, e.target.alt)} />
                <img className="emoji" src={thumbUp} alt="thumbUp" onClick={(e) => like(m.id, e.target.alt)} />
              </span>
            </span>
          </div>
        );
      })}
    </>
  );
};
