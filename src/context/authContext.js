import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthContextProviver = ({ children }) => {
  let initial = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(initial);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const handleLogout = () => setUser(null);
  const handleLogin = (payload) => setUser(payload);

  return (
    <AuthContext.Provider
      value={{
        user,
        onLogin: handleLogin,
        onLogout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProviver;
