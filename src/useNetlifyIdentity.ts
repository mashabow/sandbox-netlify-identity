import { useEffect, useState } from "react";
import * as netlifyIdentity from "netlify-identity-widget";


netlifyIdentity.on("init", (user) => console.log("init", user));
netlifyIdentity.init();

const useNetlifyIdentity = () => {
  const [user, setUser] = useState<netlifyIdentity.User>();

  useEffect(() => {
    netlifyIdentity.on("login", (user) => setUser(user));
    netlifyIdentity.on("logout", () => setUser(undefined));
  }, []);

  return {
    user,
    openLoginModal: () => netlifyIdentity.open(),
  };
};

export default useNetlifyIdentity;
