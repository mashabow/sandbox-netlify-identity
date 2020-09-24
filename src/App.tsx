import React from "react";
import useNetlifyIdentity from "./useNetlifyIdentity";

const App: React.FC = () => {
  const { user, openModal, logout } = useNetlifyIdentity();
  return (
    <div style={{ margin: 40 }}>
      <p>
        {user ? (
          <button onClick={logout}>Log out</button>
        ) : (
          <button onClick={openModal}>Log in</button>
        )}
      </p>
      {user && (
        <textarea
          value={JSON.stringify(user, null, 2)}
          readOnly
          style={{ width: "100%", height: 500 }}
        />
      )}
    </div>
  );
};

export default App;
