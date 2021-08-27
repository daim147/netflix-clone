import { useEffect, useState } from "react";
import "./App.css";
import Homesreen from "./Components/Homescreen/Homesreen";
import { Switch, Route } from "react-router-dom";
import LoginScreen from "./Components/LoginScreen/LoginScreen";
import { auth } from "./Firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUserAuth } from "./features/userSlice";
import ProfileScreen from "./Components/ProfileScreen/ProfileScreen";

function App() {
  const { user } = useSelector(selectUserAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({ email: userAuth.email, uid: userAuth.uid }));
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  if (!user) {
    return <LoginScreen />;
  }
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Homesreen />
        </Route>
        <Route path="/profile" exact>
          <ProfileScreen />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
