import {
  Datagrid,
  DateField,
  DeleteButton,
  EditButton,
  List,
  TextField,
} from "react-admin";

const PostList = (props: any) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <DateField source="published_at" />
        <EditButton resource="posts" />
        <DeleteButton resource="posts" />
      </Datagrid>
    </List>
  );
};

export default PostList;
