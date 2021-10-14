import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EditForm from './Component/Functional/EditForm';
import HomeAdmin from './Component/Functional/HomeAdmin';
import HomeMahasiswa from './Component/Functional/HomeMahasiswa';
import InputForm from './Component/Functional/InputForm';
import Login from './Component/Functional/Login';


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />

        <Route exact path="/user-dosen" component={HomeAdmin} />
        <Route exact path="/input" component={InputForm} />
        <Route exact path="/edit" component={EditForm} />

        <Route exact path="/user-mahasiswa" component={HomeMahasiswa} />





      </Switch>

    </BrowserRouter>

  );
}

export default App;
