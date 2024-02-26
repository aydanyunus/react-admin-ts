import {
  Datagrid,
  DateField,
  DeleteButton,
  EditButton,
  List,
  TextField,
} from "react-admin";

type ListProps = {
  id: string;
  title: string;
  body: string;
  publishedAt: string;
};

const PostList = (props: ListProps) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <DateField source="publishedAt" />
        <EditButton resource="posts" />
        <DeleteButton resource="posts" />
      </Datagrid>
    </List>
  );
};

export default PostList;
