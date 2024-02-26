import { Edit, SimpleForm, TextInput, EditProps } from "react-admin"

const UserEdit = (props: EditProps) => {
  return (
    <Edit title="Edit User" {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="email" multiline />
    </SimpleForm>
  </Edit>
  )
}

export default UserEdit