import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { getAllUserInfo } from '@/Redux/selectors/user';
import { RootState } from '@/Redux/MiddleWare/index';
import { Button } from '@/Components/ui';
import './CurrentProfilePage.scss';

export default function CurrentProfilePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const profileInfo = useSelector((state: RootState) => getAllUserInfo(state));

  const handleEditProfile = () => {
    navigate('/profile');
  };

  return (
    <div className="page">
      <div className="currentProfile__container">
        <div className="currentProfile__header">
          <div className="currentProfile__header__avatar">
            <img 
              src="/images/profile.png" 
              alt={`${profileInfo.username}'s profile`}
            />
          </div>
          <h2 className="currentProfile__header__title">{t('currentProfile.title')}</h2>
        </div>

        <div className="currentProfile__content">
          <div className="currentProfile__content__section">
            <div className="currentProfile__content__section__field">
              <label className="currentProfile__content__section__field__label">
                {t('currentProfile.user')}
              </label>
              <div className="currentProfile__content__section__field__value">
                {profileInfo.username || t('profile.user')}
              </div>
            </div>

            <div className="currentProfile__content__section__field">
              <label className="currentProfile__content__section__field__label">
                {t('currentProfile.email')}
              </label>
              <div className="currentProfile__content__section__field__value">
                {profileInfo.email || 'N/A'}
              </div>
            </div>

            <div className="currentProfile__content__section__field">
              <label className="currentProfile__content__section__field__label">
                {t('currentProfile.phone')}
              </label>
              <div className="currentProfile__content__section__field__value">
                {profileInfo.phoneNumber || 'N/A'}
              </div>
            </div>
          </div>

          <div className="currentProfile__content__actions">
            <Button 
              onClick={handleEditProfile}
              className="currentProfile__content__actions__button"
            >
              {t('profile.button')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}