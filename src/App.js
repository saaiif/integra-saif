import React, { useEffect, createContext, useReducer } from "react";

import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddStudent from "./Components/AddStudent/AddStudent";
import EditStudent from "./Components/EditStudent/EditStudent";
import { reducer, initialState } from "./reducer/useReducer";

export const UserContext = createContext();

function App({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("main", JSON.stringify(state));
  }, [state]);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/addstudent' component={AddStudent} />
          <Route path='/edit/:id' component={EditStudent} />
        </Switch>
        {children}
      </div>
    </UserContext.Provider>
  );
}

export default App;
