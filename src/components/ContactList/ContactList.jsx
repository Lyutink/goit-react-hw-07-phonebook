import PropTypes from "prop-types";

import Contact from "../Contact/Contact";

export default function ContactList({ getContactList}) {
  return (
    <ul>
      {getContactList.map(({ id, name, phone }) => (
        <Contact
          name={name}
          phone={phone}
          idContact={id}
          key={id}
        />
      ))}
    </ul>
  );
}

Contact.propTypes = {
  getContactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }).isRequired
  )
};
