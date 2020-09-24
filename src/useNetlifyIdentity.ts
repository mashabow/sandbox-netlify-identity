import { useEffect, useState } from "react";
import * as netlifyIdentity from "netlify-identity-widget";

netlifyIdentity.init();

const useNetlifyIdentity = () => {
  const [user, setUser] = useState<netlifyIdentity.User | null>(
    netlifyIdentity.currentUser()
  );

  useEffect(() => {
    netlifyIdentity.on("login", (user) => setUser(user));
    netlifyIdentity.on("logout", () => setUser(null));
  }, []);

  return {
    user,
    openModal: () => netlifyIdentity.open(),
    logout: () => netlifyIdentity.logout(),
  };
};

export default useNetlifyIdentity;
