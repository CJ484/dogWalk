import React from 'react';
import { useSelector } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import './CurrentProfile.styles.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import profile from '../../assets/profile.png';
import { getUserName } from '../../Redux/selectors/user';
import { RootState } from '../../Redux/MiddleWare/index';

interface CurrentProfileProps {
  path: string;
}

function CurrentProfile({ path }: CurrentProfileProps) {
  const { t } = useTranslation();
  const user = useSelector((state: RootState) => getUserName()(state));

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
      <Link to={path}>
        <div className="myProfile">
          <img src={profile} alt="profile" />
          <h5>{t('currentProfile.myProfile')}</h5>
        </div>
      </Link>
    </div>
  );
}

export default CurrentProfile;
