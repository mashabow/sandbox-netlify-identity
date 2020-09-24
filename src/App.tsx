import React from 'react';
import useNetlifyIdentity from './useNetlifyIdentity';
import './App.css';

const App: React.FC = () => {
  const { user, openLoginModal } = useNetlifyIdentity();
  return (
    <div className="App">
      {user ? (
        <code>
          {user}
        </code>
      ) : (
        <button onClick={openLoginModal}>
          Log in
        </button>
      )}
    </div>
  );
}

export default App;
