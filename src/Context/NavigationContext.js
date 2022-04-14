import React, { useState } from 'react';

export const NavigationContext = React.createContext();

export const NavigationProvider = ({ children }) => {
  const [filterButton, setFilterButton] = useState(true);


  return (
    <NavigationContext.Provider value={{ filterButton, setFilterButton }}>
      {children}
    </NavigationContext.Provider>
  )
}
