import React, { useState } from 'react';

export const ArticleContext = React.createContext();

export const ArticleProvider = ({ children }) => {
  const [selection, setSelection] = useState(null);


  return (
    <ArticleContext.Provider value={{ selection, setSelection }}>
      {children}
    </ArticleContext.Provider>
  )
}
