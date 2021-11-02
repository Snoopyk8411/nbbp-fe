import React, { useEffect } from 'react';

export function usePortal(id: string): HTMLElement {
  const rootElemRef = React.useRef(document.createElement('div'));
  const parentElem = document.querySelector(`#${id}`);

  useEffect(
    function setupElement() {
      // Look for existing target dom element to append to
      const element = document.querySelector(`#${id}`);
      // Add the detached element to the parent
      if (element) {
        element.appendChild(rootElemRef.current);
      }
      // This function is run on unmount
      return function removeElement() {
        rootElemRef.current.remove();
      };
    },
    [id, parentElem],
  );

  return rootElemRef.current;
}
