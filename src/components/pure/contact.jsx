import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({ contact }) => {

  const [conected, setconected] = useState(contact.conected);

  const changeStatus = () => {
    contact.conected = !contact.conected;
    setconected(contact.conected);
  }

  return (
    <div>
      <h1>Contacto</h1>
      <ul>
        <li>
          Nombre: { contact.name }
        </li>
        <li>
          Apellido: { contact.lastName }
        </li>
        <li>
          Email: { contact.email }
        </li>
        <li>
          { conected ? 'Contacto en línea':'Contacto no disponible' }
        </li>
      </ul>
      <div>
        <button onClick={ changeStatus }>
          Cambiar de estado
        </button>
      </div>
    </div>
  );
};


ContactComponent.propTypes = {
  contacto: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
