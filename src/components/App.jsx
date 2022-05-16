import { useState} from "react";
import { useFetchContactsQuery, useCreateContactMutation } from "redux/contactsSlice";

import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";

import { TitleForm } from "components/ContactForm/ContactForm.styled";
import { TitleContacts } from "components/Contact/Contact.styled";

export default function App() {
  const { data: contacts, isFetching, isError } = useFetchContactsQuery();
  const [addContact, { isLoading: isAdding }] = useCreateContactMutation();
  const [filter, setFilter] = useState("");


  const checkContact = (name) => {
    const normilizedName = name.toLowerCase();
    const nameChecked = (contact) => normilizedName === contact.name.toLowerCase()
    
    return !nameChecked  
  };

  const formSubmitHandler = ({ name, phone }) => {

    if (checkContact(name)) {
      alert(`${name} is already in contacts.`);
    } else {
      addContact({ name, phone });
    }
  };

   const getContactList = () => {
     const normilizedFilter = filter.toLocaleLowerCase();
     return contacts.filter((contact) =>
       contact.name.toLocaleLowerCase().includes(normilizedFilter)
     );
   };

  const changeFilter = (event) => {
    setFilter(event.target.value);
  };


  return (
    <>
      <TitleForm>Phonebook</TitleForm>
      <ContactForm onSubmit={formSubmitHandler} adding={isAdding}/>

      <TitleContacts>Contacts</TitleContacts>
      <Filter value={filter} onChange={changeFilter} />
      <>
        {isError && <h2> Something went wrong  </h2>}
        {isFetching && <h2> Loading contacts...</h2>}
        {contacts && <ContactList getContactList={getContactList()} />} 
      </>  
    </>
  );
}
