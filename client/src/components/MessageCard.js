function MessageCard({ aText, userSend, user }) {



    return (
        <div>
            <p> {aText}&nbsp;sent by:&nbsp;{userSend}</p>
        </div>
    );
}

export default MessageCard;


// const messageSchema = new Schema({
//     aText: String,
//     userSend: { type: Schema.Types.ObjectId, ref: 'User' },
//     userRecieve: { type: Schema.Types.ObjectId, ref: 'User' }
// });
