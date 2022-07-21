import { useEffect } from "react";
import { Link } from "react-router-dom";

function UserCard({ email, name, birthday, gender, postCode, _id }) {

    const [age, setAge] = useEffect(0)
    console.log('this is:', birthday)

    // useEffect(() => {

    //     console.log(birthday)

    //     //換算年紀的函數
    //     const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)

    //     //使用函數

    //     setAge(getAge(birthday.toString()))



    // },[])


    //  console.log(getAge(birthday.toString()))   

    //  const ageOfEachAllUsers = allUsers.map(function (user) {
    //      return getAge(user.birthday.toString())

    //  })

    //  console.log(ageOfEachAllUsers)

    return (
        <div>

            {/* 照片跟名字跟年紀 */}
            <Link to={`/users/${_id}`}>
                <h3>{name}</h3>
            </Link>

            <h1>{age}</h1>






        </div>
    );
}

export default UserCard;