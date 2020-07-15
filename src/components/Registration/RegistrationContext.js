import React, { useState, createContext } from "react";

export const RegistrationContext = createContext();

export const RegistrationProvider = (props) => {
  const [person, setPerson] = useState({
    firstname: "",
    lastname: "",
    dob: ["", "", ""], // subject to change
    gender: "",
    email: "",
    password: "",
    location: {
      longitude: "",
      latitude: "",
    },
    interests: [],
  });

  return (
    <RegistrationContext.Provider value={[person, setPerson]}>
      {props.children}
    </RegistrationContext.Provider>
  );
};
