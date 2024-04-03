import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import React, { useState, useEffect } from "react";
import { Calendar, theme, Space, TimePicker } from "antd";

// Define the type of props
interface BookingCalenderProps {
  open: boolean;
  setSelectedDate: (date: Dayjs) => void;
  setSelectedTime: (time: string) => void;
  next: boolean;
  setNext: React.Dispatch<React.SetStateAction<boolean>>;
}

const BookingCalender: React.FC<BookingCalenderProps> = ({ open, setSelectedDate, setSelectedTime, next, setNext }) => {
  //const [next, setNext] = useState(false);
  const [value, setValue] = useState(() => dayjs());
  const [selectedValue, setSelectedValue] = useState(() => dayjs());
  const { token } = theme.useToken();

  const wrapperStyle: React.CSSProperties = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  const onClickNext = () => setNext(true);

  const onSelect = (newValue: Dayjs) => {
    setValue(newValue);
    setSelectedValue(newValue);
    setSelectedDate(newValue); // Set the selected date in the parent component
  };

  const onPanelChange = (newValue: Dayjs) => setValue(newValue);

  const onChange = (time: Dayjs, timeString: string | string[]) => {
    console.log(timeString);
    setSelectedTime(timeString as string); // Set the selected time in the parent component
  };

  useEffect(() => {
    if (!open) {
      setNext(false);
      // Reset other state variables here
    }
  }, [open]);

  return (
    <>
      {!next && (
        <div>
          <div style={wrapperStyle}>
            <Calendar fullscreen={false} value={value} onSelect={onSelect} onPanelChange={onPanelChange} />
          </div>
          <button
            onClick={onClickNext}
            type="button"
            className="inline-block rounded bg-blue-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-blue-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
          >
            Next
          </button>
        </div>
      )}

      {next && (
        <Space wrap>
          <TimePicker use12Hours format="h:mm a" onChange={onChange} />
        </Space>
      )}
    </>
  );
};

export default BookingCalender;
