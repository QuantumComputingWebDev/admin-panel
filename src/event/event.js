import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Create,
    NumberField,
    DateInput,
    NumberInput,
    DateField,
    DeleteButton
} from 'react-admin';
import EventIcon from '@material-ui/icons/Event';


const Title = ({ record }) => {
    return <span>{record ? `"${record.name}"` : ''}</span>;
};

const Event = {
    list: (props) => (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                {/*<TextField source="title" />*/}
                {/*<TextField source="briefDescription" />*/}
                {/*<TextField source="briefDescription" />*/}
                {/*<NumberField source="day" />*/}
                {/*<DateField source="date" />*/}
                {/*<TextField source="description" />*/}
                {/*<ReferenceField source="speaker" reference="person">*/}
                {/*    <TextField source="name" />*/}
                {/*</ReferenceField>*/}
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    ),
    // edit: (props) => (
    //     <Edit title={<Title />} {...props}>
    //         <SimpleForm>
    //             <TextInput source="title" />
    //             <NumberInput source="day" />
    //             <DateInput source="date" />
    //             <ReferenceInput source="id" reference="person">
    //                 <SelectInput optionText="name" />
    //             </ReferenceInput>
    //             <TextInput source="briefDescription" />
    //             <TextInput source="description" />
    //         </SimpleForm>
    //     </Edit>
    // ),
    // create: (props) => (
    //     <Create {...props}>
    //         <SimpleForm>
    //             <TextInput source="title" />
    //             <NumberInput source="day" />
    //             <DateInput source="date" />
    //             <ReferenceInput source="id" reference="person">
    //                 <SelectInput optionText="name" />
    //             </ReferenceInput>
    //         </SimpleForm>
    //     </Create>
    // ),
    icon: EventIcon
}

export default Event;