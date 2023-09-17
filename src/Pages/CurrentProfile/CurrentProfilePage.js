import React from 'react';
import './CurrentProfilePage.styles.scss';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getAllUserInfo } from '../../Redux/selectors/user';

function CurrentProfilePage() {
  const { t } = useTranslation();
  const profileInfo = useSelector(getAllUserInfo());
  return (
    <div className="Page">
      <div className="currentProfile">
        <h2>
          {t('currentProfile.title')}
          :
        </h2>
        <div className="profileBox">
          <div className="profileText">
            <h4>
              <b>
                {t('currentProfile.user')}
                :
              </b>
            </h4>
            <h4>
              <b>
                {t('currentProfile.email')}
                :
              </b>
            </h4>
            <h4>
              <b>
                {t('currentProfile.phone')}
                :
              </b>
            </h4>
          </div>
          <div className="profileInfo">
            <h4>{profileInfo.username}</h4>
            <h4>{profileInfo.email}</h4>
            <h4>{profileInfo.phoneNumber}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentProfilePage;
