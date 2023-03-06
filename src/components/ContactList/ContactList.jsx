import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter, deleteContact } from '../../redux/slice';
import css from "../ContactList/ContactList.module.css"
import { useMemo } from 'react';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const findContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }, [contacts, filter]);

  return (
    <ul className={css.list}>
      {findContacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.item}>
            <p className={css.marker}></p>
              <p className={css.name}>{name}:</p>
             <p className={css.number}>{number}</p>
            <button
              className={css.btn}
              type="button"
              onClick={() => dispatch(deleteContact(id))}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
