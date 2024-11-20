import React from 'react';

export default function useImagePreview() {
  const backdropRef = React.useRef(null);

  const [expanded, setExpanded] = React.useState(false);

  const handleOpen = () => {
    if (expanded) {
      return;
    }

    setExpanded(true);
  };

  const handleClose = () => {
    setExpanded(false);
  };

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (backdropRef.current && !backdropRef.current.contains(event.target)) {
        handleClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [backdropRef]);

  return {
    backdropRef,
    expanded,
    handleOpen,
    handleClose
  }
}
