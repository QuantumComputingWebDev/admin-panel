import * as React from "react";
import {
    List, Datagrid, TextField, ReferenceField, EditButton, Edit, SimpleForm, ReferenceInput, SelectInput, TextInput, Create, NumberField, DateInput, NumberInput, DateField
} from 'react-admin';

export const EventList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="briefDescription" />
            <TextField source="briefDescription" />
            <NumberField source="day" />
            <DateField source="date" />
            <TextField source="description" />
            <ReferenceField source="speaker" reference="person">
                <TextField source="name" />
            </ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
);

const EventTitle = ({ record }) => {
    return <span>Event {record ? `"${record.title}"` : ''}</span>;
};

export const EventEdit = props => (
    <Edit title={<EventTitle />} {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <NumberInput source="day" />
            <DateInput source="date" />
            <ReferenceInput source="id" reference="person">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="briefDescription" />
            <TextInput source="description" />        
        </SimpleForm>
    </Edit>
);

export const EventCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <NumberInput source="day" />
            <DateInput source="date" />
            <ReferenceInput source="id" reference="person">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);