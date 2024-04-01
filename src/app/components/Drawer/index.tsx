"use client"
import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import BookingCalender from "./calender"
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import FormComponent from "./form"

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer} className='absolute z-50 right-10 mt-5 bg-black'>
        Book Now
      </Button>
      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
        <BookingCalender open={open} setSelectedDate={setSelectedDate} setSelectedTime={setSelectedTime} />
        <FormComponent selectedDate={selectedDate} selectedTime={selectedTime} />
      </Drawer>
    </>
  );
};

export default App;