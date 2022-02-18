import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import { UserList } from "./users";
import { PostList, PostEdit, PostCreate } from "./posts";
import Dashboard from './dashboard'
import AuthProvider from './authProvider'
import CollectionsIcon from '@material-ui/icons/Collections';
import EventIcon from '@material-ui/icons/Event';
import DataProvider from './dataProvider'

const App = () => <Admin dashboard={Dashboard} authProvider={AuthProvider} dataProvider={DataProvider}>
  <Resource name="person" list={UserList} icon={CollectionsIcon} />
</Admin>;

export default App;