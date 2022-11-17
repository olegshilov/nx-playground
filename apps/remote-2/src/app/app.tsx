import { NxWelcome } from './nx-welcome';
import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  return (
    <div className="container">
      <NxWelcome title="remote-2" />

      <div className="navigation">
        <ul>
          <li>
            <Link to="">remote-2 home</Link>
          </li>
          <li>
            <Link to="page-2">remote-2 page</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="" element={<h2>remote-2 home</h2>} />
        <Route
          path="page-2"
          element={
            <div>
              <h2>remote-2 page</h2>
              <Link to="">Click here to go back to remote-2 home.</Link>
            </div>
          }
        />
      </Routes>
    </div>
  );
}
