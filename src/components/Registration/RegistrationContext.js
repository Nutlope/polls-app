import React, { useState, createContext } from "react";

export const RegistrationContext = createContext();

export const RegistrationProvider = (props) => {
  const [person, setPerson] = useState({
    fname: "Ariel", //
    lname: "Bao", //
    dob: [10, 28, 1997], // subject to change
    gender: "female",
    email: "yo@lo.com",
    pword: "yolo", //
    location: {
      longitude: "-76.6083072",
      latitude: "39.318323199999995",
    },
    prefs: { music: true, misc: true, lifestyle: true },
    username: "597e4b02-369b-4993-8a77-4cdb50d4dfd1",
  });

  return (
    <RegistrationContext.Provider value={[person, setPerson]}>
      {props.children}
    </RegistrationContext.Provider>
  );
};
