import { useSelector } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { getUserName } from '@/Redux/selectors/user';
import { RootState } from '@/Redux/MiddleWare/index';
import './CurrentProfileNavButton.styles.scss';

interface CurrentProfileProps {
  path: string;
}

function CurrentProfile({ path }: CurrentProfileProps) {
  const { t } = useTranslation();
  const user = useSelector((state: RootState) => getUserName()(state));

  if (isEmpty(user)) {
    return <div />;
  }

  return (
    <div className="CurrentProfileNavButton">
      <div className="speechBubble">
        <h5>
          {t('currentProfile.welcomingHeader')}
          {' '}
          <b>{user}!</b>
        </h5>
      </div>
      <Link to={path} aria-label={t('currentProfile.myProfile')}>
        <div className="myProfile">
          <img src='/images/profile.png' alt={`${user}'s profile`} />
          <h5>{t('currentProfile.myProfile')}</h5>
        </div>
      </Link>
    </div>
  );
}

export default CurrentProfile;
