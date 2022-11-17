import { lazy, Suspense } from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { Heading } from '@nx-playground/ui';
import clsx from 'clsx';
import styles from './app.module.css';

const Remote1 = lazy(() => import('remote-1/Module'));
const Remote2 = lazy(() => import('remote-2/Module'));

export function App() {
  function getLinkClassName({ isActive }: { isActive: boolean }) {
    return clsx(styles['link'], {
      [styles['link-active']]: isActive,
    });
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <nav className={styles['nav']}>
        <ul>
          <li>
            <NavLink className={getLinkClassName} to="/" end>
              host app
            </NavLink>
          </li>
          <li>
            <NavLink className={getLinkClassName} to="/remote-1">
              remote-1 app
            </NavLink>
          </li>
          <li>
            <NavLink className={getLinkClassName} to="/remote-2">
              remote-2 app
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route
          index
          element={
            <div className="container">
              <Heading level={1}>host app</Heading>
            </div>
          }
        />
        <Route path="/remote-1" element={<Remote1 />} />
        <Route path="/remote-2/*" element={<Remote2 />} />
      </Routes>
    </Suspense>
  );
}
