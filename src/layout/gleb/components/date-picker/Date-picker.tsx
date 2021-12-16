import { useEffect, useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'hooks/use-app-selector';
import { setData } from 'store/gleb/slice';
import { selectNewDateFromDatePicker } from 'store/gleb/selectors';
import { getDateStringFromTimestamp } from './helpers';

import datePickerStyles from './date-picker.module.css';

type DateProps = {
  onChange: (e: string) => void;
};

export function DatePicker({ onChange }: DateProps): JSX.Element {
  const dispatch = useDispatch();
  const date = useAppSelector(selectNewDateFromDatePicker);

  const [dateValue, setDateValue] = useState('');

  const setDateToInput = (timestamp: string): void => {
    const dateString = getDateStringFromTimestamp(timestamp);
    setDateValue(dateString);
  };

  useEffect(() => {
    setDateToInput(date);
  }, []);

  const updateDate = (dateValue: string): void => {
    dispatch(setData(dateValue));
    /** Pass data to parent */
    onChange(dateValue);
  };

  const updateDateFromInput = (e: ChangeEvent<HTMLInputElement>): void => {
    const dateValue = e.target.value;
    if (dateValue && dateValue !== null) {
      updateDate(dateValue);
    }
  };

  return (
    <div>
      <div className={datePickerStyles.dp_input}>
        <input type='date' value={dateValue} onChange={updateDateFromInput} />
      </div>
    </div>
  );
}
