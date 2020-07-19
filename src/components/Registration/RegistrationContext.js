import React, { useState, createContext } from "react";

export const RegistrationContext = createContext();

export const RegistrationProvider = (props) => {
  const [person, setPerson] = useState({
    fname: "", //
    lname: "", //
    dob: [1, 1, 2000], // subject to change
    gender: "",
    email: "",
    pword: "", //
    location: {
      longitude: "",
      latitude: "",
    },
    prefs: {},
  });

  return (
    <RegistrationContext.Provider value={[person, setPerson]}>
      {props.children}
    </RegistrationContext.Provider>
  );
};
