"use client"
import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import BookingCalender from "./calender"
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import FormComponent from "./form"

const App: React.FC<{ cart: any; totalPrice: number }> = ({ cart, totalPrice }) =>  {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [next, setNext] = useState(false);
  const [success, setSuccess] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    setSuccess(false);
  };



  return (
    <>
      <Button type="primary" onClick={showDrawer} className='absolute z-50 right-10 mt-5 bg-black'>
        Book Now
      </Button>
      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
        {!success && <BookingCalender open={open} next={next} setNext={setNext} setSelectedDate={setSelectedDate} setSelectedTime={setSelectedTime} />}
        {next && <FormComponent success={success} setSuccess={setSuccess} selectedDate={selectedDate} selectedTime={selectedTime} />}
      </Drawer>
    </>
  );
};

export default App;