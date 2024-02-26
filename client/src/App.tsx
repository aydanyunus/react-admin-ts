import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import PostList from './components/PostList';
import { fetchUtils } from 'ra-core';
import PostCreate from './components/PostCreate';

function App() {
  return (
    <>
    <Admin dataProvider={simpleRestProvider('http://localhost:5000', fetchUtils.fetchJson, 'X-Total-Count')}>
      <Resource name='posts' list={PostList} create={PostCreate} />

     </Admin>
    </>
  );
}

export default App;
