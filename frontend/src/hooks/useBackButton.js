import React from 'react';

export const useBackButton = (callback, deps = []) => {
  React.useEffect(() => {
    function onBackButtonEvent(e) {
      e.preventDefault();
      callback();
    }

    window.history.pushState(null, '', window.location.pathname);
    window.addEventListener('popstate', onBackButtonEvent);

    return () => {
      window.removeEventListener('popstate', onBackButtonEvent);
    };
  }, deps);
};
