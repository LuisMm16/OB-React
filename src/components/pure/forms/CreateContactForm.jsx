import React, { useRef } from "react";
import PropTypes from 'prop-types';
import { Contact } from "../../../models/contact.class";

export const CreateContactForm = ({ create }) => {

  const nameRef = useRef('');
  const lastNameRef = useRef('');
  const emailRef = useRef('');

  function createContact(e) {
    e.preventDefault();
    const newContact = new Contact(
      nameRef.current.value,
      lastNameRef.current.value,
      emailRef.current.value,
      false
    );
    create(newContact);
  }

  return (
    <form onSubmit={createContact} className='d-flex flex-column mt-3'>
      <input
        ref={nameRef}
        placeholder="Name"
        id='inputName'
        type='text'
        className="form-control mt-2"
      />
      <input
        ref={lastNameRef}
        placeholder="Last Name"
        id='inputLastName'
        type='text'
        className="form-control mt-2"
      />
      <input
        ref={emailRef}
        placeholder="Email"
        id='inputEmail'
        type='email'
        className="form-control mt-2"
      />
      <button type="submit" className="btn btn-primary mt-2">
        Add Contact
      </button>
    </form>
  )
};

CreateContactForm.propTypes = {
  create: PropTypes.func.isRequired
}