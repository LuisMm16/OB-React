import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';


const ContactList = () => {

  const defaultContact = new Contact('Luis', 'Martinez', 'lemartinezm@unitru.edu.pe', false);

  return (
    <div>
      <div>
        <h1>Contactos</h1>
      </div>
      
      <ContactComponent contact={ defaultContact }></ContactComponent>
    </div>
  );
};


export default ContactList;
