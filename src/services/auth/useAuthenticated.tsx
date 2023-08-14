import { useState } from 'react';

export const useAuthenticated = () => {
  let [isAuthenticated] = useState<boolean>(true);

  return { isAuthenticated };
};
