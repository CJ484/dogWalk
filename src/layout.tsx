import { Header } from './Components';
import { Routes, Route } from 'react-router-dom';
import { routes } from './const/routes';
import { NotFoundPage } from './Pages';

export default function Layout() {

  return (
    <div className="layout">
      <Header />
      <Routes>
        {Object.values(routes).map((route) => (
          <Route
            key={route.title}
            path={route.path}
            element={route.element}
          />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

