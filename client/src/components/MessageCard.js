import { AuthContext } from "./../context/auth.context";
import { useContext } from "react";


function MessageCard({ message }) {

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);


    console.log('檢查 user ', { user })

    console.log('檢查message', { message })


    return (
        <div>

            {user._id === message.userSend._id && (
                <p> {message.aText}&nbsp;sent by:&nbsp;<a href={message.userSend._id}>{message.userSend.name.slice(0, 1).toUpperCase()+ message.userSend.name.slice(1).toLowerCase()}</a></p>
                
            )}

            {user._id === message.userRecieve._id && (
                <p> {message.aText}&nbsp;sent by:&nbsp;<a href={message.userSend._id}>{message.userSend.name.slice(0, 1).toUpperCase()+ message.userSend.name.slice(1).toLowerCase()}</a></p>
            )}

        </div>
    );
}

export default MessageCard;


// const messageSchema = new Schema({
//     aText: String,
//     userSend: { type: Schema.Types.ObjectId, ref: 'User' },
//     userRecieve: { type: Schema.Types.ObjectId, ref: 'User' }
// });
