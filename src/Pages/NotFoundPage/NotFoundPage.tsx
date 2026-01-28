import { Link } from 'react-router-dom';
import './NotFoundPage.scss';

export default function NotFoundPage() {
  return (
    <div className="notFoundPage">
      <h1 className="notFoundPage__title">404</h1>
      <p className="notFoundPage__description">Uh oh! It looks like the page you're looking for doesn't exist.</p>
      <Link to="/" className="notFoundPage__button">Go to home</Link>
    </div>
  );
}