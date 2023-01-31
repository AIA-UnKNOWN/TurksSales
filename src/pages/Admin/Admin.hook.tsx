import { useState } from 'react';

export default () => {
  const [isAuthenticated, setIsAthenticated] = useState<boolean>(false);

  return {
    isAuthenticated,
  }
}