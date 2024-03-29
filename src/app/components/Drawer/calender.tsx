import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import React, {useState } from 'react';
import { Calendar, theme, Alert } from 'antd';

const BookingCalender: React.FC = () => {
  const { token } = theme.useToken();
  const [value, setValue] = useState(() => dayjs('2024-01-25'));
  const [selectedValue, setSelectedValue] = useState(() => dayjs('2024-01-25'));

  const onSelect = (newValue: Dayjs) => {
    setValue(newValue);
    setSelectedValue(newValue);
    console.log(selectedValue.format('YYYY-MM-DD'))
  };

  const onPanelChange = (newValue: Dayjs) => {
    setValue(newValue);

  };


  const wrapperStyle: React.CSSProperties = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  return (
    <div style={wrapperStyle}>
      <Alert message={`You selected date: ${selectedValue?.format('YYYY-MM-DD')}`} />
      <Calendar fullscreen={false} value={value} onSelect={onSelect} onPanelChange={onPanelChange} />
    </div>
  );
};

export default BookingCalender;