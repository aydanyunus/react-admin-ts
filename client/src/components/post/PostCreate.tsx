import { Create, DateInput, SimpleForm, TextInput } from "react-admin";
import { ListProps } from "../../types/ListType";

const PostCreate = (props: ListProps) => {
  return (
    <Create title="Create Post" {...props}>
      <SimpleForm>
        <TextInput source="listTitle" />
        <TextInput source="body" multiline />
        <DateInput label="Published" source="publishedAt" />
      </SimpleForm>
    </Create>
  );
};

export default PostCreate;
