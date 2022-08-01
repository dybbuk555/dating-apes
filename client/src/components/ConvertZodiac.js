import { useState } from "react";

function ConvertZodiac({ birthday }) {
    const [zodic, setZodic] = useState(0)
    const findSign = (date) => {
        const days = [21, 20, 21, 21, 22, 22, 23, 24, 24, 27, 23, 22];
        const signs = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"];
        let month = Number(date.slice(5, 7));
        let day = Number(date.slice(8, 10));
        if (month == 0 && day <= 20) {
            month = 11;
        } else if (day < days[month]) {
            month--;
        };
        return signs[month];
    };

    useState(() => {
        setZodic(findSign(birthday.toString()))
    }, [birthday])

    return (
        <p>
            | {zodic}
        </p>
    )
}

export default ConvertZodiac;