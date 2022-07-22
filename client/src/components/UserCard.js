import { useState } from "react";
import { Link } from "react-router-dom";

function UserCard({ user }) {
    //注意解構obj的方式
<<<<<<< HEAD
    const { name, birthday, _id } = user
=======
    const { email, name, birthday, gender, postCode, _id,url } = user
>>>>>>> dev

    const [age, setAge] = useState(0)

    //換算年紀的函數
    const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)


    useState(() => {
        //使用函數
        setAge(getAge(birthday.toString()))
    }, [birthday])


    return (
        <div>

            {/* 照片跟名字跟年紀 */}
            <Link to={`/users/${_id}`}>
                <img src={url} />

                <h3>{name},{age}</h3>
            </Link>


        </div>
    );
}

export default UserCard;