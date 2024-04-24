import { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import RegistrationPage from "./pages/RegistrationPage";
import UserContext from "./contexts/userContext";
import UsersPage from "./pages/Users";


// const userMocData = {
//   id:1,
//   imgSrc: 'https://ic.pics.livejournal.com/pereverstal/78513478/101084/101084_800.jpg',
//     firstName: 'MocJone',
//     lastName: 'MocDoe',
//     isMale:false,
//     email: 'jone@doe.com',
//     password: '12345678',
// }

function App() {
const [user, setUser] = useState(null)

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Switch>
        <Route exact path = '/' component={HomePage} />;
        <Route exact path = '/profile' component={ProfilePage} />
        <Route exact path = '/registration' component={RegistrationPage}/>
        <Route exact path = '/users' component={UsersPage}/>
      </Switch>
    </UserContext.Provider>
  );
}

export default App;
