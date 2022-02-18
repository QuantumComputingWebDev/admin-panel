import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import { PersonEdit, PersonCreate, PersonList } from "./person";
import { EventList, EventTitle, EventCreate, EventEdit } from "./event";
import Dashboard from './dashboard'
import AuthProvider from './authProvider'
import PersonIcon from '@material-ui/icons/Person';
import EventIcon from '@material-ui/icons/Event';
import DataProvider from './dataProvider'

const App = () => <Admin dashboard={Dashboard} authProvider={AuthProvider} dataProvider={DataProvider}>
  <Resource name="person" list={PersonList} icon={PersonIcon} edit={PersonEdit} create={PersonCreate} />
  {/* <Resource name="event" list={PersonList} icon={CollectionsIcon} edit={PersonEdit} create={PersonCreate} /> */}
  <Resource name="event" list={EventList} icon={EventIcon} edit={EventEdit} create={EventCreate} />
</Admin>;

export default App;