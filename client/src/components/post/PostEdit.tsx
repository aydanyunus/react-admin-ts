import { DateInput, Edit, SimpleForm, TextInput, EditProps } from "react-admin";

const PostEdit = (props: EditProps) => {
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
