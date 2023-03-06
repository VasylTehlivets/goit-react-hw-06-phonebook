import { ContactFilter } from "./ContactFilter/ContactFilter";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import css from "./App.module.css"

export const App = () => {
  return (
    <section>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.head}>Contacts</h2>
      < ContactFilter />
      <ContactList />
    </section>
  );
};


