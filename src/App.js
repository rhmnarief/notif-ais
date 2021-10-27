import React, { createContext, useReducer } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TableTugas from './Component/Class/TableTugas';
import EditForm from './Component/Functional/EditForm';
import HomeAdmin from './Component/Functional/HomeAdmin';
import HomeMahasiswa from './Component/Functional/HomeMahasiswa';
import InputForm from './Component/Functional/InputForm';
import Test from './Component/Functional/Test';
import Login from './Component/Login';
import Home from './Home';

// Context
export const AuthContext = createContext()

// Inisiasi State

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  role: 0,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user))
      localStorage.setItem("token", JSON.stringify(action.payload.token))
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
        role: action.payload.role
      }
    case "LOGOUT":
      localStorage.clear()
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      }
    default:
      return state
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <BrowserRouter>
      <Switch>
        <AuthContext.Provider value={{
          state,
          dispatch
        }}>

          <Route exact path="/" component={Login} />


          <Route exact path="/home" component={Home} />


          <Route exact path="/test" component={Test} />



          <Route exact path="/user-dosen" component={HomeAdmin} />
          <Route exact path="/input" component={InputForm} />
          <Route exact path="/edit" component={EditForm} />
          <Route exact path="/table" component={TableTugas} />


          <Route exact path="/user-mahasiswa" component={HomeMahasiswa} />

        </AuthContext.Provider>

      </Switch>
    </BrowserRouter>

  );
}

export default App;
