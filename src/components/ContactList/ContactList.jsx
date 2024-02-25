import React from 'react';
import style from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={style.list}>
    {contacts &&
      contacts.map(({ id, name, number }) => (
        <li className={style.listItem} key={id}>
          <span className={style.listItemText}>{name}:</span>
          <span className={style.listItemText}>{number}:</span>
          <button
            className={style.button}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
  </ul>
);

export default ContactList;
