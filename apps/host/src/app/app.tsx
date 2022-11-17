import * as React from 'react';
import { NxWelcome } from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const Remote1 = React.lazy(() => import('remote-1/Module'));
const Remote2 = React.lazy(() => import('remote-2/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Host home</Link>
          </li>
          <li>
            <Link to="/remote-1">Remote1</Link>
          </li>
          <li>
            <Link to="/remote-2">Remote2</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <NxWelcome title="host" />
            </div>
          }
        />
        <Route path="/remote-1" element={<Remote1 />} />
        <Route path="/remote-2/*" element={<Remote2 />} />
      </Routes>
    </React.Suspense>
  );
}
