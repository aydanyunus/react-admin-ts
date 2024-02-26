import { Create, DateInput, SimpleForm, TextInput } from "react-admin";

const PostCreate = (props: any) => {
  return (
    <Create title="Create Post" {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="body" multiline />
        <DateInput label="Published" source="publishedAt" />
      </SimpleForm>
    </Create>
  );
};

export default PostCreate;
