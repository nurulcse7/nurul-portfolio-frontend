import { useEffect } from 'react';

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Nurul Portfolio`;
  }, [title]);
};

export default useTitle;

//
