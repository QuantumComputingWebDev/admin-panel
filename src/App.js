import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import { PersonEdit, PersonCreate, PersonList } from "./person";
import Dashboard from './dashboard'
import AuthProvider from './authProvider'
import CollectionsIcon from '@material-ui/icons/Collections';
import EventIcon from '@material-ui/icons/Event';
import DataProvider from './dataProvider'

const App = () => <Admin dashboard={Dashboard} authProvider={AuthProvider} dataProvider={DataProvider}>
  <Resource name="person" list={PersonList} icon={CollectionsIcon} edit={PersonEdit} create={PersonCreate} />
</Admin>;

export default App;