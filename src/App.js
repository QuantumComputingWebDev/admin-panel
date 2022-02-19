import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import Speaker from "./speaker/speaker";
import Staff from "./staff/staff";
import Event from "./event/event";

import Dashboard from './dashboard'
import AuthProvider from './authProvider'
import DataProvider from './DataProvider'

const App = () => <Admin dashboard={Dashboard} authProvider={AuthProvider} dataProvider={DataProvider}>
  <Resource name="staff" {...Staff} />
  <Resource name="speaker" {...Speaker} />
  <Resource name="event" {...Event} />
</Admin>;

export default App;