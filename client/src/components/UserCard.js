import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WebFont from 'webfontloader';
import locationIcon from './../images/location.png'


function UserCard({ user }) {
    //字體設定
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Quicksand', 'Cantarell']
            }
        });
    }, []);

    //注意解構obj的方式
    const { email, name, birthday, gender, _id, url, area } = user

    const [age, setAge] = useState(0)

    //換算年紀的函數
    const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)


    useState(() => {
        //使用函數
        setAge(getAge(birthday.toString()))
    }, [birthday])


    return (
        <div >

            {/* 照片跟名字跟年紀 */}
            <Link to={`/users/${_id}`} className="UserCard-link" >
                <div className="UserCard">
                    <img src={url} className="UserCard-img" />
                    <div style={{ paddingLeft:'1vw',marginTop:'-1vh' }}>
                        <h3>{name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase()},&nbsp;{age}y</h3>
                        <div style={{
                            display: 'flex',
                            alignItem: 'center',
                            // justifyContent: 'center',
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: '-5vh'
                        }}>


                            <img src={locationIcon} style={{ height: '2vh', paddingRight: '0.8vw' }} />

                            <h4>{area}</h4>
                        </div>
                    </div>
                </div>
            </Link >


        </div >
    );
}

export default UserCard;