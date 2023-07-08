import React from "react";
import "./CurrentProfile.styles.scss";
import { useSelector } from "react-redux";
import profile from "../../assets/profile.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const CurrentProfile = () => {
  const { t } = useTranslation();
  const user = useSelector((state) => state.reducer.user);

  if (user.username === "") {
    return <div></div>;
  } else {
    return (
      <div className="CurrentProfile">
        <div className="speechBubble">
          <h5>
            Welcome Back, <b>{user.username}!</b>
          </h5>
        </div>
        <Link exact="true" to="../Pages/CurrentProfile/CurrentProfilePage" className="myProfile">
          <div>
            <img src={profile} alt="profile" />
            <h5>My Profile</h5>
          </div>
        </Link>
      </div>
    );
  }
};

export default CurrentProfile;
