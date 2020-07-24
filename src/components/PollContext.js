import React, { useState, createContext } from "react";

export const PollContext = createContext();

export const PollProvider = (props) => {
  const [poll, setPoll] = useState({
    age_range: [18, 77],
    gender: "female",
    location: { latitude: 18, longitude: -77 }, // get this from current user
    options: ["Movie32", "Movie533", "Movie3442"],
    owner: "47d17bcf-768c-4dc0-af2d-d48c6cac45df", // get this from current user
    pollid: "uniquepollid29388",
    question: "What Movie should I watch",
    radius: 2,
    category: "entertainment",
  });

  return (
    <PollContext.Provider value={[poll, setPoll]}>
      {props.children}
    </PollContext.Provider>
  );
};
