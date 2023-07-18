import { useTranslation } from 'react-i18next';
import './Banner.styles.scss'
function Banner() {
    const { t } = useTranslation();
    return (
        <div className="banner">
            <h1>{t('banner.title')}</h1>
        </div>
    )
}

export default Banner;