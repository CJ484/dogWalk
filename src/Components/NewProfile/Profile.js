import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../Redux/User/userSlice.js";
import "./Profile.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";


const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.reducer.user);
  const { t } = useTranslation();
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ username, email, phoneNumber }));
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile">
      <h2> Create New Profile</h2>
      <form onSubmit={handleSubmit}>
          <FontAwesomeIcon icon={faUser} />
          <input
          className="inputs"
            type="text"
            placeholder={t('profile.user')}
            onChange={(e) => setUsername(e.target.value)}
          />
    

         <br />
         <FontAwesomeIcon icon={faEnvelope}/>
          <input
          className="inputs"
            type="email"
            placeholder={t('profile.email')}
            onChange={(e) => setEmail(e.target.value)}
          />
  
        <br />
        <FontAwesomeIcon icon={faPhone} />
          <input
          className="inputs"
            type="tel"
            placeholder={t('profile.phone')}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        
        <br />
        <input className="submitButton" type="submit" value={t('profile.button')} />
      </form>
    </div>
  );
};

export default Profile;
