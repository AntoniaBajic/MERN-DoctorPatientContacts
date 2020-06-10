import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Ivo Ivic",
        email: "iivic@gmail.com",
        phone: "0950290000",
        type: "doctor",
      },
      {
        id: 2,
        name: "Mia Mijic",
        email: "mmijic@gmail.com",
        phone: "0959983400",
        type: "patient",
      },
      {
        id: 3,
        name: "Ana Anic",
        email: "aanic@gmail.com",
        phone: "0950234300",
        type: "doctor",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
