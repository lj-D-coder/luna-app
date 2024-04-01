import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import React, { useState, useEffect } from "react";
import { Calendar, theme, Space, TimePicker } from "antd";

// Define the type of props
interface BookingCalenderProps {
  open: boolean;
  setSelectedDate: (date: Dayjs) => void;
  setSelectedTime: (time: string) => void;
}

const BookingCalender: React.FC<BookingCalenderProps> = ({ open, setSelectedDate, setSelectedTime }) => {
  const [next, setNext] = useState(false);
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
          >
            Next
          </button>
        </div>
      )}
      <Space wrap>
        <TimePicker use12Hours format="h:mm a" onChange={onChange} />
      </Space>
    </>
  );
};

export default BookingCalender;

