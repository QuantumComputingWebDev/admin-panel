import * as React from "react";
import {
    List, Datagrid, TextField, ReferenceField, EditButton, Edit, SimpleForm, ReferenceInput, SelectInput, TextInput, Create, SelectField
} from 'react-admin';

export const PersonList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="title" />
            <TextField source="about" />
            <SelectField source="position" choices={[{ id: 0, name: 'Speaker' }, { id: 1, name: 'Staff' }]} />
            <EditButton />
        </Datagrid>
    </List>
);

const PersonTitle = ({ record }) => {
    return <span>Post {record ? `"${record.name}"` : ''}</span>;
};

export const PersonEdit = props => (
    <Edit title={<PersonTitle />} {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <SelectInput
                label="Position" source="position" choices={[
                    { id: 1, name: 'Staff' },
                    { id: 0, name: 'Speaker' }
                ]}
                defaultValue='staff' />
            <TextInput source="title" />
            <TextInput multiline source="about" />
        </SimpleForm>
    </Edit>
);

export const PersonCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <SelectInput
                label="Position" source="position" choices={[
                    { id: 1, name: 'Staff' },
                    { id: 0, name: 'Speaker' }
                ]}
                defaultValue='staff' />
        </SimpleForm>
    </Create>
);