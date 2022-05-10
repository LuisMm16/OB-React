import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
import '../../styles/contact.scss';


const ContactComponent = ({ contact, changeConected, remove, create }) => {

  function contactConected() {
    if (contact.conected) {
      return (
        <td>
          <i
            className='bi-circle-fill contact-action'
            style={{ color: 'green' }}
            onClick={() => changeConected(contact)}
          />
          <span>Online</span>
        </td>
      )
    } else {
      return (
        <td>
          <i
            className='bi-circle-fill contact-action'
            style={{ color: 'grey' }}
            onClick={() => changeConected(contact)}
          />
          <span>Offline</span>
        </td>
      )
    }
  };

  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.lastName}</td>
      <td>{contact.email}</td>
      {contactConected()}
      <td>
        <i
          className='bi-trash contact-action'
          style={{ color: 'tomato' }}
          onClick={() => remove(contact)}
        />
      </td>
    </tr>
  );
};


ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact).isRequired,
  changeConected: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
};


export default ContactComponent;
