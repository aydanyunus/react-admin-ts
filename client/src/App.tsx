import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import PostList from "./components/post/PostList";
import { fetchUtils } from "ra-core";
import PostCreate from "./components/post/PostCreate";
import PostEdit from "./components/post/PostEdit";
import UserList from "./components/user/UserList";
import UserCreate from "./components/user/UserCreate";
import UserEdit from "./components/user/UserEdit";

function App() {
  return (
    <>
      <Admin
        dataProvider={simpleRestProvider(
          "http://localhost:5000",
          fetchUtils.fetchJson,
          "X-Total-Count"
        )}
      >
        <Resource
          name="posts"
          list={PostList}
          create={PostCreate}
          edit={PostEdit}
        />
        <Resource
          name="users"
          list={UserList}
          create={UserCreate}
          edit={UserEdit}
        />
      </Admin>
    </>
  );
}

export default App;
