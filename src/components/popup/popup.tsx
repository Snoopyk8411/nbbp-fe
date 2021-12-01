import { MouseEventHandler, useEffect, ReactElement } from 'react';
import popupStyles from './popup.module.css';

export enum HideActionType {
  ClickOutside,
  MouseOut,
}

export interface IPopupProps {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
  hideActionType: HideActionType;
  children: ReactElement | ReactElement[];
}

// eslint-disable-next-line react/prop-types
const Popup: React.FC<IPopupProps> = ({ isVisible, setIsVisible, hideActionType, children }) => {
  const handleClickOutside = (): void =>
    (hideActionType === HideActionType.ClickOutside && setIsVisible(false)) as void;
  const handleMouseLeave = (): void => (hideActionType === HideActionType.MouseOut && setIsVisible(false)) as void;
  const handleClick: MouseEventHandler<Element> = e => e.stopPropagation();

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return (): void => document.removeEventListener('click', handleClickOutside);
  }, []);

  if (!isVisible) {
    return null;
  }
  return (
    <div onMouseLeave={handleMouseLeave} onClick={handleClick} className={popupStyles.container}>
      {children}
    </div>
  );
};

export default Popup;
