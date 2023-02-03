
import React, { useState } from "react";

export const UserContext = React.createContext({});  // 1

const getLoggedInUser = () => {
  const localUser = JSON.parse(localStorage.getItem('vsn-user'));
  return localUser || null;
}

const UserProvider = (props) => {
  const [user, setUser] = useState(getLoggedInUser());

  const handleUserLogin = (loggedInUser) => {
    setUser(loggedInUser);
    localStorage.setItem('vsn-user', JSON.stringify(loggedInUser));
  }

  const handleLogout = () => {
    localStorage.removeItem('vsn-user');
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ user, setUser, handleUserLogin, handleLogout }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;