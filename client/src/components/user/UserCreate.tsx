import { Create, SimpleForm, TextInput } from "react-admin"
import { UserProps } from "../../types/ListType"

const UserCreate = (props: UserProps) => {
  return (
    <Create title="Create New User" {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" multiline />
    </SimpleForm>
  </Create>
  )
}

export default UserCreate