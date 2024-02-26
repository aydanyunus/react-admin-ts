import { DateInput, Edit, SimpleForm, TextInput } from "react-admin";
import { ListProps } from "../types/ListType";

const PostEdit = (props: ListProps) => {
  return (
    <Edit title="Edit Post" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="listTitle" />
        <TextInput source="body" multiline />
        <DateInput label="Published" source="publishedAt" />
      </SimpleForm>
    </Edit>
  );
};

export default PostEdit;
