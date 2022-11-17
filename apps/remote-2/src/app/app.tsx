import { Route, Routes, NavLink } from 'react-router-dom';
import { Heading } from '@nx-playground/ui';
import styles from './app.module.css';
import clsx from 'clsx';
import { Remote2FeatureFoo } from '@nx-playground/remote-2/feature-foo';
import { lazy, Suspense } from 'react';

const Remote2FeatureBar = lazy(async () => {
  const { Remote2FeatureBar } = await import(
    '@nx-playground/remote-2/feature-bar'
  );
  return { default: Remote2FeatureBar };
});

export function App() {
  function getLinkClassName({ isActive }: { isActive: boolean }) {
    return clsx(styles['link-2'], {
      [styles['link-2-active']]: isActive,
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
          <li>
            <NavLink className={getLinkClassName} to="feature-bar">
              remote-2 feature-bar
            </NavLink>
          </li>
        </ul>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
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
          <Route
            path="/feature-bar"
            element={
              <div>
                <Heading level={2}>remote-2 feature-foo</Heading>
                <Remote2FeatureBar />
              </div>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
}
