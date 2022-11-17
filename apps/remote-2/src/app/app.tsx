import { Route, Routes, NavLink } from 'react-router-dom';
import { Remote2FeatureFoo } from '@nx-playground/remote-2/feature-foo';
import { Heading } from '@nx-playground/ui';
import styles from './app.module.css';
import clsx from 'clsx';

export function App() {
  function getLinkClassName({ isActive }: { isActive: boolean }) {
    return clsx(styles['link'], {
      [styles['link-active']]: isActive,
    });
  }

  return (
    <div className="container">
      <Heading level={1}>remote-2 app</Heading>

      <div className={styles['navigation']}>
        <ul>
          <li>
            <NavLink className={getLinkClassName} to="" end>
              remote-2 home
            </NavLink>
          </li>
          <li>
            <NavLink className={getLinkClassName} to="page-2">
              remote-2 page
            </NavLink>
          </li>
          <li>
            <NavLink className={getLinkClassName} to="feature-foo">
              remote-2 feature-foo
            </NavLink>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="" element={<Heading level={2}>remote-2 home</Heading>} />
        <Route
          path="page-2"
          element={
            <div>
              <Heading level={2}>remote-2 page-2</Heading>
              <NavLink className={getLinkClassName} to=".." end>
                Click here to go back to remote-2 home.
              </NavLink>
            </div>
          }
        />
        <Route
          path="/feature-foo"
          element={
            <div>
              <Heading level={2}>remote-2 feature-foo</Heading>
              <Remote2FeatureFoo />
            </div>
          }
        />
      </Routes>
    </div>
  );
}
