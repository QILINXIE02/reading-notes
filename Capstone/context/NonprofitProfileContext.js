import React, { createContext, useContext, useState } from 'react';

const NonprofitProfileContext = createContext();

export const useNonprofitProfileContext = () => useContext(NonprofitProfileContext);

export const NonprofitProfileProvider = ({ children }) => {
  const [nonprofitProfiles, setNonprofitProfiles] = useState([]);

  const addNonprofitProfile = (profile) => {
    setNonprofitProfiles([...nonprofitProfiles, profile]);
  };

  return (
    <NonprofitProfileContext.Provider value={{ nonprofitProfiles, addNonprofitProfile }}>
      {children}
    </NonprofitProfileContext.Provider>
  );
};
