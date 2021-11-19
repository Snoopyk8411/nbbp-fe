import { useState, useEffect, createRef, RefObject } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'hooks/use-app-selector';
import { setData } from 'store/gleb/slice';
import { selectNewDateFromDatePicker } from 'store/gleb/selectors';
import { getDateStringFromTimestamp } from './helpers';

import styles from './date-picker.module.css';

type DateProps = {
  onChange: (e: string) => void;
};

export function DatePicker(props: DateProps) {
  const dispatch = useDispatch();
  const date = useAppSelector(selectNewDateFromDatePicker);

  const inputRef: RefObject<HTMLInputElement> = createRef();
  const [isShowDatePicker, setIsShowDatePicker] = useState(false);

  const addBackDrop = (e: MouseEvent) => {
    if (isShowDatePicker && !inputRef.current?.contains(e.target as Node)) {
      setIsShowDatePicker(false);
    }
  };

  const setDateToInput = (timestamp: string) => {
    const dateString = getDateStringFromTimestamp(timestamp);
    if (inputRef.current) inputRef.current.value = dateString;
  };

  useEffect(() => {
    window.addEventListener('click', addBackDrop);
    setDateToInput(date);
    return () => {
      window.removeEventListener('click', addBackDrop);
    };
  }, [isShowDatePicker]);

  const setDateInsideComponent = (dateValue: string) => {
    dispatch(setData(dateValue));
    /** Pass data to parent */
    props.onChange(dateValue);
  };

  const updateDateFromInput = () => {
    const dateValue = inputRef.current?.value;
    if (dateValue && dateValue !== null) {
      setDateInsideComponent(dateValue);
    }
  };

  const handleClick = () => setIsShowDatePicker(true);

  return (
    <div>
      <div className={styles.dp_input} onClick={handleClick}>
        <input type='date' data-testid='inputRef' ref={inputRef} onChange={updateDateFromInput} />
      </div>
    </div>
  );
}
