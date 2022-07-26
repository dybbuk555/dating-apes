function MessageCard({message}) {

console.log('檢查message in message card', message)

    return (
        <div>
            {/* <p> {props.message.aText}&nbsp;sent by:&nbsp;{props.message.userSend}</p> */}
            <p> {message.aText}&nbsp;sent by:&nbsp;{message.userSend.name}</p>

        </div>
    );
}

export default MessageCard;


// const messageSchema = new Schema({
//     aText: String,
//     userSend: { type: Schema.Types.ObjectId, ref: 'User' },
//     userRecieve: { type: Schema.Types.ObjectId, ref: 'User' }
// });
