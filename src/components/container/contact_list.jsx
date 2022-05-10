import React, { useState } from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';
import { CreateContactForm } from '../pure/form/CreateContactForm';


const ContactList = () => {

  const defaultContact1 = new Contact('Luis', 'Martinez', 'luis@imaginagroup.com', false);
  const defaultContact2 = new Contact('Martín', 'Mendoza', 'martin@imaginagroup.com', false);
  const defaultContact3 = new Contact('Claudia', 'Ramos', 'claudia@imaginagroup.com', false);

  // State
  const [contacts, setContacts] = useState([
    defaultContact1,
    defaultContact2,
    defaultContact3
  ])

  /**
   * Toggle between Online and Offline
   */
  function changeConected(contact) {
    const tempContacts = [...contacts];
    const index = contacts.indexOf(contact);
    tempContacts[index].conected = !tempContacts[index].conected;
    setContacts(tempContacts);
  }

  function deleteContact(contact) {
    const tempContacts = [...contacts];
    const index = contacts.indexOf(contact);
    tempContacts.splice(index, 1);
    setContacts(tempContacts);
  }

  function createContact(contact) {
    const tempContacts = [...contacts];
    tempContacts.push(contact);
    setContacts(tempContacts);
  }

  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Conected</th>
          </tr>
        </thead>
        <tbody>
          {
            contacts.map((contact) => (
              <ContactComponent
                contact={contact}
                changeConected={changeConected}
                remove={deleteContact}
              />
            ))
          }
        </tbody>
      </table>

      <CreateContactForm create={createContact} />

    </div>
  );
};


export default ContactList;
