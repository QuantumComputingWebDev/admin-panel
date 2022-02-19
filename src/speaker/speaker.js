import * as React from "react";
import {
    Create,
    Datagrid,
    DeleteButton,
    Edit,
    EditButton,
    List,
    SelectField,
    SelectInput,
    SimpleForm,
    TextField,
    TextInput,
    ImageInput,
    ImageField
} from 'react-admin';
import PersonIcon from "@material-ui/icons/Person";

const Title = ({ record }) => {
    return <span>{record ? `"${record.name}"` : ''}</span>;
};

const Speaker = {
    list: (props) => (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="title" />
                {/*src, posterSrc*/}
                {/*<ImageInput source="pictures" label="Related pictures" accept="image/*">*/}
                {/*    <ImageField source="src" title="title" />*/}
                {/*</ImageInput>*/}
                <TextField source="about" />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    ),
    edit: (props) => (
        <Edit title={<Title />} {...props}>
            <SimpleForm>
                <TextInput source="name" />
                <TextInput source="title" />
                <TextInput multiline source="about" />
            </SimpleForm>
        </Edit>
    ),
    create: (props) => (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="name" />
            </SimpleForm>
        </Create>
    ),
    icon: PersonIcon
}

export default Speaker;
