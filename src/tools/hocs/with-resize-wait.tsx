import React, { useEffect } from 'react';

export interface WithResizeProps {
  isResizeTriggered: boolean;
}

export const withResizeWait = <P extends object>(
  component: {
    (props: P): Exclude<React.ReactNode, undefined>;
    displayName?: string;
  },
  componentName = component.displayName || component.name,
): {
  (props: P & WithResizeProps): JSX.Element;
  displayName: string;
} => {
  const WithResizeWait = (props: P & WithResizeProps) => {
    useEffect(() => {
      setTimeout(() => {
        window.dispatchEvent(new Event('resize')); // wait for animation
      }, 0);
    }, [props.isResizeTriggered]);

    return component(props) as JSX.Element;
  };
  WithResizeWait.displayName = `withResizeWait(${componentName})`;

  return WithResizeWait;
};
