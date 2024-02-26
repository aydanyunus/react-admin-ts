import {
  Datagrid,
  DateField,
  DeleteButton,
  EditButton,
  List,
  TextField,
} from "react-admin";
import { ListProps } from "../../types/ListType";


const PostList = (props: ListProps) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="listTitle" />
        <DateField source="publishedAt" />
        <EditButton resource="posts" />
        <DeleteButton resource="posts" />
      </Datagrid>
    </List>
  );
};

export default PostList;
