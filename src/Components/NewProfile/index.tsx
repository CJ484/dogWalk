import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaPhoneAlt, FaUser } from 'react-icons/fa';
import { updateUser } from '@/Redux/user/index';
import { getAllUserInfo } from '@/Redux/selectors/user';
import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/MiddleWare/index';
import './NewProfile.styles.scss';

function NewProfile() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => getAllUserInfo(state));
  const { t } = useTranslation();
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);

  const notify = () => toast.success(t('profile.toastSuccess'), {
    id: 'profile',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateUser({ username, email, phoneNumber }));
    notify();
  };

  return (
    <div className="profile">
      <div className="profile__header">
        <h2 className="profile__title">{t('profile.title')}</h2>
        <p className="profile__subtitle">Update your personal information</p>
      </div>
      <form className="profile__form" onSubmit={handleSubmit}>
        <div className="profile__form__field">
          <label className="profile__form__label" htmlFor="username">
            {t('profile.user')}
          </label>
          <div className="profile__form__inputContainer">
            <FaUser className="profile__form__inputIcon" />
            <input
              required
              id="username"
              name="username"
              className="profile__form__input"
              type="text"
              placeholder={t('profile.user')}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>

        <div className="profile__form__field">
          <label className="profile__form__label" htmlFor="email">
            {t('profile.email')}
          </label>
          <div className="profile__form__inputContainer">
            <FaEnvelope className="profile__form__inputIcon" />
            <input
              required
              id="email"
              name="email"
              className="profile__form__input"
              type="email"
              placeholder={t('profile.email')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="profile__form__field">
          <label className="profile__form__label" htmlFor="phoneNumber">
            {t('profile.phone')}
          </label>
          <div className="profile__form__inputContainer">
            <FaPhoneAlt className="profile__form__inputIcon" />
            <input
              required
              id="phoneNumber"
              name="phoneNumber"
              className="profile__form__input"
              type="tel"
              placeholder={t('profile.phone')}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>
        <button
          className="profile__form__submitButton"
          type="submit"
        >
          <span>{t('profile.button')}</span>
        </button>
      </form>
      <Toaster />
    </div>
  );
}

export default NewProfile;
