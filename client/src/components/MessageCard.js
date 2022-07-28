import { AuthContext } from "./../context/auth.context";
import { useContext } from "react";


function MessageCard({ message }) {

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);


    // console.log('檢查 user ', { user })

    // console.log('檢查message', { message })


    return (
        <div>

            {user._id === message.userSend._id && (
                <div className="sent-by">

                <div  className="sent-by-left">
                    <h3> {message.aText}</h3>
                </div>
                <div className="sent-by-right">

                    <p>sent by&nbsp;&nbsp;

                        <a href={message.userSend._id}>
                            <img src={message.userSend.url} style={{ borderRadius: '50%',  height: '4vw', width: '4vw', objectFit: 'cover' }} />
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

                            {/* <a href={message.userSend._id}>{message.userSend.name.slice(0, 1).toUpperCase() + message.userSend.name.slice(1).toLowerCase()}</a> */}
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

