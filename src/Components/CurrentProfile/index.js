import React from 'react';
import { useSelector } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import './CurrentProfile.styles.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profile from '../../assets/profile.png';
import { getUserName } from '../../Redux/selectors/user';

function CurrentProfile({ path }) {
  const { t } = useTranslation();
  const user = useSelector(getUserName());

  // TODO I should impplement the react-textarea-autosize
  if (isEmpty(user)) {
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
      <Link exact="true" to={path}>
        <div className="myProfile">
          <img src={profile} alt="profile" />
          <h5>{t('currentProfile.myProfile')}</h5>
        </div>
      </Link>
    </div>
  );
}

CurrentProfile.propTypes = {
  path: PropTypes.string.isRequired,
};

export default CurrentProfile;
