import { useState, useEffect, createRef, RefObject, useRef, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'hooks/use-app-selector';
import { setData } from 'store/gleb/slice';
import { selectNewDateFromDatePicker } from 'store/gleb/selectors';
import { getDateStringFromTimestamp } from './helpers';

import styles from './date-picker.module.css';

type DateProps = {
  onChange: (e: string) => void;
};

export function DatePicker({ onChange }: DateProps) {
  const dispatch = useDispatch();
  const date = useAppSelector(selectNewDateFromDatePicker);

  const inputRef = useRef<HTMLInputElement>(null);
  const [isDatePickerShown, setIsDatePickerShown] = useState(false);
  let dateValue;

  const hideDatePicker = (e: MouseEvent) => {
    if (isDatePickerShown && !inputRef.current?.contains(e.target as Node)) {
      setIsDatePickerShown(false);
    }
  };

  const setDateToInput = (timestamp: string) => {
    const dateString = getDateStringFromTimestamp(timestamp);
    if (inputRef.current) inputRef.current.value = dateString;
  };

  useEffect(() => {
    window.addEventListener('click', hideDatePicker);
    setDateToInput(date);
    return () => {
      window.removeEventListener('click', hideDatePicker);
    };
  }, [isDatePickerShown]);

  const setDateInsideComponent = (dateValue: string) => {
    dispatch(setData(dateValue));
    /** Pass data to parent */
    onChange(dateValue);
  };

  const updateDateFromInput = (e: ChangeEvent<HTMLInputElement>) => {
    const dateValue = e.target.value;
    if (dateValue && dateValue !== null) {
      setDateInsideComponent(dateValue);
    }
  };

  const handleClick = () => setIsDatePickerShown(true);

  return (
    <div>
      <div className={styles.dp_input} onClick={handleClick}>
        <input type='date' data-testid='inputRef' ref={inputRef} value={dateValue} onChange={updateDateFromInput} />
      </div>
    </div>
  );
}
