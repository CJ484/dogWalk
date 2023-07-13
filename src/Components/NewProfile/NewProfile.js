import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../Redux/User/userSlice.js";
import "./NewProfile.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import toast, { Toaster } from 'react-hot-toast';

const NewProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.reducer.user);
  const { t } = useTranslation();
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);

  //TODO: move notifications to redux-saga
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ username, email, phoneNumber }));
    notify();
  };

  const notify = () => toast.success(t("profile.toastSuccess"), {
    id: 'profile'
  });

  return (
    <div className="profile">
      <h2>{t("profile.title")}</h2>
      <form onSubmit={handleSubmit}>
        <FontAwesomeIcon icon={faUser} />
        <input
          required
          className="inputs"
          type="text"
          placeholder={t("profile.user")}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br />
        <FontAwesomeIcon icon={faEnvelope} />
        <input
          required
          className="inputs"
          type="email"
          placeholder={t("profile.email")}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <FontAwesomeIcon icon={faPhone} />
        <input
          required
          className="inputs"
          type="tel"
          placeholder={t("profile.phone")}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <br />
        <input
          className="submitButton"
          type="submit"
          value={t("profile.button")}
        />
      </form>
      <Toaster />
    </div>
  );
};

export default NewProfile;
