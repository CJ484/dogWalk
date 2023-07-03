import React from "react";
import { useSelector } from "react-redux";

const CurrentProfile = () => {
    const user = useSelector(state => state.reducer.user);

    if (user.username === '') {
        return <div></div>
    } else {
        return (
            <div>
                <h3>Welcome!</h3>
                <h3>{user.username}</h3>
                <h3>{user.email}</h3>
                <h3>{user.phoneNumber}</h3>
            </div>
        )
    }
}

export default CurrentProfile