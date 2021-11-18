import { useState, useEffect, useRef, createRef, RefObject } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'hooks/use-app-selector';
import { setData } from 'store/gleb/slice';
import { selectNewDateFromDatePicker } from 'store/gleb/selectors';
import { getDateStringFromTimestamp } from './helpers';
import { IDateData } from './interfaces';

import styles from './date-picker.module.css';

type DateProps = {
  onChange: (e: string) => void;
};

export function DatePicker(props: DateProps) {
  const dispatch = useDispatch();
  const date = useAppSelector(selectNewDateFromDatePicker);

  const el = useRef<HTMLInputElement>(null);
  const inputRef: RefObject<HTMLInputElement> = createRef();
  const [showDatePicker, setShowDatePicker] = useState(false);

  const addBackDrop = (e: MouseEvent) => {
    if (showDatePicker && el && !(el as any).current.contains(e.target)) {
      setShowDatePicker(false);
    }
  };

  const setDateToInput = (timestamp: string) => {
    const dateString = getDateStringFromTimestamp(timestamp);
    if (inputRef.current) inputRef.current.value = dateString;
  };

  useEffect(() => {
    //  Only needed when using SSR in Next.js
    // if (!process.browser) {
    //   return;
    // }

    window.addEventListener('click', addBackDrop);
    setDateToInput(date);
    return () => {
      window.removeEventListener('click', addBackDrop);
    };
  }, [showDatePicker]);

  const setDate = (dateData: IDateData) => {
    const selectedDay: string = new Date(dateData.year, dateData.month - 1, dateData.date + 1)
      .toISOString()
      .slice(0, 10);
    dispatch(setData(selectedDay));
    /** Pass data to parent */
    props.onChange(selectedDay);
  };

  const getDateFromDateString = (dateValue: any) => {
    const dateData = dateValue.split('-').map((d: string) => parseInt(d, 10));

    if (dateData.length < 3) {
      return null;
    }

    const year = dateData[0];
    const month = dateData[1];
    const date = dateData[2];
    return { year, month, date };
  };

  const updateDateFromInput = () => {
    const dateValue = inputRef.current?.value;
    const dateData = getDateFromDateString(dateValue);
    if (dateData !== null) {
      setDate(dateData);
    }
  };

  const handleClick = () => setShowDatePicker(true);

  return (
    <div ref={el}>
      <div className={styles.dp_input} onClick={handleClick}>
        <input type='date' data-testid='inputRef' ref={inputRef} onChange={updateDateFromInput} />
      </div>
    </div>
  );
}
