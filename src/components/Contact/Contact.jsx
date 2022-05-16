import PropTypes from "prop-types";
import { useDeleteContactMutation } from "redux/contactsSlice";
import { ContactItem, ContactName, ContactNumber, BtnDelete } from "./Contact.styled";

export default function Contact({ name, phone, idContact }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <ContactItem>
      <p>
        <ContactName>{name}:</ContactName>
        <ContactNumber>{phone}</ContactNumber>
      </p>
  
      <BtnDelete type="button" onClick={() => deleteContact(idContact)}>
        {isDeleting ? "Deleting" : "Delete"}
      </BtnDelete>
    </ContactItem>
  );
}

Contact.propTypes = {
  idContact: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
