import { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import RegistrationPage from "./pages/RegistrationPage";
import UserContext from "./contexts/userContext";
import UsersPage from "./pages/Users";
import LoginPage from "./pages/Login";
import { refresh } from "./api";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token) {
      refresh(token).then((response) => {
        setUser(response.data.data);
      });
    }
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Switch>
        <Route exact path='/' component={HomePage} />;
        <Route exact path='/profile' component={ProfilePage} />
        <Route exact path='/registration' component={RegistrationPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/users' component={UsersPage} />
      </Switch>
    </UserContext.Provider>
  );
}

export default App;
