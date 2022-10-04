import { useState } from "react";
import { Link } from "react-router-dom";
import locationIcon from './../images/location.png'
import MatchPer from "./MatchPer";

function UserCard({ user }) {
    const { name, birthday, _id, url, area } = user
    const [age, setAge] = useState(0)
    const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)

    useState(() => {
        setAge(getAge(birthday))
    }, [birthday])

    return (
        <div >
            <Link to={`/users/${_id}`} className="UserCard-link" >
                <div className="UserCard">
                    <img src={url.replace('upload/', 'upload/w_300,h_300,c_limit/')} className="UserCard-img" alt="user-img" />
                    <div>
                        <div className="UserCard-1">
                            <div className="UserCard-2-1">
                                <div className="UserCard-2-1-1">
                                    <h3 style={{ marginTop: '1vh' }}>{name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase()},&nbsp;{age}y</h3>
                                </div>
                                <div className="UserCard-2-1-2" >
                                    <img src={locationIcon} style={{ height: '1.8vh', paddingRight: '0.8vw' }} alt="location-icon" />
                                    <h5>{area}</h5>
                                </div>
                            </div>

                            <div className="UserCard-2-2">
                                <MatchPer />
                            </div>
                        </div>
                    </div>
                </div>
            </Link >
        </div >
    );
}

export default UserCard;