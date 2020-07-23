import React, { useState, createContext } from "react";

export const PollContext = createContext();

export const PollProvider = (props) => {
  const [poll, setPoll] = useState({
    age_range: [18, 77],
    gender: "female", // Still need to implement this
    location: { latitude: 18, longitude: -77 }, // get this from current user
    options: ["Movie32", "Movie533", "Movie3442"],
    owner: "c4a3d50d-01a2-434d-9516-9333496b4732", // get this from current user
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
