import React from 'react';
import './CurrentProfile.styles.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import profile from '../../assets/profile.png';
import { getUserName } from '../../const/selectors/user';
import routes from '../../const/paths';

function CurrentProfile() {
  const { t } = useTranslation();
  const user = getUserName();

  // TODO I should impplement the react-textarea-autosize
  if (user === '') {
    return <div />;
  }
  return (
    <div className="CurrentProfile">
      <div className="speechBubble">
        <h5>
          {t('currentProfile.welcomingHeader')}
          {' '}
          <b>
            {user}
            !
          </b>
        </h5>
      </div>
      <Link exact="true" to={routes.CURRENT_PROFILE.path}>
        <div className="myProfile">
          <img src={profile} alt="profile" />
          <h5>{t('currentProfile.myProfile')}</h5>
        </div>
      </Link>
    </div>
  );
}

export default CurrentProfile;
