import { AuthContext } from "./../context/auth.context";
import { useContext } from "react";


function MessageCard({ message }) {
    const { user } = useContext(AuthContext);

    return (
        <div>
            {user._id === message.userSend._id && (
                <div className="sent-by">
                    <div className="sent-by-left">
                        <h3> {message.aText}</h3>
                    </div>
                    <div className="sent-by-right">
                        <p>sent by&nbsp;&nbsp;
                            <a href={message.userSend._id}>
                                <img src={message.userSend.url} style={{ borderRadius: '50%', height: '4vw', width: '4vw', objectFit: 'cover' }} />
                            </a>
                        </p>
                    </div>
                </div>
            )}

            {user._id === message.userRecieve._id && (
                <div className="sent-by">
                    <div className="sent-by-left">
                        <h3> {message.aText}</h3>
                    </div>
                    <div className="sent-by-right">
                        <p>sent by&nbsp;&nbsp;
                            <a href={message.userSend._id}>
                                <img src={message.userSend.url} style={{ borderRadius: '50%', height: '4vw', width: '4vw', objectFit: 'cover' }} />
                            </a>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MessageCard;

