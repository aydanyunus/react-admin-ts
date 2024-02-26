import { Create, DateInput, SimpleForm, TextInput, CreateProps } from "react-admin";

const PostCreate = (props: CreateProps) => {
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
