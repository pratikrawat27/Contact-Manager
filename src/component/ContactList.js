import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log(props);
    const deleteContactHandler = (id) => {
        props.getContactID(id);
    };
    // const contacts = [{
    //     id: '1',
    //     name: "John",
    //     email: "john@gmail.com",
    // },]
    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickHandler={deleteContactHandler}></ContactCard>
        );
    });
    return (
        <div className="ui celled list">
            {renderContactList}
        </div>
    );
};

export default ContactList;