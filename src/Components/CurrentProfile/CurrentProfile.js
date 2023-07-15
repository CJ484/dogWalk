import React from "react";
import "./CurrentProfile.styles.scss";
import profile from "../../assets/profile.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { getUserName } from "../../const/selectors/user";
import routes from "../../const/selectors/paths";

const CurrentProfile = () => {
  const { t } = useTranslation();
  const user = getUserName();

  //TODO I should impplement the react-textarea-autosize
  if (user === "") {
    return <div></div>;
  } else {
    return (
      <div className="CurrentProfile">
        <div className="speechBubble">
          <h5>
            {t("currentProfile.welcomingHeader")} <b>{user}!</b>
          </h5>
        </div>
        <Link exact="true" to={routes[4].path} className="myProfile">
          <div>
            <img src={profile} alt="profile" />
            <h5>{t("currentProfile.myProfile")}</h5>
          </div>
        </Link>
      </div>
    );
  }
};

export default CurrentProfile;
