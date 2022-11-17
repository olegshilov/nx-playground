import { lazy, Suspense } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Heading } from '@nx-playground/ui';
import clsx from 'clsx';
import styles from './app.module.css';
import { ThemeButton } from '@nx-playground/theme';

const Remote1 = lazy(() => import('remote-1/Module'));
const Remote2 = lazy(() => import('remote-2/Module'));

function HostPage() {
  return (
    <div className="container">
      <Heading level={1}>host app</Heading>
    </div>
  );
}

export function App() {
  function getLinkClassName({ isActive }: { isActive: boolean }) {
    return clsx(styles['link'], {
      [styles['link-active']]: isActive,
    });
  }

  return (
    <div>
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

          <li className={styles['nav-separator']} />

          <li>
            <ThemeButton />
          </li>
        </ul>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<HostPage />} />
          <Route path="/remote-1" element={<Remote1 />} />
          {/* Should have `/*` in path if remote app contain inner routes */}
          <Route path="/remote-2/*" element={<Remote2 />} />
        </Routes>
      </Suspense>
    </div>
  );
}
